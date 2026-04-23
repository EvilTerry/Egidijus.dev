<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
  <main class="flex flex-col min-h-screen bg-paper">
    <Header class="fixed top-0 left-0 right-0 z-10 bg-paper border-b border-line"/>
    <RouterView class="flex-1 pt-16" />
    <Footer />
  </main>
</template>