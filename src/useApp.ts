import { useState, useMemo } from "react";

import { useData } from "./hooks/useData";

export function useApp() {
  const { categories, articles } = useData();

  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);

  const [selectedArticleId, setSelectedArticleId] = useState<
    string | undefined
  >();

  const [searchedArticles, setSearchedArticles] = useState<
    string | undefined
  >();

  const selectedArticle = useMemo(() => {
    return articles.find(({ id }) => id === selectedArticleId);
  }, [articles, selectedArticleId]);

  const filteredArticles = useMemo(() => {
    let filtered = [...articles];
    console.log('filtered pre filter is', filtered);

    if (selectedCategoryIds.length == 0 && selectedCategoryIds) {
      return filtered;
    }

    if (selectedCategoryIds.length > 0) {
      console.log('selectedcategoriesid is ', selectedCategoryIds);
      filtered = filtered.filter((article) => {
        console.log('article categories is ', article.categories)
        return article.categories.some((id) => {
          console.log('some id is', id);
          return selectedCategoryIds.includes(id);
        });
      });
      console.log('filtered is', filtered);
    };

    if (searchedArticles) {
      filtered = filtered.filter(({ title }) =>
        title.includes(searchedArticles)
      );
    }
    return filtered;
  }, [articles, selectedCategoryIds, searchedArticles]);

  return {
    categories,
    articles,
    selectedCategoryIds,
    selectedArticle,
    filteredArticles,
    setSearchedArticles,
    setSelectedCategoryIds,
    setSelectedArticleId,
  };
}
