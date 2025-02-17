import HomePage from "./components/HomePage/Homepage.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx"
import {Routes,Route} from 'react-router-dom';
import "./App.css";
export default function App(){

  
  return(
    <div className="body">
  {/* <h1>Book Library</h1> */}
  <Routes>
    <Route path='/' element={<HomePage />} />
    {/* <Route path='/Categories/BookDetails' element={<BookDetails />}/> */}
    <Route path='/Categories/BookDetails/:id' element={<BookDetails />}/>
  </Routes>
  </div>
  )
}