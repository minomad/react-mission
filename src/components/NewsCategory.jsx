
function NewsCategory({ selectedCategory, handleChangeCategory }) {

  const newsCategory = ['스포츠', '연예', '사회', '건강', '과학', '기술'];

  return (
    <div className="sticky top-0 z-10 bg-grayColor p-2" role="NewsCategory">
      <ul className="flex flex-row flex-wrap justify-center gap-4 p-1 text-xl font-semibold max-[550px]:w-fit">
        {newsCategory.map((category, index) => {
          const isActive = selectedCategory === category;
          return (
            <li
              key={index}
              onClick={() => handleChangeCategory(category)}
              className={`cursor-pointer px-2 transition-transform hover:scale-110 hover:text-secondary ${
                isActive ? 'border-b-[3px] border-secondary text-secondary' : 'text-gray-600'
              }`}
              tabIndex="0"
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NewsCategory;
