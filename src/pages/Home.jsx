import useDocumentTitle from '@/hook/useDocumentTitle';

function Home() {
  useDocumentTitle('Home');

  return (
    <section className="min-h-[calc(100vh-52px)] min-[500px]:min-w-[calc(100vh-15px)] ">
      <h2 className="w-full bg-grayColor py-2 text-center text-xl font-semibold text-primary">Home</h2>
      <div className="py-10 text-center text-xl font-semibold text-primary max-[500px]:text-sm">
        <p>환영합니다!</p>
        <p>뉴스와 날씨를 한 눈에 확인할 수 있는 웹 사이트입니다.</p>
        <p>최신 뉴스와 정확한 날씨 정보로 더 나은 하루를 시작해보세요.</p>
      </div>
    </section>
  );
}
export default Home;
