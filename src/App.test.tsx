/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { useData } from "./hooks/useData";

const { categories, articles } = useData();

test("renders Hero section title", async () => {
  render(<App />);
  const titleElement = screen.getByText(
    /A safe space for girls to learn and grow/
  );
  expect(titleElement).toBeInTheDocument();
});

test("checks all articles are displayed", async () => {
  render(<App />);
  const articlesDisplayed1 = screen.queryAllByTestId("ArticleGridCell");
  expect(articlesDisplayed1).toHaveLength(articles.length);
});

test("check category filters are displaying correct number of articles", async () => {
  render(<App />);
  const categoryButton = screen.getByText(new RegExp(categories[3].title));
  act(() => {
    userEvent.click(categoryButton);
  });
  const articlesDisplayed2 = screen.queryAllByTestId("ArticleGridCell");
  expect(articlesDisplayed2).toHaveLength(3);
  act(() => {
    userEvent.click(categoryButton);
  });
  const articlesDisplayed3 = screen.queryAllByTestId("ArticleGridCell");
  expect(articlesDisplayed3).toHaveLength(articles.length);
});

test("check search works as intended", async () => {
  render (<App />);
  const searchBar = screen.queryByTestId("SearchBarInput");

  if (searchBar instanceof HTMLInputElement) {
    // Simulate typing text into the search bar
    fireEvent.change(searchBar, { target: { value: articles[0].title } });

    // Verify that the search bar value has been updated
    expect(searchBar.value).toBe(articles[0].title);
  } else {
    throw new Error('Search bar element not found, or articles data not found');
  };

  const searchButton = screen.queryByTestId("SearchBarButton");
  if (searchButton) {
    fireEvent.click(searchButton);
  } else {
    throw new Error('Search button element not found');
  };

  const articlesDisplayed4 = screen.queryAllByTestId("ArticleGridCell");
  expect(articlesDisplayed4).toHaveLength(1);
})

test("check article content is displayed when clicked on", async () => {
  render(<App />);
  const articleTitle = screen.getByText(articles[0].title);

  await waitFor(() => {
    const parentDiv = articleTitle.parentElement?.parentElement;
    const viewButton = parentDiv?.querySelector("button");

    if (!viewButton) {
      throw new Error(`could not find View button of ${articles[0].title}.`);
    }

    act(() => {
      userEvent.click(viewButton);
    });

  });

  const articleDesc = document.querySelector(".ArticleContent");
  expect(articleDesc).toBeInTheDocument();
});
