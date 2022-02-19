import './App.css';
import Home from './views/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const SearchPage = () => {
  return (
    <div>Search Page</div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/search' element={<SearchPage/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
