import "./SearchBar.css";
import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
    const [query, setQuery] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                data-testid="SearchBarInput"
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
            />
            <button type="submit" data-testid="SearchBarButton">Search</button>
        </form>
    )
}

export default SearchBar;