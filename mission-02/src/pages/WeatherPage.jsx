import Error from '@/components/Error';
import Spinner from '@/components/Spinner';
import Weather from '@/components/Weather';
import useFetchData from '@/hook/useFetchData';
import useDocumentTitle from '@/hook/useDocumentTitle';

function WeatherPage() {
  useDocumentTitle('날씨 페이지');

  const { weather, stateWeather } = useFetchData();

  if (stateWeather === 'loading') {
    return <Spinner />;
  }

  if (stateWeather === 'error') {
    return <Error />;
  }

  return (
    <>
      <Weather weather={weather} />
    </>
  );
}

export default WeatherPage;
