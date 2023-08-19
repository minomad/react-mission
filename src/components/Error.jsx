
function Error() {
  return (
    <figure className="flex flex-col items-center min-[500px]:min-h-[calc(100vh-52px)] min-[500px]:min-w-[calc(100vh-15px)]">
      <img src="404.svg" alt="404" className="w-[30rem]" />
      <figcaption className="font-bold">알 수 없는 오류가 발생했습니다.</figcaption>
    </figure>
  );
}
export default Error;
