import React from 'react';

const categories = [
  'general',
  'business',
  'sports',
  'technology',
  'entertainment',
  'health',
  'science',
];

export default function Navbar({ category, setCategory }) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-xl">News App</h1>
            <span className="text-sm text-gray-500">Top headlines</span>
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1 rounded-full capitalize text-sm whitespace-nowrap ${
                  category === cat
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
