import { Link } from 'react-router-dom';

type ProjectProps = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ slug, title, description, tech }: ProjectProps) {
  return (
    <Link 
      to={`/projects/${slug}`}
      className="block h-full group"
    >
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-green-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 mb-4 leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
           {tech.slice(0, 3).map(t => (
             <span key={t} className="text-xs text-neutral-400 bg-neutral-50 px-2 py-1 rounded">
               {t}
             </span>
           ))}
        </div>
      </div>
    </Link>
  );
}
