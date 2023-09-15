import { Article, Category } from "../../types";
import "./CategorySelector.css";

interface ICategorySelector {
  categories: Category[];
  articles: Article[];
  filteredArticles: Article[];
  selectedCategoryId?: Category["id"];
  onSelectCategory: (categoryId: Category["id"]) => void;
}


export function CategorySelector({
  categories,
  articles,
  filteredArticles,
  selectedCategoryId,
  onSelectCategory
}: ICategorySelector) {
  
  // Sort categories by title
  const sortedCategories = [...categories].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
    
  return (
    <div className="CategorySelector" data-testid="CategorySelector">
      {sortedCategories.map(({ id, title, color }) => {

        const isSelected = selectedCategoryId === id;

        const articleCount = articles.filter((article) => article.categories.includes(id)).length;
        return (
          <div
            key={id}
            className="CategoryOption"
            style={{ backgroundColor: isSelected ? "white" : color }}
            onClick={() => {
              onSelectCategory(id);
            }}
          >
            {title} {articleCount}
          </div>
        );
      })}
    </div>
  );
}
