import { Link } from "react-router-dom";

const BookCard = ({ book, handleDelete }) => {
  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{book.title}</h2>

      <p className="text-gray-700">
        <strong>Author:</strong> {book.author}
      </p>

      <p className="text-gray-700">
        <strong>Genre:</strong> {book.genre}
      </p>

      <p className="text-gray-700">
        <strong>Year:</strong> {book.year}
      </p>

      <div className="flex gap-2 mt-4">
        <Link
          to={`/edit/${book.id}`}
          className="bg-yellow-500 text-white px-3 py-2 rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => handleDelete(book.id)}
          className="bg-red-500 text-white px-3 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;