<script>
  export let data;
</script>

<div>
  <header>
    <h1>{data.title}</h1>
    <p>{data.description}</p>
  </header>
</div>

<style>
  div {
    margin: 0 10%;
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    color: white;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(8px);
  }

  header > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    padding-bottom: 1rem;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  header > p {
    line-height: 1.5rem;
    font-family: sans-serif;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
