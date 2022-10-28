import { React, memo, useEffect } from "react";
import { MainContext, useContext } from "./context";

const SearchButton = () => {
  const { search, setSearch } = useContext(MainContext);
  return (
    <div className="container">
      <form className="searchForm" readOnly>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchInput"
        />
      </form>
    </div>
  );
};

export default memo(SearchButton);
