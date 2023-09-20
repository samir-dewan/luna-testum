import { useState, useMemo } from "react";

import { useData } from "./hooks/useData";

export function useApp() {
  const { categories, articles } = useData();

  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | undefined
  >();

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
    let filterArticles = articles;
    if (selectedCategoryId) {
      filterArticles = filterArticles.filter(({ categories }) =>
        categories.includes(selectedCategoryId)
      );
    }
    if (searchedArticles) {
      filterArticles = filterArticles.filter(({ title }) =>
        title.includes(searchedArticles)
      );
    }
    console.log(filterArticles);
    return filterArticles;
  }, [articles, selectedCategoryId, searchedArticles]);

  return {
    categories,
    articles,
    selectedCategoryId,
    selectedArticle,
    filteredArticles,
    setSearchedArticles,
    setSelectedCategoryId,
    setSelectedArticleId,
  };
}
