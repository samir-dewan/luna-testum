import { Article, ListContent } from "../../types";
import "./ArticleDisplay.css";

interface IArticleDisplay {
  article: Article;
  onHideArticle: () => void;
}

export function ArticleDisplay({ article, onHideArticle }: IArticleDisplay) {
  function getTextFromList(item: ListContent): JSX.Element[] | JSX.Element {
    if (item.type === "paragraph") {
      return item.content.map(({ text, type }, index) => (
        <span
          key={index}
          style={{
            fontWeight: type === "bold-text" ? "bold" : "inherit",
          }}
        >
          {text}
        </span>
      ));
    } else {
      return (
        <span
          style={{
            fontWeight: item.type === "bold-text" ? "bold" : "inherit",
          }}
        >
          {item.text}
        </span>
      );
    }
  }
  return (
    <div className="ArticleDisplay" data-testid="ArticleDisplay">
      <div className="ArticleContainer">
        <h1>{article.title}</h1>
        <h2>{article.subtitle}</h2>
        <div className="ArticleContent">
          {article.content.map(({ content, type }, index) => {
            if (type === "paragraph") {
              return (
                <div key={index} className="ArticleContentParagraph">
                  {content.map(({ type, text }, index2) => {
                    return (
                      <span
                        key={index2}
                        style={{
                          fontWeight: type === "bold-text" ? "bold" : "inherit",
                        }}
                      >
                        {text}
                      </span>
                    );
                  })}
                </div>
              );
            } else if (type === "bullet-list") {
              return (
                <ul key={index} className="ArticleContentList">
                  {content.map((item, i) => {
                    return (
                      <li key={i} className="ArticleContentListItem">
                        {getTextFromList(item)}
                      </li>
                    );
                  })}
                </ul>
              );
            } else if (type === "ordered-list") {
              return (
                <ol key={index} className="ArticleContentList">
                  {content.map((item, i) => {
                    return (
                      <li key={i} className="ArticleContentListItem">
                        {getTextFromList(item)}
                      </li>
                    );
                  })}
                </ol>
              );
            }
          })}
        </div>
        <button onClick={onHideArticle}>Close</button>
      </div>
    </div>
  );
}
