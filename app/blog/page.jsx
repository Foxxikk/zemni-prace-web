import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata = {
  title: "Blog – zemní a výkopové práce",
  description:
    "Články a rady o zemních a výkopových pracích, výkopech základů, bazénech a přípojkách v okrese Praha-východ.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getAllPosts();
  return (
    <>
      <div className="page-head">
        <div className="container">
          <p className="breadcrumb">Úvod / Blog</p>
          <h1>Blog</h1>
          <p className="lead">Rady a zajímavosti ze světa zemních a výkopových prací.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <p>Zatím zde nejsou žádné články.</p>
          ) : (
            <div className="grid grid-2">
              {posts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
                  <span className="post-date">{formatDate(p.date)}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className="post-more">Číst článek →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
