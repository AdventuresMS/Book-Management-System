import { useEffect, useState } from "react";
import api from "../services/api";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await api.get("/");

      setBooks(response.data);

      setError("");
    } catch (err) {
      setError("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/${id}`);

      fetchBooks();
    } catch (err) {
      alert("Delete failed");
    }
  };

  const filteredBooks = books
    .filter(
      (book) =>
        book.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        book.author
          .toLowerCase()
          .includes(search.toLowerCase())
    )
    .filter((book) =>
      genre === "All"
        ? true
        : book.genre === genre
    );

  if (loading) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  if (error) {
    return (
      <h1 className="text-center mt-10 text-red-500">
        {error}
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <GenreFilter
          genre={genre}
          setGenre={setGenre}
        />
      </div>

      {filteredBooks.length === 0 ? (
        <h2>No books found</h2>
      ) : (
        <div className="grid md:grid-cols-3 gap-5">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
