const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 border rounded"
    />
  );
};

export default SearchBar;