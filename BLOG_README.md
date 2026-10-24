# Roshan Prasad — Blog setup

The blog is part of the existing Next.js static-export portfolio. It publishes under:

- Blog index: `https://www.roshanprasadp.com/blog/`
- Individual post: `https://www.roshanprasadp.com/blog/<slug>/`

## Add a post

1. Open `lib/blog-posts.ts`.
2. Add a new object to `blogPosts` with a unique URL-safe `slug`, `title`, `excerpt`, `category`, `publishedAt` (`YYYY-MM-DD`), `readTime`, `tags`, and `sections`.
3. Set `featured: true` if it should be included in Top Posts. The three newest posts are always displayed first, so a featured post that is also one of the newest three is not duplicated in Top Posts.
4. Commit and push to `main`. GitHub Actions builds and deploys the static site.

Posts are sorted by `publishedAt` descending. The newest three appear first, then featured posts excluding those already shown, then remaining posts. Search and topic filters work in the browser.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000/blog/`.

## Deploy

The project uses Next.js `output: 'export'`, which generates static files in `out/`. The existing GitHub Pages workflow publishes that folder. Keep both the root `CNAME` and `public/CNAME` set to `www.roshanprasadp.com`. The `public/CNAME` file is copied into Next.js static output so the custom domain survives the Actions deployment. Your supplied DNS export already contains the GitHub Pages A records for the root domain and a `www` CNAME pointing to `roshanprasadp.github.io`.

## Notes

- The post content included here is starter/demo content; edit it to match your own voice and verify technical examples before publication.
- Never publish employer-internal architecture, logs, secrets, incident data, or proprietary screenshots.
