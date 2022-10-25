import { React, memo, useEffect } from "react";

const SearchButton = ({ search, onChange, setLoading }) => {
  return (
    <div className="container">
      <form className="searchForm">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={onChange}
          className="searchInput"
        />
      </form>
    </div>
  );
};

export default memo(SearchButton);
