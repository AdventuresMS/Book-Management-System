import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import BookForm from "../components/BookForm";

const EditBook = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await api.get(`/${id}`);

      setBook(response.data);
    } catch (err) {
      alert("Failed to fetch book");
    }
  };

  const updateBook = async (updatedBook) => {
    try {
      await api.put(`/${id}`, updatedBook);

      navigate("/");
    } catch (err) {
      alert("Update failed");
    }
  };

  if (!book) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Edit Book
      </h1>

      <BookForm
        onSubmit={updateBook}
        initialData={book}
      />
    </div>
  );
};

export default EditBook;
