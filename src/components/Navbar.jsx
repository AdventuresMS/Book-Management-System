import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold">
          Book Manager
        </Link>

        <Link
          to="/add"
          className="bg-white text-blue-600 px-4 py-2 rounded"
        >
          Add Book
        </Link>
      </div>
    </div>
  );
};

export default Navbar;