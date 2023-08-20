
function NewsList({ selectedCategory, news }) {
  const filterNews = news.filter((news) => news.urlToImage !== null && news.description !== null);

  return (
    <section className="flex min-h-[calc(100vh-52px)] flex-col items-center min-[500px]:min-w-[calc(98vh)]">
      <h2 className="w-full border-y py-2 text-center text-xl font-semibold text-primary">{selectedCategory} 뉴스</h2>
      <ul className="pt-5 max-[550px]:px-4">
        {filterNews.map((newsItem, index) => {
          return (
            <li key={index} className="pb-5 transition-transform hover:scale-105">
              <button
                onClick={() => window.open(newsItem.url, '_blank')}
                title="클릭시 해당 기사(유튜브) 페이지로 이동합니다."
                className="text-left"
              >
                <img
                  src={newsItem.urlToImage}
                  alt={selectedCategory}
                  className="float-left mr-5 h-24 w-40 rounded max-[500px]:hidden"
                />
                <div className="flex h-24 flex-col max-[500px]:w-80 md:w-[35rem]">
                  <strong className="line-clamp-1 text-ellipsis text-lg text-primary hover:underline">
                    {newsItem.title}
                  </strong>
                  <p className="line-clamp-2 text-ellipsis py-1">{newsItem.description}</p>
                  <p className="pt-1 text-right text-sm">{newsItem.publishedAt.slice(0, 10)}</p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default NewsList;
