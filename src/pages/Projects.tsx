import ProjectCard from "../components/ProjectCard";

const projects = [
  { title: "Site 1", description: "Cool stuff", demo: "#", repo: "#" },
  { title: "Site 2", description: "Even cooler", demo: "#", repo: "#" },
];

export default function Projects() {
  return (
    <section className="px-4 py-10 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-neutral-800">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}