import Error from '@/components/Error';
import Spinner from '@/components/Spinner';
import NewsList from '@/components/NewsList';
import useFetchData from '@/hook/useFetchData';
import NewsCategory from '@/components/NewsCategory';
import useDocumentTitle from '@/hook/useDocumentTitle';

function NewsPage() {
  useDocumentTitle('뉴스 페이지');

  const { news, stateNews, selectedCategory, setSelectedCategory } = useFetchData('');

  if (stateNews === 'loading') {
    return <Spinner />;
  }

  if (stateNews === 'error') {
    return <Error />;
  }

  return (
    <>
      <NewsCategory selectedCategory={selectedCategory} handleChangeCategory={setSelectedCategory} />
      <NewsList selectedCategory={selectedCategory} news={news} />
    </>
  );
}

export default NewsPage;
