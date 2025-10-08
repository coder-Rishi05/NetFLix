import { Search } from "lucide-react";
import React, { useState } from "react";
import Movies_Data from "../lib/data/mockdata.json";

const Searchbar = () => {
  const [shouldShowSearch, setshouldShowSearch] = useState(false);
  // i have to implement here debouncing so that it will start search after 500ms.
  const searchforQuery = (query) => {
    // console.log("Search Query : ", query);
    const results = Movies_Data.results.filter((data) => {
      return data.title.toLowerCase().includes(query.toLowerCase());
    });
    console.log("search result : ", results);
  };

  const handleSearchQuery = (event) => {
    const query = event.target.value;
    // console.log("Search Query : ", query);
    searchforQuery(query);
  };

  return (
    <div className="flex items-center gap-2">
      {shouldShowSearch && (
        <>
          <Search className="text-white" />
          <input
            onChange={handleSearchQuery}
            type="text"
            placeholder="Titles,people,geners"
            className="px-8 py-2 rounded-md border bg-black  text-white placeholder:text-white/55 border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          ></input>
        </>
      )}
      <Search
        onClick={() => setshouldShowSearch((val) => !val)}
        className="text-white"
      />
    </div>
  );
};

export default Searchbar;
