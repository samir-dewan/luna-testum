import { Article, Category } from "../../types";
import SearchBar from "../SearchBar/SearchBar";
import "./ArticleSelector.css";

interface IArticleSelector {
  categories: Category[];
  articles: Article[];
  selectedCategoryIds?: Category["id"][];
  onSelectCategory: (categoryId: Category["id"]) => void;
  onSearchArticle: (articleTitle: Article["title"]) => void;
}

export function ArticleSelector({
  categories,
  articles,
  selectedCategoryIds,
  onSelectCategory,
  onSearchArticle,
}: IArticleSelector) {
  // Sort categories by title
  const sortedCategories = [...categories].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const handleSearch = (query: string) => {
    onSearchArticle(query);
  };

  return (
    <section className="ArticleFilters" data-testid="ArticleFilters">
      <div className="CategorySelector" data-testid="CategorySelector">
        {sortedCategories.map(({ id, title, color }) => {
          const isSelected = selectedCategoryIds?.includes(id);
          const articleCount = isSelected ? (
            <svg
              width="0.75rem"
              height="0.75rem"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.29417 12.9577L10.5048 16.1681L17.6729 9"
                stroke="#000000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#000000"
                strokeWidth="2"
              />
            </svg>
          ) : (
            articles.filter((article) => article.categories.includes(id)).length
          );
          return (
            <button
              key={id}
              className="CategoryOption"
              style={{
                backgroundColor: isSelected ? "white" : color,
                order: isSelected ? 1 : 2,
              }}
              onClick={() => {
                onSelectCategory(id);
              }}
            >
              <span>
                {title} {articleCount}
              </span>
            </button>
          );
        })}
      </div>
      <div className="SearchBarContainer" data-testid="SearchBarContainer">
        <SearchBar onSearch={handleSearch} />
      </div>
    </section>
  );
}
