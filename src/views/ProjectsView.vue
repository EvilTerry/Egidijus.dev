<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import { projects } from "@/data/projects";
</script>

<template>
  <section class="flex flex-col items-center justify-center grow px-4 py-16">
    <div class="flex flex-col gap-10 w-full max-w-2xl">
      <RouterLink
        to="/"
        class="text-pine hover:text-moss font-medium hover:underline"
      >
        &larr; Back to Home
      </RouterLink>

      <div class="flex flex-col gap-4">
        <p class="italic font-caveat text-xl text-moss">- P R O J E C T S</p>
        <h1 class="text-6xl font-bold text-ink">Things I've built.</h1>
        <p class="text-muted text-lg max-w-prose">
          Small tools, experiments and side projects. Click any for detail.
        </p>
      </div>

      <hr class="border-line" />

      <div class="flex flex-col gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :slug="project.slug"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :date="project.date"
        />
      </div>
    </div>
  </section>
</template>
