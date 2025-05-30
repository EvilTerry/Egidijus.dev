import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <nav className="max-w-4xl mx-auto flex justify-center gap-4 py-3 text-sm font-medium text-neutral-700">
        <Link to="/" className="hover:text-black">Home</Link>
        <Link to="/projects" className="hover:text-black">Projects</Link>
      </nav>
    </header>
  );
}

