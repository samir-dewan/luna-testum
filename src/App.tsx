import { Hero } from "./components/Hero/Hero";
import { ArticleSelector } from "./components/ArticleSelector/ArticleSelector";
import { ArticleGrid } from "./components/ArticleGrid/ArticleGrid";
import { ArticleDisplay } from "./components/ArticleDisplay/ArticleDisplay";
import { useApp } from "./useApp";

function App() {
  const {
    categories,
    articles,
    selectedArticle,
    filteredArticles,
    selectedCategoryIds,
    setSelectedCategoryIds,
    setSelectedArticleId,
    setSearchedArticles,
  } = useApp();

  return (
    <div className="App" data-testid="App">
      <header>
        <Hero />
      </header>
      <ArticleSelector
        categories={categories}
        selectedCategoryIds={selectedCategoryIds}
        articles={articles}
        onSelectCategory={(id) => {
          setSelectedCategoryIds((prevSelectedCategoryIds) => {
            // Check if the selected category is already in the array, remove it if it is, add it if not
            if (!prevSelectedCategoryIds.includes(id)) {
              return [...prevSelectedCategoryIds, id];
            } else {
              return prevSelectedCategoryIds.filter(
                (categoryId) => categoryId !== id
              );
            }
          });
        }}
        onSearchArticle={(title) => {
          setSearchedArticles(title);
        }}
      />
      <ArticleGrid
        articles={filteredArticles}
        onSelectArticle={(id) => {
          setSelectedArticleId(id);
        }}
      />
      {!!selectedArticle && (
        <ArticleDisplay
          article={selectedArticle}
          onHideArticle={() => {
            setSelectedArticleId(undefined);
          }}
        />
      )}
    </div>
  );
}

export default App;
