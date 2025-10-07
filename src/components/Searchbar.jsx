import { Search } from "lucide-react";
import React from "react";

const Searchbar = () => {
  return (
    <div>
      <Search
        onClick={() => console.log("Clicked the searchbar")}
        className="text-white"
      />
    </div>
  );
};

export default Searchbar;
