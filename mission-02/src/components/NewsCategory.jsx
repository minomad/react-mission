
const newsCategory = ['sports', 'entertainment', 'business', 'health', 'science', 'technology'];

function NewsCategory({ selectedCategory, handleChangeCategory }) {
  return (
    <div className="bg-grayColor sticky top-0 z-10 p-2" role="NewsCategory">
      <ul className="flex flex-row flex-wrap justify-center gap-4 p-1 text-lg font-semibold max-[550px]:w-fit">
        {newsCategory.map((category, index) => {
          const isActive = selectedCategory === category;
          return (
            <li
              key={index}
              onClick={() => handleChangeCategory(category)}
              className={`cursor-pointer transition-transform hover:scale-110 hover:text-secondary ${
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
