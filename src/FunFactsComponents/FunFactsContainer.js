import { useState } from 'react';

import SearchBar from "./SearchBar"
import StateCard from "./StateCard"

export default function FunFactsContainer({ states, updateLikes }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("all");

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  const searchStates = states.filter((state) =>
    state.name.toLowerCase().startsWith(search.toLowerCase())
  );

  function handleSortChange(e) {
    setSort(e.target.value);
  }

  const sortedStates = searchStates.sort((state1, state2) => {
      switch (sort) {
        case "all":
          return searchStates;
        case "aToZ":
          return state1.name.toLowerCase() < state2.name.toLowerCase() ? -1 : 1;
        case "zToA":
          return state2.name.toLowerCase() < state1.name.toLowerCase() ? -1 : 1;
        case "loToHi":
          return state1.likes - state2.likes;
        case "hiToLo":
          return state2.likes - state1.likes;
        case "oldToYoung":
          return state1.est - state2.est;
        case "youngToOld":
          return state2.est - state1.est;
      }
  });

  return (
    <div>
      <SearchBar
        search={search}
        handleSearchChange={handleSearchChange}
        handleSortChange={handleSortChange}
      />
      {sortedStates.map((state) => (
        <StateCard key={state.name} state={state} updateLikes={updateLikes} />
      ))}
      )
    </div>
  );
}