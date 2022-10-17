import { React, memo } from "react";

const SearchButton = ({ search, onChange, setLoading }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={onChange}
        />
        <button id="search-btn" name="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default memo(SearchButton);
