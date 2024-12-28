import React from "react";

const SearchBar = ({ query, onSearch }) => {
  return (
    <div className="search-bar mb-4">
      <input
        type="text"
        className="form-control shadow-sm"
        placeholder="Type to search..."
        value={query}
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBar;
