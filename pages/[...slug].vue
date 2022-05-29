<template>
  <div class="max-w-4xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-zinc-900 sm:rounded">
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
  @apply font-serif red-text-shadow;
}
.prose h1 {
  @apply font-serif emboss-text;
}
</style>
