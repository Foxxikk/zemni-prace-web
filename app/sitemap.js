import { site } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/zemni-prace", "/technika", "/reference", "/o-nas", "/kontakt", "/ochrana-osobnich-udaju"];
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
