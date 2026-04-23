import type { Project } from "@/types";

function parseFrontmatter(raw: string): { data: Record<string, any>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const content = match[2];
  const data: Record<string, any> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(": ");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const raw = line.slice(colon + 2).trim();
    if (raw.startsWith("[") && raw.endsWith("]")) {
      data[key] = raw.slice(1, -1).split(",").map((v) => v.trim()).filter(Boolean);
    } else if (raw === "true") data[key] = true;
    else if (raw === "false") data[key] = false;
    else if (raw === "null") data[key] = null;
    else data[key] = raw;
  }
  return { data, content };
}

const files = import.meta.glob("/src/data/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

export const projects: Project[] = Object.entries(files).map(([path, raw], index) => {
  const { data, content } = parseFrontmatter(raw);
  const slug = path.split("/").pop()!.replace(".md", "");
  return {
    id: index + 1,
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    tags: data.tags ?? [],
    date: data.date ?? "",
    repo: data.repo == null || data.repo === "null" || data.repo === "" ? null : data.repo,
    demo: data.demo == null || data.demo === "null" || data.demo === "" ? null : data.demo,
    published: data.published ?? true,
    content,
  };
}).filter((p) => p.published).sort((a, b) => b.date.localeCompare(a.date));
