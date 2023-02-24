<script>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  let article;
  let sectionOne, sectionTwo, sectionThree;

  function addAnim() {
    const timeline = gsap.timeline({ duration: 2 });

    ScrollTrigger.create({
      animation: timeline,
      trigger: article,
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: article,
      anticipatePin: 1,
    });

    timeline
      .from(sectionOne, { opacity: 0, display: "none", xPercent: -100 })
      .from(sectionTwo, { opacity: 0, display: "none", xPercent: -100 })
      .from(sectionThree, { opacity: 0, display: "none", xPercent: -100 });

    gsap.to(sectionOne, {
      scrollTrigger: {},
    });
  }

  setTimeout(addAnim, 1000);
</script>

<div>
  <article bind:this={article}>
    <section bind:this={sectionOne}>
      <h1>The Great Wall of China</h1>
      <img src="./images/1.png" alt="" />
      <p>
        The Great Wall of China is one of the most iconic landmarks in the
        world. It is a massive wall that stretches over 13,000 miles across the
        northern part of China. The wall was constructed over a period of many
        centuries, with various dynasties adding to it and modifying it. Today,
        it is one of the most popular tourist attractions in China, drawing
        millions of visitors from all over the world each year.
      </p>
    </section>

    <section bind:this={sectionTwo}>
      <h2>History</h2>
      <p>
        The Great Wall of China was built over 2,000 years ago during the
        Warring States period to protect Chinese territories from invasions. The
        various walls were connected during the Qin dynasty to form a single,
        continuous wall to protect China from northern nomads. The wall was
        constructed using different materials and was modified and extended over
        the centuries by various dynasties, particularly by the Ming dynasty,
        who repaired and reinforced sections, and built new sections. The wall
        served not only for defense but also for border control and trade
        regulation.
      </p>
    </section>

    <section bind:this={sectionThree}>
      <h2>Features</h2>
      <p>
        The Great Wall of China is an impressive engineering feat made of stone,
        brick, tamped earth, and wood. It is 15-30 feet wide and up to 26 feet
        tall, with the most famous sections built during the Ming dynasty using
        brick and stone. The wall has watchtowers, battlements, crenellations,
        and gates used for defense and access control.
      </p>
    </section>
  </article>
</div>

<style>
  div {
    font-family: "poppins", sans-serif;
    padding: 0 4rem;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-image: url("https://images.unsplash.com/photo-1608037521244-f1c6c7635194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  div > article {
    height: 100vh;
    width: 100%;
    background-image: url("https://images.unsplash.com/photo-1608037521244-f1c6c7635194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    -webkit-box-shadow: 0px 0px 64px 19px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 64px 19px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 64px 19px rgba(0, 0, 0, 0.1);
  }

  /* div > article > section:nth-child(2),
  div > article > section:nth-child(3) {
    display: none;
  } */
</style>
