import React from 'react';

export default function NewsCard({ article }) {
  const { urlToImage, title, description, url, source, publishedAt } = article;
  const date = publishedAt ? new Date(publishedAt).toLocaleString() : '';
  return (
    <article className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
      {urlToImage ? (
        <img src={urlToImage} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          No image
        </div>
      )}

      <div className="p-4">
        <h2 className="font-semibold text-lg mb-1">{title}</h2>
        <p className="text-sm text-gray-600 mb-3">{description}</p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{source?.name}</span>
          <span>{date}</span>
        </div>

        <div className="mt-3">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm underline"
          >
            Read full article →
          </a>
        </div>
      </div>
    </article>
  );
}
