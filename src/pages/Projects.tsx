import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="px-4 py-10 max-w-5xl mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-neutral-800">Projects</h2>
        <p className="text-neutral-600">
          A collection of things I've built to learn and solve problems.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard 
            key={project.slug} 
            {...project} 
          />
        ))}
      </div>
      <div className="mt-12">
        <a href="/" className="text-green-500 hover:text-green-600 font-medium hover:underline">
          &larr; Back to Home
        </a>
      </div>
    </section>
  );
}