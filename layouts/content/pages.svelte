<script>
  export let components, allLayouts, allContent, content;
</script>

{#each components as { name, fields }}
  <svelte:component
    this={allLayouts["layouts_components_" + name + "_svelte"]}
    {...fields}
    {allContent}
    {content}
  />
{/each}
