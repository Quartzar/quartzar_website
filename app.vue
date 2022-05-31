<template>
  <div class="md:py-10">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar2 class = 'navbar-fixed rounded-b-[15px] border-b border-indigo-500 shadow-2xl shadow-indigo-600/50'/>
    <div class="md:pt-10 transition-all ease-in">
      <NuxtPage />
    </div>
    
  </div>
</template>

<style lang="postcss">
body {
  @apply transition-all ease-in-out bg-indigo-50 dark:bg-zinc-940;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0.1;
}
</style>
