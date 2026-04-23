<script setup lang="ts">
import { RouterLink } from "vue-router";
import Footer from "@/components/Footer.vue"
</script>

<template>
  <section
    class="flex flex-col items-center justify-center grow text-center px-4 gap-12"
  >
    <div class="flex flex-col gap-4">
      <p class="italic font-caveat text-xl text-moss">hey -</p>
      <h1 class="text-6xl font-bold text-ink">I'm <span class="text-pine">Egidijus</span>.</h1>
      <p class="text-muted max-w-prose text-lg">
        Software engineer, wandering the layers of the stack.
      </p>
    </div>
    <div class="flex space-x-4">
      <RouterLink
        to="/about"
        class="px-4 py-2 rounded-lg bg-pine text-white font-medium hover:opacity-90 transition"
      >
        about me
      </RouterLink>
      <RouterLink
        to="/projects"
        class="px-4 py-2 rounded-lg border-2 border-moss text-moss font-medium hover:bg-moss-soft transition"
      >
        projects →
      </RouterLink>
    </div>
  </section>
  <Footer />
</template>
