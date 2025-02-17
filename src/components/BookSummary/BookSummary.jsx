import "./BookSummary.css"
import { Link } from "react-router-dom";

export default function BooksList ({ books }) {
  return (
    <div className="booksummary">
      {books?.map((book,index) => {
        const coverURL= book.cover_id
        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
        : "null";
        return (
          <div className="Booklist" key={index} >
            <Link to={`./Categories/BookDetails/${book.key.replace("/works/","")}`}>
            <h3> {book.title}</h3>
            <img src={coverURL} alt={book.title} width="50%"/>
            <p>{book.authors?.[0]?.name || "Author Unknown"}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

