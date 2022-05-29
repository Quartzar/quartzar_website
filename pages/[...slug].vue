:root {
  --heading1: 'test'; 
}
<template>
  <div class="max-w-4xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-zinc-940 sm:rounded">
    <!-- Fetch and display the Markdown document from current path -->
    <ContentDoc class="prose prose-gray dark:prose-invert max-w-none">
      
      <!-- Slot if document is not found -->
      <template #not-found>
        <h1 class="text-2xl">
          Page not found
        </h1>
      </template>
    </ContentDoc>
  </div>
</template>

<style lang="postcss">
  /* Customize headers to remove default underline */
  .prose h2 a,
  .prose h3 a {
    @apply no-underline transition-all ease-in;
    &:hover {
      @apply transition-all ease-out duration-500 px-4 py-2 font-semibold bg-white text-slate-700 dark:bg-slate-700 dark:text-white rounded-md shadow-lg shadow-blue-500/50 ring-1 ring-slate-900/5 border-indigo-500 dark:border-sky-500 border-2 border-solid;
    }
  }
  .prose h2,
  .prose h3 {
    @apply font-serif blue-text-shadow;
  }
  .prose h1 {
    @apply font-serif rgb-text after:content-[var(--content-title)] text-center;
  }
</style>

<script setup>
  const route = useRoute();
  const { data } = await useAsyncData(`content-${route.params.slug}`, () =>
    queryContent(`/${route.params.slug}`).findOne()
  );
  console.log({ title: data.value.title });
  const contentCssVar = useCssVar('--content-title');
  contentCssVar.value = `'${data.value.title}'`
</script>

<!-- .emboss-teext::after {
        content: v-bind(content);
        /*content: 'unnnn'; */
        letter-spacing: 5px;
        position: absolute;
        top:0;
        left:0;
        text-shadow: 0px 0px 100px rgba(11,124,199,0.5);
        animation: cycle 10s linear infinite;
    }
        
    @keyframes cycle {
        0% { text-shadow: 0px 0px 100px rgba(11,124,199,0.9);}
        20% { text-shadow: 0px 0px 100px rgba(168,11,199,0.9);}
        40% { text-shadow: 0px 0px 100px rgba(11,199,96,0.9);}
        60% { text-shadow: 0px 0px 100px rgba(199,11,11,0.9);}
        80% { text-shadow: 0px 0px 100px rgba(199,96,11,0.9);}
    }   -->