import { Article } from "../../types";
import "./ArticleGrid.css";

interface IArticleGrid {
  articles: Article[];
  onSelectArticle: (articleId: string) => void;
}

export function ArticleGrid({ articles, onSelectArticle }: IArticleGrid) {
  return (
    <div className="ArticleGrid" data-testid="ArticleGrid">
      {articles.map(({ id, title, subtitle, imageUrl }) => {
        return (
          <div
            key={id}
            className="ArticleGridCell"
            data-testid="ArticleGridCell"
          >
            <img className="ArticleGridCellImage" src={imageUrl} />
            <div className="ArticleGridDescription">
              <h3 className="ArticleGridTitle">{title}</h3>
              <h4 className="ArticleGridSubtitle">{subtitle}</h4>
            </div>
            <button
              className="ArticleGridButton"
              onClick={() => {
                onSelectArticle(id);
              }}
            >
              View
            </button>
          </div>
        );
      })}
    </div>
  );
}
