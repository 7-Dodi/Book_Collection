import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Container from './Components/Layout/Container';
import Book from './Components/Pages/Book';
import Author from './Components/Pages/Author';
import Home from './Components/Pages/Home';
import Footer from './Components/Layout/Footer';
import Company from './Components/Pages/Company';
import NewBook from './Components/Pages/NewBook';
import EditBook from './Components/Project/EditBook';
import NewAuthor from './Components/Pages/NewAuthor';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Container class="min_height"><Home/></Container>}/> 
          <Route path='/book' element={<Container class="min_height"><Book/></Container>}/> 
          <Route path='/author' element={<Container class="min_height"><Author/></Container>}/>
          <Route path='/newAuthor' element={<Container class="min_height"><NewAuthor/></Container>}/>
          <Route path='/company' element={<Container class="min_height"><Company/></Container>}/>
          <Route path='/newBook' element={<Container class="min_height"><NewBook/></Container>}/>
          <Route path='/editBook/:id' element={<Container class="min_height"><EditBook/></Container>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
