type ProjectProps = {
  title: string;
  description: string;
  demo?: string;
  repo?: string;
};

export default function ProjectCard({ title, description, demo, repo }: ProjectProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">{title}</h3>
      <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{description}</p>
      <div className="text-sm flex gap-4 text-blue-600">
        {demo && <a href={demo} className="hover:underline">Live</a>}
        {repo && <a href={repo} className="hover:underline">Code</a>}
      </div>
    </div>
  );
}
