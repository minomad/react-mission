import { useId } from 'react';

function NewsList({ selectedCategory, news }) {
  const filterNews = news.filter((news) => news.urlToImage !== null && news.description !== null);

  const maxNews = filterNews.slice(0, 10);
  return (
    <section className="flex flex-col items-center px-6">
      <h2 className="w-full border-y py-2 text-center text-xl font-semibold text-primary">{selectedCategory} news</h2>
      <ul className="pt-5  ">
        {maxNews.map((newsItem) => {
          const newsId = useId();
          return (
            <li key={newsId} className="flex pb-5 transition-transform hover:scale-105">
              <a
                href={newsItem.url}
                title="클릭시 해당 기사(유튜브) 페이지로 이동합니다."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={newsItem.urlToImage}
                  alt={selectedCategory}
                  className="float-left mr-5 h-24 w-40 rounded max-[400px]:hidden"
                />
                <div className="flex h-24 flex-col justify-between md:w-[36rem]">
                  <strong className="line-clamp-1 text-ellipsis text-lg text-primary hover:underline">
                    {newsItem.title}
                  </strong>
                  <p className="line-clamp-2 text-ellipsis py-1">{newsItem.description}</p>
                  <p className="pt-1 text-right text-sm">{newsItem.publishedAt.slice(0, 10)}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default NewsList;
