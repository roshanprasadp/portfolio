import type { Metadata } from 'next';
import BlogIndex from '@/components/blog/blog-index';

export const metadata: Metadata = {
  title: 'Engineering Blog | Roshan Prasad',
  description: 'Practical notes on SRE, DevOps, Kubernetes, AWS, Terraform, observability, cloud security, and automation.',
  alternates: { canonical: 'https://www.roshanprasadp.com/blog/' },
  openGraph: {
    title: 'Engineering Blog | Roshan Prasad',
    description: 'Practical notes on SRE, DevOps, Kubernetes, cloud infrastructure, and security.',
    url: 'https://www.roshanprasadp.com/blog/',
    type: 'website'
  }
};

export default function BlogPage() { return <BlogIndex />; }
