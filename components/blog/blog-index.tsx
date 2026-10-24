"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, Clock3, Search, Sparkles, Star } from 'lucide-react';
import { BlogPost, formatDate, sortedPosts } from '@/lib/blog-posts';

function PostCard({ post, label }: { post: BlogPost; label?: string }) {
  return (
    <article className="blog-card">
      <div className="blog-card-topline"><span className="blog-category">{post.category}</span>{label && <span className="blog-label">{label}</span>}</div>
      <h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3>
      <p className="blog-excerpt">{post.excerpt}</p>
      <div className="blog-meta"><span><CalendarDays size={14} aria-hidden="true" />{formatDate(post.publishedAt)}</span><span><Clock3 size={14} aria-hidden="true" />{post.readTime}</span></div>
      <div className="blog-tags">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <Link className="blog-read-link" href={`/blog/${post.slug}/`}>Read article <ArrowRight size={15} aria-hidden="true" /></Link>
    </article>
  );
}

export default function BlogIndex() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All topics');
  const categories = useMemo(() => ['All topics', ...Array.from(new Set(sortedPosts.map((post) => post.category)))], []);
  const newest = sortedPosts.slice(0, 3);
  const featured = sortedPosts.filter((post) => post.featured && !newest.some((item) => item.slug === post.slug));
  const archive = sortedPosts.filter((post) => !newest.some((item) => item.slug === post.slug) && !featured.some((item) => item.slug === post.slug));
  const matches = (post: BlogPost) => {
    const text = `${post.title} ${post.excerpt} ${post.category} ${post.tags.join(' ')}`.toLowerCase();
    return text.includes(query.toLowerCase().trim()) && (category === 'All topics' || post.category === category);
  };
  const filtering = query.trim().length > 0 || category !== 'All topics';

  return <main className="blog-shell">
    <header className="blog-header">
      <Link href="/" className="blog-brand" aria-label="Roshan Prasad home"><span className="brand-mark">RP</span><span>ROSHAN PRASAD<span className="brand-subtitle">ENGINEERING NOTES</span></span></Link>
      <nav className="blog-nav" aria-label="Main navigation"><Link href="/">Portfolio</Link><a className="active" href="/blog/">Blog</a><a href="https://github.com/roshanprasadp" target="_blank" rel="noreferrer">GitHub ↗</a></nav>
    </header>

    <section className="blog-hero">
      <div className="hero-orb hero-orb-one"/><div className="hero-orb hero-orb-two"/>
      <p className="eyebrow"><span className="eyebrow-dot"/> FIELD NOTES FROM THE CLOUD</p>
      <h1>Building systems.<br/><span>Sharing what works.</span></h1>
      <p className="hero-description">Practical notes on SRE, DevOps, Kubernetes, cloud infrastructure, automation, and security — learned by building and operating systems.</p>
      <div className="hero-topics"><span><BookOpen size={15}/> Engineering guides</span><span><Sparkles size={15}/> Lessons from practice</span></div>
    </section>

    <section className="blog-tools" aria-label="Search blog posts">
      <label className="blog-search"><Search size={18} aria-hidden="true"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles, tools, topics..." aria-label="Search articles"/><kbd>SEARCH</kbd></label>
      <label className="category-select"><span className="sr-only">Filter by topic</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
    </section>

    {filtering ? <section className="blog-section"><div className="section-heading"><div><p className="section-kicker">DISCOVER</p><h2>Search results</h2></div><span className="section-count">{sortedPosts.filter(matches).length} ARTICLES</span></div>{sortedPosts.filter(matches).length ? <div className="blog-grid">{sortedPosts.filter(matches).map((post) => <PostCard key={post.slug} post={post}/>)}</div> : <div className="empty-state">No articles match that search. Try another keyword or topic.</div>}</section> : <>
      <section className="blog-section"><div className="section-heading"><div><p className="section-kicker">FRESH OFF THE KEYBOARD</p><h2>Latest posts <span className="heading-dot">.</span></h2><p className="section-subtitle">The newest notes, always first.</p></div><span className="section-count">{newest.length} NEWEST</span></div><div className="blog-grid">{newest.map((post, index) => <PostCard key={post.slug} post={post} label={index === 0 ? 'LATEST' : undefined}/>)}</div></section>
      {featured.length > 0 && <section className="blog-section"><div className="section-heading"><div><p className="section-kicker">WORTH BOOKMARKING</p><h2><Star size={22} className="inline-star"/> Top posts</h2><p className="section-subtitle">Selected guides and evergreen references.</p></div><span className="section-count">{featured.length} FEATURED</span></div><div className="blog-grid">{featured.map((post) => <PostCard key={post.slug} post={post} label="TOP POST"/>)}</div></section>}
      {archive.length > 0 && <section className="blog-section"><div className="section-heading"><div><p className="section-kicker">EXPLORE THE ARCHIVE</p><h2>More articles</h2></div><span className="section-count">{archive.length} ARTICLES</span></div><div className="blog-grid">{archive.map((post) => <PostCard key={post.slug} post={post}/>)}</div></section>}
    </>}

    <footer className="blog-footer"><Link href="/" className="back-home"><ArrowLeft size={16}/> Back to portfolio</Link><p>Built with curiosity, coffee, and a reliability mindset.</p><span>© {new Date().getFullYear()} Roshan Prasad</span></footer>
  </main>;
}
