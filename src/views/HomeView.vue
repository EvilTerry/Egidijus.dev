<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="flex flex-col items-center justify-center grow text-center px-4 gap-4"
  >
    <h1 class="text-4xl font-bold mb-4 text-neutral-800">Welcome to my site</h1>
    <p class="text-neutral-600 max-w-prose">
      This is for a little insight into me and to showcase what I have done.
    </p>
    <div class="flex space-x-4 mt-4">
      <RouterLink
        to="/about"
        class="px-4 py-2 rounded-lg bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition"
      >
        Learn more about me
      </RouterLink>
      <RouterLink
        to="/projects"
        class="px-4 py-2 rounded-lg border border-green-500 text-green-500 font-medium hover:bg-green-50 transition"
      >
        View my projects
      </RouterLink>
    </div>
  </section>
</template>
