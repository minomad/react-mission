import { useState, useEffect } from 'react';
import { weatherkey, newsKey } from '@/config/apiConfig';

function useFetchData() {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [stateNews, setStateNews] = useState();
  const [weather, setWeather] = useState([]);
  const [stateWeather, setStateWeather] = useState();

  async function fetchNews() {
    try {
      setStateNews('loading');
      const newsResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=kr&category=${selectedCategory}&apiKey=${newsKey}`
      );
      const newsData = await newsResponse.json();
      setNews(newsData.articles);
      setStateNews('success');
    } catch (error) {
      setStateNews('error');
    }
  }

  async function fetchWeather() {
    try {
      setStateWeather('loading');
      const weatherResponse = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?lat=37.5665&lon=126.9780&days=5&key=${weatherkey}`
      );
      const weatherData = await weatherResponse.json();
      setWeather(weatherData.data);
      setStateWeather('success');
    } catch (error) {
      setStateWeather('error');
    }
  }

  useEffect(() => {
    fetchNews();
  }, [selectedCategory]);

  useEffect(() => {
    fetchWeather();
  }, []);

  return {
    news,
    weather,
    stateNews,
    stateWeather,
    selectedCategory,
    setSelectedCategory,
  };
}

export default useFetchData;
