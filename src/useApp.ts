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

    if (searchedArticles) {
      filtered = filtered.filter((article) =>
        article.title.includes(searchedArticles)
      );
    }

    if (selectedCategoryIds.length == 0 && selectedCategoryIds) {
      return filtered;
    }

    if (selectedCategoryIds.length > 0) {
      filtered = filtered.filter((article) => {
        return article.categories.some((id) => {
          return selectedCategoryIds.includes(id);
        });
      });
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
