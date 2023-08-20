# 과제-02

### URL: (https://news-weather-site.netlify.app)

> 뉴스와 날씨를 볼 수 있는 사이트입니다.

---

### 구성

#### Home / NewsPage / WeatherPage

<img src="https://github.com/minomad/react-mission/assets/131448929/8c8564be-0ead-435b-8584-79ac87ca2eef" >

## 코드

### useFetchData

```jsx
import { useState, useEffect } from 'react';
import data from '@/data/data.json';
import key from '@/config/api';

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
    const category = selectedCategory ? data[selectedCategory] : data.articles;
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
```

useFetchData훅에서 뉴스, 날씨 데이터를 가져오고 상태도 관리했습니다.  
newsAPI를 로컬서버에서는 데이터 요청이 가능했으나 배포환경에서는 데이터를 요청할 수 없어서 newsAPI의 data를 json파일에 담아서 불러왔습니다. (무료버전 이슈...)

---

### NewsPage

```jsx
import NewsList from '@/components/NewsList';
import useFetchData from '@/hook/useFetchData';
import NewsCategory from '@/components/NewsCategory';
import useDocumentTitle from '@/hook/useDocumentTitle';

function NewsPage() {
  useDocumentTitle('뉴스 페이지');

  const { news, selectedCategory, setSelectedCategory } = useFetchData('');

  return (
    <>
      <NewsCategory selectedCategory={selectedCategory} handleChangeCategory={setSelectedCategory} />
      <NewsList selectedCategory={selectedCategory} news={news} />
    </>
  );
}

export default NewsPage;
```

NewsCategory에서 선택한 카테고리가 변경될 때마다 해당 카테고리에 맞는 뉴스 데이터를 news상태에 저장하고

NewsList 컴포넌트에서 news를 전달받아서 리스트 렌더링했습니다.

---

### WeatherPage

```jsx
import Error from '@/components/Error';
import Spinner from '@/components/Spinner';
import Weather from '@/components/Weather';
import useFetchData from '@/hook/useFetchData';
import useDocumentTitle from '@/hook/useDocumentTitle';

function WeatherPage() {
  useDocumentTitle('날씨 페이지');

  const { weather, state } = useFetchData();

  if (state === 'loading') {
    return <Spinner />;
  }

  if (state === 'error') {
    return <Error />;
  }

  return <Weather weather={weather} />;
}

export default WeatherPage;
```

useFetchData훅에서 weatherAPI 데이터를 요청하고 받아온 데이터를 Weather 컴포넌트에서 리스트 렌더링 했습니다.

## Build

![Build](https://github.com/minomad/react-mission/assets/131448929/3c97304c-6b2d-4ea6-8db1-42fdb21d2fb7)



## mobile

아이폰 기준

![mobile](https://github.com/minomad/react-mission/assets/131448929/0005a312-5949-4d30-95e3-bd5fbd1209d5)

