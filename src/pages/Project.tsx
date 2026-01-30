import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <article className="px-4 py-10 max-w-3xl mx-auto flex-grow w-full">
      
      <Link to="/projects" className="text-neutral-500 hover:text-neutral-800 text-sm mb-6 inline-block transition-colors">
        &larr; Back to Projects
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md border border-neutral-200">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              View Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
              Live Demo
            </a>
          )}
        </div>
      </header>

      <hr className="border-neutral-200 mb-8" />
    
      <div 
        className="
          text-neutral-700 leading-relaxed
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
          [&_li]:mb-1
          [&_p]:mb-4
          [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-neutral-900 [&_h3]:mb-2 [&_h3]:mt-6
        "
        dangerouslySetInnerHTML={{ __html: project.content }} 
      />

    </article>
  );
}