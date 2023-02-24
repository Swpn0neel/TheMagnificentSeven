<script>
  import {
    Canvas,
    DirectionalLight,
    Group,
    Mesh,
    OrbitControls,
    PerspectiveCamera,
    T,
  } from "@threlte/core";
  import { spring } from "svelte/motion";
  import { MeshStandardMaterial, SphereGeometry, TextureLoader } from "three";

  /* Object Properties */
  let SCALE = 1;
  let OBJ_SCALE = spring(SCALE);
  const EARTH_RADIUS = 3;
  const MIN_CULLING_DIST = 0.01;
  const EARTH_ROTATION_SPEED = -1;
  const OBJECT_SEG_COUNT = 32;

  /* Viewport Settings */
  const CAMERA_POSITION = { x: 10, y: 10, z: 10 };
  const FIELD_OF_VIEW = 24;
  const IS_ZOOMING = false;
  const IS_PANNING = false;

  /* Lighting Settings */
  const HAS_DYNAMIC_LIGHTING = true;
  const AMBIENT_LIGHT_INTENSITY = 0.025;
  const DIRECTIONAL_DISTANCE = 10;
  const DIRECTIONAL_INTENSITY = 1;

  /* Textures */
  const textureLoader = new TextureLoader();
  // src\textures\earth3.jpg
  const earthColorMap = textureLoader.load("src/textures/earth_base_color.jpg");
  const earthSpecMap = textureLoader.load("src/textures/earth_spec.jpg");
  const earthBumpMap = textureLoader.load("src/textures/earth_bump.jpg");
  const cloudsColorMap = textureLoader.load(
    "src/textures/cloud_base_color.jpg"
  );

  let perspectiveCamera;
  let directionalLight;

  /**
   * ! This consumes GPU
   * TODO: Turn off for low spec devices
   */
  function dynamicLighting(hasDynamicLighting) {
    if (!hasDynamicLighting) return;
    const SPOTLIGHT_OFFSET = 10;
    directionalLight?.position.set(
      perspectiveCamera?.position.x + SPOTLIGHT_OFFSET,
      perspectiveCamera?.position.y + SPOTLIGHT_OFFSET,
      perspectiveCamera?.position.z + SPOTLIGHT_OFFSET
    );
    perspectiveCamera?.updateProjectionMatrix();
    requestAnimationFrame(dynamicLighting);
  }
  dynamicLighting(HAS_DYNAMIC_LIGHTING);

  function zoomIn() {
    $OBJ_SCALE = 1.05;
  }
  function zoomOut() {
    $OBJ_SCALE = 1;
  }
</script>

<Canvas>
  <PerspectiveCamera
    position={CAMERA_POSITION}
    fov={FIELD_OF_VIEW}
    useCamera={true}
    bind:camera={perspectiveCamera}
  >
    <OrbitControls
      enableZoom={IS_ZOOMING}
      enablePan={IS_PANNING}
      target={{ y: 0.5 }}
      autoRotate={true}
      autoRotateSpeed={EARTH_ROTATION_SPEED}
    />
  </PerspectiveCamera>

  <T.AmbientLight intensity={AMBIENT_LIGHT_INTENSITY} />

  <DirectionalLight
    bind:light={directionalLight}
    intensity={DIRECTIONAL_INTENSITY}
    position={{ x: 10, y: 10, z: 10 }}
  />

  <Group scale={$OBJ_SCALE}>
    <Mesh
      position={{ y: 0.5 }}
      geometry={new SphereGeometry(
        EARTH_RADIUS,
        OBJECT_SEG_COUNT,
        OBJECT_SEG_COUNT
      )}
      material={new MeshStandardMaterial({
        fog: true,
        aoMap: earthSpecMap,
        map: earthColorMap,
        aoMapIntensity: 0.25,
        roughnessMap: earthSpecMap,
        bumpScale: 0.1,
      })}
    />
    <Mesh
      interactive
      on:pointerenter={zoomIn}
      on:pointerleave={zoomOut}
      position={{ y: 0.5 }}
      castShadow={true}
      geometry={new SphereGeometry(
        EARTH_RADIUS + MIN_CULLING_DIST,
        OBJECT_SEG_COUNT,
        OBJECT_SEG_COUNT
      )}
      material={new MeshStandardMaterial({
        roughness: 1,
        transparent: true,
        alphaMap: cloudsColorMap,
      })}
    />
  </Group>
</Canvas>
