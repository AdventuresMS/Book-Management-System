import { useNavigate } from "react-router-dom";
import api from "../services/api";
import BookForm from "../components/BookForm";

const AddBook = () => {
  const navigate = useNavigate();

  const addBook = async (book) => {
    try {
      await api.post("/", book);

      navigate("/");
    } catch (err) {
      alert("Failed to add book");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Add Book
      </h1>

      <BookForm onSubmit={addBook} />
    </div>
  );
};

export default AddBook;