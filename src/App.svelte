<script>
  import gsap from "gsap";
  import EarthCanvas from "./lib/ThreeScenes/EarthCanvas.svelte";

  let header, header_heading, header_para, header_btn;
  let main;

  const toggleFullscreen = () => {
    const fullscreen_timeline = gsap.timeline({
      defaults: { x: "-200%", opacity: 1, duration: 0.4, ease: "expo.out" },
    });

    fullscreen_timeline
      .to(header_heading, {})
      .to(header_para, {})
      .to(header_btn, {})
      .to([header_heading, header_para, header_btn], {
        display: "none",
        duration: 1.6,
      });
    gsap.to(header, {
      delay: 1.6,
      duration: 1,
      width: 0,
      padding: 0,
    });
    gsap.to(main, { delay: 1.6, duration: 1, width: "100%" });
  };
</script>

<main bind:this={main}>
  <header bind:this={header} class="con-header">
    <h1 bind:this={header_heading}>Magnificient Seven</h1>
    <p bind:this={header_para}>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout.
    </p>
    <button bind:this={header_btn} on:click={toggleFullscreen}>Explore</button>
  </header>
  <div class="con-canvas">
    <EarthCanvas/>
  </div>
</main>

<!-- 
<FrontPage/> -->

<style>
  * {
    --bgColor: #03041c;
  }
  main {
    overflow: hidden;
    display: flex;
  }
  .con-canvas {
    height: 100vh;
    width: 100%;
    background-color: var(--bgColor);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    background-color: var(--bgColor);
    padding: 0 4rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  header > * {
    margin: 0.5rem 0;
    color: white;
  }

  header > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
  }

  header > p {
    font-family: sans-serif;
    line-height: 1.5rem;
  }

  header > button {
    font-weight: bolder;
    color: black;
    width: 100%;
    padding: 1rem 2rem;
  }
</style>
