<template>
  <div class="md:py-10">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar2 class = 'navbar-fixed rounded-b-lg'/>
    <div class="md:pt-10 transition-all ease-in">
      <NuxtPage/>
    </div>
    
  </div>
</template>

<style lang="postcss">
body {
  @apply transition-all ease-in ease-out bg-indigo-50 dark:bg-zinc-950;
}
</style>
