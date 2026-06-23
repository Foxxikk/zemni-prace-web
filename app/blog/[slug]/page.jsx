import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
  };

  return (
    <>
      <div className="page-head">
        <div className="container">
          <p className="breadcrumb"><Link href="/blog">Blog</Link> / {post.title}</p>
          <h1>{post.title}</h1>
          <span className="post-date">{formatDate(post.date)}</span>
        </div>
      </div>

      <article className="section">
        <div className="container post-body prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="container" style={{ marginTop: 28 }}>
          <Link className="btn btn-dark" href="/blog">← Zpět na blog</Link>
        </div>
      </article>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
