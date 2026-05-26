import { useState, useEffect } from "react";

const BookForm = ({ onSubmit, initialData }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    if (initialData) {
      setBook(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !book.title ||
      !book.author ||
      !book.genre ||
      !book.year
    ) {
      alert("Please fill all fields");
      return;
    }

    onSubmit(book);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={book.genre}
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <input
        type="number"
        name="year"
        placeholder="Publication Year"
        value={book.year}
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <button className="bg-blue-600 text-white px-5 py-3 rounded w-full">
        Save Book
      </button>
    </form>
  );
};

export default BookForm;