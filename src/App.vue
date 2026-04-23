<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue"
</script>

<template>
  <main class="flex flex-col min-h-screen bg-paper">
    <Header class="fixed top-0 left-0 right-0 z-10 bg-paper border-b border-line"/>
    <div class="flex flex-col grow pt-24">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
