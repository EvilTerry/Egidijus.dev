export const projects = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "The website you are looking at right now. Built with cleanliness in mind.",
    content: `<p>I needed a place to showcase my work and thoughts. I decided to build this site from scratch using React and Tailwind CSS.</p>
      <p>The goal was to keep it lightweight, fast, and easy to maintain. In the future, I plan to integrate Sanity CMS to manage this content dynamically.</p>
    `,
    tech: ["React", "Vite", "Tailwind CSS"],
    repo: "https://github.com/EvilTerry/Egidijus.dev",
    demo: null,
    date: "2025-x-x"
  },
  {
    slug: "ai-finance-tracker",
    title: "AI Finance Tracker",
    description: "A smart personal finance tool that categorizes expenses automatically using a machine learning algorithm.",
    content: `<p>Managing finances can be tedious. I wanted to build a solution that automates the boring parts of tracking expenses. (Bank wide system, rather than 1 bank)</p>
      <p>This project uses LinearSVC for now to analyze transaction descriptions and automatically assign them categories like 'Groceries', 'Utilities', or 'Entertainment'.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Automatic categorization via LinearSVC</li>
        <li>Visual dashboard using Recharts (not done)</li>
      </ul>
      <h3>What I learned</h3>
      <p>I learned a lot about categorization while building this.</p>
    `,
    tech: ["pandas", "sklearn"],
    repo: "https://github.com/EvilTerry/FinDashboard-ML",
    demo: null,
    date: "2025-x-x"
  }
];