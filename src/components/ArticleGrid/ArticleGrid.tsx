import { Article } from "../../types";
import "./ArticleGrid.css";
import Button from "../utils/Button/Button";

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
            onClick={() => onSelectArticle(id)}
          >
            <img className="ArticleGridCellImage" src={imageUrl} alt={`An image giving a visual representation of the article ${title}`} />
            <div className="ArticleGridDescription">
              <h3 className="ArticleGridTitle">{title}</h3>
              <h4 className="ArticleGridSubtitle">{subtitle}</h4>
            </div>
            <Button text="view" onClick={() => onSelectArticle(id)} uppercase={true} additionalClass="ArticleGridButton"/>
          </div>
        );
      })}
    </div>
  );
}
