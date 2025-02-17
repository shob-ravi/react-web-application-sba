import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  async function BookInfo() {
    try {
      console.log("Param_Id::" + id);
      const url = `https://openlibrary.org/works/${id}.json`;

      let bookInfo = await fetch(url);
      const results = await bookInfo.json();
      console.log("bookInfo" + JSON.stringify(results));
      setDetails(results);
    } catch (error) {
      console.log("Error fetching details:" + error);
    }
  }
  useEffect(() => {
    BookInfo();
  }, [id]);

  return (
    <>
      <h1>Book Details</h1>
      <p>Book ID: {details?.title}</p>
      <p>Book Description: {details?.description?.value || details?.description || "No description available"}</p>
      {
        <img
          src={`https://covers.openlibrary.org/b/id/${details?.covers[0]}-M.jpg`}
          width="120"
        />
      }
      <Link to={"/"}>Home</Link>
    </>
  );
}
