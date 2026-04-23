<script setup lang="ts"></script>

<template>
  <section class="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] px-4">
    <div class="flex flex-col gap-6 w-full max-w-2xl">
      <p class="italic font-caveat text-xl text-moss">- 4 0 4</p>
      <h1 class="text-6xl font-bold text-ink">Page not found.</h1>
      <p class="text-muted text-lg max-w-prose">
        Whatever you were looking for isn't here.
      </p>
      <RouterLink to="/" class="text-pine hover:text-moss font-medium hover:underline">
        &larr; Back to Home
      </RouterLink>
    </div>
  </section>
</template>
