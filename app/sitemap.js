import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { lokality } from "@/lib/lokality";
import { sluzbyDetail } from "@/lib/sluzbyDetail";

export default function sitemap() {
  const routes = [
    "",
    "/zemni-prace",
    "/sluzby",
    "/technika",
    "/reference",
    "/cenik",
    "/blog",
    "/o-nas",
    "/kontakt",
    "/ochrana-osobnich-udaju",
  ];
  const now = new Date();

  const pages = routes.map((r) => ({
    url: site.url + r,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));

  // Podstranky sluzeb - jadro nabidky, proto vysoka priorita.
  const sluzby = sluzbyDetail.map((s) => ({
    url: site.url + "/sluzby/" + s.slug,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Lokalitni podstranky - klicove pro lokalni SEO.
  const obce = lokality.map((l) => ({
    url: site.url + "/zemni-prace/" + l.slug,
    lastModified: now,
    changeFrequency: "monthly",
    priority: l.km === 0 ? 0.9 : 0.8,
  }));

  const posts = getAllPosts().map((p) => ({
    url: site.url + "/blog/" + p.slug,
    lastModified: p.date ? new Date(p.date) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...sluzby, ...obce, ...posts];
}
