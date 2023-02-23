<script>
  import gsap from "gsap";
  import EarthCanvas from "./lib/ThreeScenes/EarthCanvas.svelte";
  import FrontPage from "./FrontPage.svelte";

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
    <h1 bind:this={header_heading}>The Magnificient Seven</h1>
    <p bind:this={header_para}>
      A Deep-Dive into the World's magnificent structures, that are the engineering marvels ever created by us. These iconic structures have been recognized for their awe-inspiring design, scale, and technological sophistication and serves as a testament to human ingenuity and the unrelenting pursuit of progress.
    </p>
    <button bind:this={header_btn} on:click={toggleFullscreen}><span>Explore</span></button>
  </header>
  <div class="con-canvas">
    <EarthCanvas/>
  </div>
</main>

<!-- <FrontPage>

</FrontPage> -->


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
    width:50%;
  }

  header > * {
    margin: 0.64rem 0;
    color: white;
  }

  header > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
  }

  header > p {
    font-family: sans-serif;
    line-height: 1.75rem;
    font-family: 'Poppins', sans-serif;
  }

  header > button {
    /* font-weight: bolder;
    color: black;
    width: 100%;
    padding: 1rem 2rem; */
    
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-weight: bold;
  /* font-size: 20px; */
  font-size: 25px;
  justify-content: center;
  /* line-height: 1em; */
  line-height: 0.77em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

button:active,
header > button:hover {
  outline: 0;
}

header > button span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

header > button:hover span {
  background: none;
}

@media (min-width: 768px) {
  button {
    font-size: 24px;
    min-width: 196px;
  }
  }
</style>
