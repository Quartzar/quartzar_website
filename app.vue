<template>
  <div class="sm:py-10">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar />
    <NuxtPage />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-zinc-50 dark:bg-zinc-950;
}
</style>
