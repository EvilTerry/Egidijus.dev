<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="flex flex-col items-center justify-center grow px-4 py-10 max-w-3xl mx-auto w-full"
  >
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold mb-6 text-neutral-800">About Me</h1>
      <div
        class="prose prose-neutral max-w-none text-neutral-600 space-y-4 leading-relaxed"
      >
        <p>
          Hello! I'm Egidijus — a software engineer who enjoys diving into the
          different layers of the software atmosphere through the projects I
          build.
        </p>
        <p>
          I am passionate about exploring different technologies and I don't
          limit myself to one specific area, I follow what feels most fun or
          relevant at the time. Currently, I am quite into AI, figuring out how
          it works and making projects to help in my day-to-day life. That's the
          most fun part about software: being able to tailor it to your exact
          needs.
        </p>
        <p>
          When I'm not coding, you can find me watching some shows or playing
          video-games OR even playing a guitar (the usual dev off-activities).
        </p>
      </div>
    </div>

    <div class="w-full bg-neutral-50 rounded-xl p-6 border border-neutral-200">
      <h2
        class="text-lg font-semibold text-neutral-800 mb-4 text-center sm:text-left"
      >
        Let's Connect
      </h2>
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
      >
        <a
          href="https://www.linkedin.com/in/egidijus-ukrinas-203800242/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-neutral-300 rounded-lg text-neutral-700 hover:border-blue-600 hover:text-blue-600 transition shadow-sm"
        >
          <img src="@/assets/linkedin.svg" alt="LinkedIn" class="w-5 h-5" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/EvilTerry"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-neutral-300 rounded-lg text-neutral-700 hover:border-gray-900 hover:text-gray-900 transition shadow-sm"
        >
          <img src="@/assets/github.svg" alt="GitHub" class="w-5 h-5" />
          <span>GitHub</span>
        </a>

        <a
          href="#"
          class="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-lg text-neutral-400 cursor-not-allowed shadow-none"
          title="Resume coming soon"
        >
          <img
            src="@/assets/resume.svg"
            alt="Resume"
            class="w-5 h-5 opacity-50"
          />
          <span>Resume</span>
        </a>
      </div>
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
