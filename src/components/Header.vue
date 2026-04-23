<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="flex items-center justify-between px-8 py-4 border-b border-line">
    <p class="text-lg font-bold"><span class="text-pine">●</span> egidijus<span class="text-pine">.dev</span></p>
    <nav class="flex gap-6 text-lg">
      <RouterLink
        to="/"
        active-class="text-ink border-b-2 border-pine"
        class="text-muted hover:text-ink transition pb-0.5"
      >home</RouterLink>
      <RouterLink
        to="/about"
        active-class="text-ink border-b-2 border-pine"
        class="text-muted hover:text-ink transition pb-0.5"
      >about</RouterLink>
      <RouterLink
        to="/projects"
        active-class="text-ink border-b-2 border-pine"
        class="text-muted hover:text-ink transition pb-0.5"
      >projects</RouterLink>
    </nav>
  </header>
</template>
