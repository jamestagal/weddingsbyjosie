<script>
  import { onMount } from 'svelte';
  import Head from "./head.svelte";
  import Header from "./header.svelte";
  import Footer from "./footer.svelte";
  import { makeTitle } from "../scripts/make_title.svelte";
  import Login from "./login.svelte";
  export let content, layout, env, allContent, allLayouts, user;

  let hash;
  onMount(async () => {
    hash = window.location.hash;
  });
</script>

<html lang="en">
  <Head title={makeTitle(content.filename)} {env} />
  <body>
    {#if user && $user.isAuthenticated}
      <svelte:component this={$user.menu} {user} bind:content />
    {/if}
    <Login bind:hash {user} />
    <main class="page">
      <Header />
      <div class="site-main">
        <svelte:component
          this={layout}
          {...content.fields}
          {allContent}
          {allLayouts}
          {content}
          {env}
        />
      </div>
      <Footer />
    </main>
  </body>
</html>
