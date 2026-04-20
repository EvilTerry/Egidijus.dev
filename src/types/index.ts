export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  repo: URL | null;
  demo: URL | null;
  published: boolean;
}
