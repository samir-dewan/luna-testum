import { Article, Category } from "../../types";
import SearchBar from "../SearchBar/SearchBar";
import "./CategorySelector.css";

interface ICategorySelector {
  categories: Category[];
  articles: Article[];
  selectedCategoryId?: Category["id"];
  onSelectCategory: (categoryId: Category["id"]) => void;
  onSearchArticle: (articleTitle: Article["title"]) => void;
}

export function CategorySelector({
  categories,
  articles,
  selectedCategoryId,
  onSelectCategory,
  onSearchArticle
}: ICategorySelector) {
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
          const isSelected = selectedCategoryId === id;

          const articleCount = articles.filter((article) =>
            article.categories.includes(id)
          ).length;
          return (
            <button
              key={id}
              className="CategoryOption"
              style={{ backgroundColor: isSelected ? "white" : color }}
              onClick={() => {
                if (isSelected) {
                  onSelectCategory("");
                } else {
                  onSelectCategory(id);
                }
              }}
            >
              <span>{title}</span>
              <span>{articleCount}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
