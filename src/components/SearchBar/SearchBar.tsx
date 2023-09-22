import "./SearchBar.css";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="SearchBarForm">
      <input
        className="SearchBarInput"
        data-testid="SearchBarInput"
        type="text"
        placeholder="What are you looking for? Type it here!"
        value={query}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="SearchBarButton"
        data-testid="SearchBarButton"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
