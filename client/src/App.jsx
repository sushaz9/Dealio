import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Result from "./pages/Result";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/result/ :id" element={<Result />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
}

return (
  <BrowserRouter>
    <header>
      {isAuthenticated && (
        <div>
          <Profile />
          <LogoutButton />
        </div>
      )}
      {!isAuthenticated && <LoginButton />}

      <h1>Can of Books</h1>
      <p>The ultimate book Database</p>
      {admins.includes(user?.email) && <a href=""> Admin Page</a>}
    </header>

    <Routes>
      <Route
        path="/"
        element={
          <Home books={books} setBooks={setBooks} deleteBook={deleteBook} />
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/book/:id" element={<Book />} />
    </Routes>

    <footer>
      <p>Can of Books &copy;</p>
    </footer>
  </BrowserRouter>
);

export default App;
