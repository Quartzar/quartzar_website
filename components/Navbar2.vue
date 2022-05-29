<template>
  <Disclosure as="nav" class="bg-indigo-900 dark:bg-indigo-900/75 backdrop-blur-lg" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="https://i1.lensdump.com/i/tdqUlH.gif" alt="Quartzar" />
            <img class="hidden lg:block h-[1.9rem] w-auto" src="https://i2.lensdump.com/i/tqpcaZ.gif" alt="Quartzar" />
          </div>
          <div class="hidden sm:block sm:ml-8">
            <div class="flex justify-between px-4 mx-auto text-gray-700 dark:text-gray-200">
                <ContentNavigation v-slot="{ navigation }">
                    <NuxtLink
                        v-for="link of navigation"
                        :key="link._path"
                        :to="link._path"
                        active-class="font-bold transition-all ease-in ease-out"
                        class="mr-4 font-serif transition-all ease-in ease-out"
                    >
                    {{ link.navTitle || link.title }}
                    </NuxtLink>
                </ContentNavigation>
            </div>
          </div>
        </div>

        <!-- Social Icons & Colour Mode -->
        <div class="space-x-3 text-gray-500 transition">
            <a href="https://twitter.com/quartzar32" title="Twitter" class="hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:twitter" /></a>
            <a href="https://github.com/Quartzar" title="GitHub" class="hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:github" /></a>
            <ColorModeSwitch class="hover:text-gray-700 dark:hover:text-gray-300" />
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <ContentNavigation v-slot="{ navigation }">
            <NuxtLink
                v-for="link of navigation"
                :key="link._path"
                :to="link._path"
                active-class="font-serif bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-bold"
                class="mr-4 font-serif bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm"
            >
            {{ link.navTitle || link.title }}
            </NuxtLink>
        </ContentNavigation>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@iconify/icons-heroicons/sm-library'


</script>