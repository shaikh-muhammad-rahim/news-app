import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import NewsCard from '../components/NewsCard';
import { getTopHeadlines, searchNews } from '../services/newsApi';

export default function Home() {
  const [category, setCategory] = useState('general');
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const fetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = search
          ? await searchNews(search)
          : await getTopHeadlines(category);
        if (!cancelled) setArticles(res.data.articles || []);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to fetch');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetch();
    return () => (cancelled = true);
  }, [category, search]);

  return (
    <div className="min-h-screen">
      <Navbar category={category} setCategory={setCategory} />
      <SearchBar search={search} setSearch={setSearch} />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {loading && <div className="text-center py-6">Loading...</div>}
        {error && <div className="text-center text-red-500 py-6">Error: {error}</div>}

        {!loading && articles.length === 0 && (
          <div className="text-center text-gray-500 py-6">No articles found.</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <NewsCard key={i} article={a} />
          ))}
        </div>
      </main>
    </div>
  );
}
