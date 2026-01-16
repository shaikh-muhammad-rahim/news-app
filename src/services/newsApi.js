import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async (category = 'general') => {
  // country=us by default; change if you want another country
  const url = `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${API_KEY}`;
  return axios.get(url);
};

export const searchNews = async (query) => {
  const url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&pageSize=100&apiKey=${API_KEY}`;
  return axios.get(url);
};
