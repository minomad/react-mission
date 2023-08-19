import { useState, useEffect } from 'react';
import data from '@/data/data.json';
import key from '../config/api'

function useFetchData() {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [weather, setWeather] = useState([]);
  const [state, setState] = useState('');

  async function fetchWeather() {
    try {
      setState('loading');
      const weatherResponse = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?lat=37.5665&lon=126.9780&days=5&key=${key}`
      );
      const weatherData = await weatherResponse.json();
      setWeather(weatherData.data);
      setState('success');
    } catch (error) {
      setState('error');
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  useEffect(() => {
    const category = selectedCategory ? data[selectedCategory] || [] : data.articles;
    setNews(category);
  }, [selectedCategory]);

  return {
    news,
    weather,
    state,
    selectedCategory,
    setSelectedCategory,
  };
}

export default useFetchData;
