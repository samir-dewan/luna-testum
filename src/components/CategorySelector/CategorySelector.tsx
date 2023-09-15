import { Category } from "../../types";
import "./CategorySelector.css";

interface ICategorySelector {
  categories: Category[];
  selectedCategoryId?: Category["id"];
  onSelectCategory: (categoryId: Category["id"]) => void;
}


export function CategorySelector({
  categories,
  selectedCategoryId,
  onSelectCategory,
}: ICategorySelector) {
  
  // Sort categories by title
  const sortedCategories = [...categories].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
    
  return (
    <div className="CategorySelector" data-testid="CategorySelector">
      {sortedCategories.map(({ id, title, color }) => {
        const isSelected = selectedCategoryId === id;
        return (
          <div
            key={id}
            className="CategoryOption"
            style={{ backgroundColor: isSelected ? "white" : color }}
            onClick={() => {
              onSelectCategory(id);
            }}
          >
            {title}
          </div>
        );
      })}
    </div>
  );
}
