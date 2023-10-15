<script>
  import Head from "./head.svelte";
  import Header from "./header.svelte";
  import Footer from "./footer.svelte";
  import { makeTitle } from "../scripts/make_title.svelte";
  export let content, layout, env, allContent, allLayouts;
</script>

<html lang="en">
  <Head title={makeTitle(content.filename)} {env} />
  <body>
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
