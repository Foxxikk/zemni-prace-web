import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
  const routes = ["", "/zemni-prace", "/technika", "/reference", "/cenik", "/blog", "/o-nas", "/kontakt", "/ochrana-osobnich-udaju"];
  const now = new Date();
  const pages = routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
