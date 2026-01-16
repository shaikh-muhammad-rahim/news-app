# News App (React + Vite + Tailwind)

This is a simple React news app scaffold that uses [NewsAPI](https://newsapi.org).
It includes:
- Top headlines (category-based)
- Search bar (search across everything)
- Category filter (Navbar)
- Tailwind CSS for styling

## Setup

1. Install dependencies:
```bash
cd news-app
npm install
```

2. Create a `.env` file at the project root and add your NewsAPI key:
```
VITE_NEWS_API_KEY=your_newsapi_key_here
```

3. Run the dev server:
```bash
npm run dev
```

4. Build / preview:
```bash
npm run build
npm run preview
```

> Note: NewsAPI free plan may have rate limits and CORS restrictions for `everything` endpoints. For simple testing, `top-headlines` with a country/catgeory is usually reliable.

Files included:
- `src/` React source
- `tailwind.config.cjs`, `postcss.config.cjs`
- `.env.example` (shows where to put API key)

Enjoy — customize UI and animations (GSAP) as you like!
