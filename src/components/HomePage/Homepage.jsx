import { useState, useEffect } from "react";
import './HomePage.css';
import BookSummary from "../BookSummary/BookSummary";

export default function HomePage() {
  const [category, setCategory] = useState("science");
  const [books, setBooks] = useState();
  const [filter,setFilterCriteria] = useState("");

  async function getCategory(category) {
    try {
      const url = `https://openlibrary.org/subjects/${category}.json`;
      const res = await fetch(url);
      const results = await res.json();
      //console.log('results'+JSON.stringify(results));
      setBooks(results.works);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
  }
  function handleSelectCategory(e) {
    setCategory(e.target.value);
  }

  function handleInputChange(e){
    setFilterCriteria(e.target.value);
  }
  useEffect(() => {
    getCategory(category);
  }, [category]);

const filteredResults = books?.filter(a=>a.title.toLowerCase().includes(filter?.toLowerCase()));

  return (
    <div className="homepage-container">
      <header className="header">
        <h1>Book Library</h1>
        <div className="filters">
      
      <select name="Category" value={category} onChange={handleSelectCategory}>
        <option value="science">Science</option>
        <option value="architecture">Architecture</option>
        <option value="history">History</option>
        <option value="fantasy">Fantasy</option>
        <option value="romance">Romance</option>
        <option value="cooking">Cooking</option>
        <option value="technology">Technology</option>
      </select>
      <input type="text" placeholder="Enter the book here" onChange={handleInputChange}/>
      <button><i className="fa fa-search"></i></button> 
      </div>
        </header>
        <div className="image-section">
         <img id = "bookimg" src="https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=0&k=20&c=1vbRHaA_aOl9tLIy6P2UANqQ27KQ_gSF-BH0sUjQ730="/> 
      </div>
      {<BookSummary books={filteredResults} />}
    </div>
  );
}
