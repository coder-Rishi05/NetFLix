import { Search } from "lucide-react";
import React, { useState, useRef } from "react";
import Movies_Data from "../lib/data/mockdata.json";

const Searchbar = () => {
  const [shouldShowSearch, setshouldShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const debounceRef = useRef(null); // timer ref

  // Function to search the query
  const searchforQuery = (query) => {
    if (!query.trim()) return; // ignore empty
    const results = Movies_Data.results.filter((data) =>
      data.title.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Search result:", results);
  };

  // Debounced handler
  const handleSearchQuery = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    // agar user type karte rahe to purana timeout clear karo
    if (debounceRef.current) clearTimeout(debounceRef.current);

    // naya timeout set karo — 500ms baad hi function chalega
    debounceRef.current = setTimeout(() => {
      searchforQuery(inputValue);
    }, 500);
  };

  return (
    <div className="flex items-center gap-2">
      {shouldShowSearch && (
        <>
          <Search className="text-white" />
          <input
            onChange={handleSearchQuery}
            value={query}
            type="text"
            placeholder="Titles, people, genres"
            className="px-8 py-2 rounded-md border bg-black text-white placeholder:text-white/55 border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </>
      )}
      <Search
        onClick={() => setshouldShowSearch((val) => !val)}
        className="text-white cursor-pointer"
      />
    </div>
  );
};

export default Searchbar;
