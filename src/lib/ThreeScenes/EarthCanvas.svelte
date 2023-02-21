<script>
  import {
    Canvas,
    DirectionalLight,
    Group,
    Mesh,
    OrbitControls,
    PerspectiveCamera,
    SpotLight,
    T,
  } from "@threlte/core";
  import { spring } from "svelte/motion";
  import { MeshStandardMaterial, SphereGeometry, TextureLoader } from "three";

  /* Object Properties */
  const SCALE = 1;
  const OBJ_SCALE = spring(SCALE);
  const EARTH_RADIUS = 3;
  const MIN_CULLING_DIST = 0.01;
  const EARTH_ROTATION_SPEED = 2;
  const OBJECT_SEG_COUNT = 128;

  /* Viewport Settings */
  const CAMERA_POSITION = { x: 10, y: 10, z: 10 };
  const FIELD_OF_VIEW = 24;
  const IS_ZOOMING = false;
  const IS_PANNING = false;

  /* Lighting Settings */
  const HAS_DYNAMIC_LIGHTING = true;
  const AMBIENT_LIGHT_INTENSITY = 0.025;
  const SPOTLIGHT_DISTANCE = 10;
  const SPOTLIGHT_INTENSITY = 1;

  /* Textures */
  const textureLoader = new TextureLoader();
  const earthColorMap = textureLoader.load("src/textures/earth3.jpg");
  const cloudsColorMap = textureLoader.load("src/textures/earth_clouds.jpg");

  let perspectiveCamera;
  let directionalLight;

  /**
   * ! This consumes GPU
   * TODO: Turn off for low spec devices
   */
  function dynamicLighting(hasDynamicLighting) {
    if (!hasDynamicLighting) return;
    const SPOTLIGHT_OFFSET = 10;
    // console.log(directionalLight?.position);
    directionalLight?.position.set(
      perspectiveCamera?.position.x+120,
      perspectiveCamera?.position.y+120,
      perspectiveCamera?.position.z+120
    );
    perspectiveCamera?.updateProjectionMatrix();
    requestAnimationFrame(dynamicLighting);
  }
  dynamicLighting(HAS_DYNAMIC_LIGHTING);
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
  <SpotLight
    color={0xffeeb1}
    intensity={SPOTLIGHT_INTENSITY}
    position={{ x: SPOTLIGHT_DISTANCE, y: SPOTLIGHT_DISTANCE }}
  />
  <DirectionalLight
    bind:light={directionalLight}
    position={{ x: 10, y: 10, z: 0 }}
  />

  <Group scale={$OBJ_SCALE}>
    <Mesh
      position={{ y: 0.5 }}
      castShadow
      geometry={new SphereGeometry(
        EARTH_RADIUS,
        OBJECT_SEG_COUNT,
        OBJECT_SEG_COUNT
      )}
      material={new MeshStandardMaterial({ roughness: 1, map: earthColorMap })}
    />
    <Mesh
      position={{ y: 0.5 }}
      castShadow
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
