<script setup lang="ts">
import GithubIcon from "@/assets/github.svg?component";
import LinkedinIcon from "@/assets/linkedin.svg?component";
import ResumeIcon from "@/assets/resume.svg?component";
</script>

<template>
  <section class="flex flex-col items-center justify-center grow px-4 py-16">
    <div class="flex flex-col gap-10 w-full max-w-2xl">

      <div class="flex flex-col gap-4">
        <p class="italic font-caveat text-xl text-moss">- A B O U T</p>
        <h1 class="text-6xl font-bold text-ink">Hello! I'm Egidijus.</h1>
        <div class="flex flex-col gap-3 text-muted text-lg max-w-prose">
          <p>A software engineer who enjoys diving into the different layers of the software atmosphere through the projects I build.</p>
          <p>I don't limit myself to one specific area — I follow what feels most fun or relevant. Currently I'm into AI, figuring out how it works and making projects to help in my day-to-day.</p>
          <p>Off-hours: guitar, video games, watching shows. The usual dev off-activities.</p>
        </div>
      </div>

      <hr class="border-line" />

      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col gap-1">
          <p class="text-xs text-muted tracking-widest uppercase">Based in</p>
          <p class="text-ink font-medium">Netherlands, NL</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="text-xs text-muted tracking-widest uppercase">Currently</p>
          <p class="text-ink font-medium">Learning AI</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="text-xs text-muted tracking-widest uppercase">Writes</p>
          <p class="text-ink font-medium">TS · Python · Vue</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="text-xs text-muted tracking-widest uppercase">Listens to</p>
          <p class="text-ink font-medium">Everything</p>
        </div>
      </div>

      <hr class="border-line" />

      <div class="flex flex-col gap-4">
        <p class="text-xs text-muted tracking-widest uppercase">Let's connect</p>
        <div class="flex flex-wrap gap-3">
          <a
            href="https://github.com/EvilTerry"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 rounded-lg border border-moss text-moss hover:bg-moss-soft transition text-sm font-medium"
          ><GithubIcon />GitHub</a>
          <a
            href="https://www.linkedin.com/in/egidijus-ukrinas-203800242/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 rounded-lg border border-moss text-moss hover:bg-moss-soft transition text-sm font-medium"
          ><LinkedinIcon />LinkedIn</a>
          <a
            href="#"
            class="flex items-center gap-2 px-4 py-2 rounded-lg border border-line text-muted cursor-not-allowed text-sm font-medium"
            title="Resume coming soon"
          ><ResumeIcon />Resume</a>
        </div>
      </div>

      <RouterLink
        to="/"
        class="text-pine hover:text-moss font-medium hover:underline"
      >
        &larr; Back to Home
      </RouterLink>

    </div>
  </section>
</template>
