export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  repo: string | null;
  demo: string | null;
  published: boolean;
  content?: string;
}
