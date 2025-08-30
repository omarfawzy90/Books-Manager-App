import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        const booksWithRead = res.data.data.map((book) => ({
          ...book,
          read: book.read || false,
        }));
        setBooks(booksWithRead);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  return (

    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">My Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : books.length === 0 ? (
        <p className="text-center text-gray-600 mt-6">No books available.</p>
      ) : (
        <table className="w-full border-separate spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Actions
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Read or not
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.publishedYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link
                      to={`/books/details/${book._id}`}
                      aria-label="View details"
                    >
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`} aria-label="Edit book">
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link
                      to={`/books/delete/${book._id}`}
                      aria-label="Delete book"
                    >
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  <FormGroup>
                    <FormControlLabel
                      className="flex justify-center"
                      control={
                        <Checkbox
                          checked={book.read}
                          onChange={(e) => {
                            const updatedBooks = books.map((b) =>
                              b._id === book._id
                                ? { ...b, read: e.target.checked }
                                : b
                            );
                            setBooks(updatedBooks);

                            axios
                              .patch(
                                `http://localhost:3000/books/${book._id}`,
                                {
                                  read: e.target.checked,
                                }
                              )
                              .catch((err) => {
                                console.error(
                                  "Error updating read status:",
                                  err
                                );
                              });
                          }}
                        />
                      }
                      label="Read"
                    />
                  </FormGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
