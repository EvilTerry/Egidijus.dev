<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import { projects } from "@/data/projects";

const route = useRoute();
const project = computed(() => projects.find((p) => p.slug === route.params.slug));
const html = computed(() => (project.value?.content ? marked(project.value.content) : ""));
const date = computed(() => String(project.value?.date ?? ""));

watchEffect(() => {
  document.title = project.value ? `${project.value.title} — Egidijus` : "404 — Egidijus";
});
</script>

<template>
  <section class="flex flex-col items-center grow px-4 py-16">
    <div class="flex flex-col gap-10 w-full max-w-2xl">

      <RouterLink
        to="/projects"
        class="text-pine hover:text-moss font-medium hover:underline self-start"
      >
        &larr; All projects
      </RouterLink>

      <div v-if="project" class="flex flex-col gap-10">

        <div class="flex flex-col gap-4">
          <p class="italic font-caveat text-xl text-moss">- {{ date }}</p>
          <h1 class="text-5xl font-bold text-ink">{{ project.title }}</h1>
          <p class="text-muted text-lg max-w-prose">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs text-pine bg-moss-soft px-3 py-0.5 rounded-full"
            >{{ tag }}</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            v-if="project.repo"
            :href="project.repo"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 rounded-lg border border-moss text-moss hover:bg-moss-soft transition text-sm font-medium"
          >Repo &nearr;</a>
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 rounded-lg border border-moss text-moss hover:bg-moss-soft transition text-sm font-medium"
          >Demo &nearr;</a>
        </div>

        <hr class="border-line" />

        <div class="markdown" v-html="html" />

      </div>

      <div v-else class="text-muted">Project not found.</div>

    </div>
  </section>
</template>
