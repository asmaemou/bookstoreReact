import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import List from './List';
import AddBook from './AddBook';
import Contact from './Contact';
import {style} from './style';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<List />}/>
        <Route exact path="/add" element={<AddBook />}/>
        <Route exact path="/contact" element={<Contact />}/>
      </Routes>
      <div style={style.Footer} />
    </>
  );
}
export default App;
