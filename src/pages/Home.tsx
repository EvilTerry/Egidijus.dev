export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center flex-grow text-center px-4 gap-4">
      <h1 className="text-4xl font-bold mb-4 text-neutral-800">Welcome to my site</h1>
      <p className="text-neutral-600 max-w-prose">
        This is for a little insight into me and to showcase what I have done.
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="/about"
          className="px-4 py-2 rounded-lg bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition">
          Learn more about me
        </a>
        <a href="/projects"
          className="px-4 py-2 rounded-lg border border-green-500 text-green-500 font-medium hover:bg-green-50 transition">
          View my projects
        </a>
      </div>
    </section>
  );
}