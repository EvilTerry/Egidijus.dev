<script setup lang="ts">
import type { Project } from "@/types";

defineProps<Pick<Project, "slug" | "title" | "description" | "tags" | "date">>();
</script>

<template>
  <RouterLink
    :to="`/projects/${slug}`"
    class="flex flex-col gap-2 p-5 rounded-lg border border-line bg-white hover:border-moss transition group"
  >
    <div class="flex items-center justify-between">
      <p class="text-ink font-medium group-hover:text-moss transition">{{ title }}</p>
      <p class="text-sm text-muted">{{ date.slice(0, 4) }}</p>
    </div>
    <p class="text-muted text-sm">{{ description }}</p>
    <div class="flex items-end justify-between mt-1">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-xs text-pine bg-moss-soft px-3 py-0.5 rounded-full"
        >{{ tag }}</span>
      </div>
      <span class="text-muted group-hover:text-moss transition">&rarr;</span>
    </div>
  </RouterLink>
</template>
