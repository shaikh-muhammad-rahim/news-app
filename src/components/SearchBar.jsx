import React from 'react';

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-4">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search news..."
        className="w-full p-3 rounded border focus:outline-none focus:ring"
      />
    </div>
  );
}
