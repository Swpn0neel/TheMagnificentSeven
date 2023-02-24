<script>
  import { Router, Route } from "svelte-navigator";
  import Home from "./lib/Home/Home.svelte";
  import Page from "./lib/Pages/Page.svelte";
  import { getPageIndex } from "./util/pageIndexHelper";
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap"
    rel="stylesheet"
  />
  <title>Seven Wonders of The World</title>
</svelte:head>

<Router>
  <Route path="/"><Home /></Route>
  <Route path="/:slug" let:params
    ><Page pageIndex={getPageIndex(params.slug)} /></Route
  >
</Router>
