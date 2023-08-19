
function Weather({ weather }) {
  return (
    <section className="flex min-h-[calc(100vh-52px)] flex-col items-center text-primary ">
      <h2 className="bg-grayColor w-full py-2 text-center text-xl font-semibold ">서울 날씨</h2>
      <div className="my-2 flex justify-center px-[16px] pt-5 max-[500px]:flex-col">
        {weather.map((weather) => (
          <div key={weather.datetime} className="flex flex-col items-center px-5 max-[500px]:border-t border-teal-800">
            <p className="pb-4 font-semibold">{weather.datetime.slice(5, 10)}</p>
            {weather.weather.description.includes('rain') ? (
              <img src="/rain.png" alt="비" />
            ) : (
              <img src="/sun.png" alt="맑음" />
            )}
            <p className="pt-4 text-xl">온도: {weather.temp}</p>
            <div>
              체감:
              <span className="text-secondary "> {weather.low_temp}</span> /
              <span className="font-semibold text-rose-500"> {weather.high_temp}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Weather;
