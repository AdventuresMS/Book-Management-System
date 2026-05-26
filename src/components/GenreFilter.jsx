const GenreFilter = ({ genre, setGenre }) => {
  return (
    <select
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
      className="p-3 border rounded"
    >
      <option value="All">All Genres</option>
      <option value="Fiction">Fiction</option>
      <option value="Self Help">Self Help</option>
      <option value="Science">Science</option>
      <option value="Biography">Biography</option>
    </select>
  );
};

export default GenreFilter;