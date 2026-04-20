<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: 1,
    slug: "bruh",
    title: "bruh-the-title",
    description: "description",
    tags: ["AI", "ML"],
    date: "date",
    repo: null,
    demo: null,
    published: true,
  },
  {
    id: 2,
    slug: "bruh2",
    title: "bruh-the-title2",
    description: "description",
    tags: ["AI"],
    date: "date",
    repo: null,
    demo: null,
    published: true,
  },
];
</script>

<template>
  <section class="px-4 py-10 max-w-5xl mx-auto w-full">
    <div class="mb-8">
      <h2 class="text-3xl font-bold mb-2 text-neutral-800">Projects</h2>
      <p class="text-neutral-600">
        A collection of things I've built to learn and solve problems.
      </p>
    </div>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
      />
    </div>
    <div class="mt-12">
      <RouterLink
        to="/"
        class="text-green-500 hover:text-green-600 font-medium hover:underline"
      >
        &larr; Back to Home
      </RouterLink>
    </div>
  </section>
</template>
