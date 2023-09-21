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
  onSearchArticle
}: IArticleSelector) {
  // Sort categories by title
  const sortedCategories = [...categories].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const handleSearch = (query: string) => {
      onSearchArticle(query)
    }

  return (
    <section>
      <div className="SearchBarContainer" data-testid="SearchBarContainer">
        <SearchBar onSearch={handleSearch}/>
      </div>
      <div className="CategorySelector" data-testid="CategorySelector">
        {sortedCategories.map(({ id, title, color }) => {
          const isSelected = selectedCategoryIds?.includes(id);

          const articleCount = articles.filter((article) =>
            article.categories.includes(id)
          ).length;
          return (
            <button
              key={id}
              className="CategoryOption"
              style={{ backgroundColor: isSelected ? "white" : color }}
              onClick={() => {
                  onSelectCategory(id);
              }}
            >
              <span>{title} {articleCount}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
