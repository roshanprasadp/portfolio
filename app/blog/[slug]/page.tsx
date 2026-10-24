import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react';
import { blogPosts, formatDate, getPost } from '@/lib/blog-posts';

export const dynamicParams = false;
export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: 'Article not found | Roshan Prasad' };
  const url = `https://www.roshanprasadp.com/blog/${post.slug}/`;
  return { title: `${post.title} | Roshan Prasad`, description: post.excerpt, alternates: { canonical: url }, openGraph: { title: post.title, description: post.excerpt, url, type: 'article', publishedTime: `${post.publishedAt}T09:00:00Z` } };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return <main className="article-shell">
    <header className="blog-header article-header"><Link href="/" className="blog-brand"><span className="brand-mark">RP</span><span>ROSHAN PRASAD<span className="brand-subtitle">ENGINEERING NOTES</span></span></Link><nav className="blog-nav"><Link href="/">Portfolio</Link><Link className="active" href="/blog/">All articles</Link></nav></header>
    <article className="article-content">
      <Link href="/blog/" className="back-home article-back"><ArrowLeft size={16}/> All articles</Link>
      <div className="article-title-block"><span className="blog-category">{post.category}</span><h1>{post.title}</h1><p className="article-deck">{post.excerpt}</p><div className="blog-meta article-meta"><span><CalendarDays size={15}/>{formatDate(post.publishedAt)}</span><span><Clock3 size={15}/>{post.readTime}</span></div><div className="blog-tags">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      <div className="article-rule"/>
      <div className="article-prose">{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}{section.code && <pre><code>{section.code}</code></pre>}</section>)}</div>
      <aside className="article-cta"><div><p className="section-kicker">KEEP EXPLORING</p><h2>More practical engineering notes.</h2><p>Explore more articles on reliability, automation, cloud, and security.</p></div><Link href="/blog/">Browse all posts <ArrowUpRight size={16}/></Link></aside>
    </article>
    <footer className="blog-footer"><Link href="/blog/" className="back-home"><ArrowLeft size={16}/> Back to blog</Link><span>© {new Date().getFullYear()} Roshan Prasad</span></footer>
  </main>;
}
