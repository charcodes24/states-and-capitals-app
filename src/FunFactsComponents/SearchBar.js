export default function SearchBar({ search, handleSearchChange, handleSortChange }) {
  return (
    <div className="ui form searchbar">
      <input
        type="text"
        placeholder="Search..."
        name="search"
        value={search}
        onChange={handleSearchChange}
      />
      <select onChange={handleSortChange} className="ui dropdown">
        <option value="all">Select sort option...</option>
        <option value="aToZ">A to Z</option>
        <option value="zToA">Z to A</option>
        <option value="loToHi">Likes: Low to High</option>
        <option value="hiToLo">Likes: High to Low</option>
        <option value="oldToYoung">Oldest to Youngest</option>
        <option value="youngToOld">Youngest to Oldest</option>
      </select>
    </div>
  );
}