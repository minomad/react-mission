import Error from '@/components/Error';
import Spinner from '@/components/Spinner';
import Weather from '@/components/Weather';
import useFetchData from '@/hook/useFetchData';

function WeatherPage() {
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
