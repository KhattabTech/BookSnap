import { useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Library from "./components/Library";
import BookDetails from "./components/BookDetails";

import Nav from "./components/nav";
import Footer from "./components/Footer";
import About from "./components/about";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const hideHeader =
    location.pathname === "/about" || location.pathname.startsWith("/book");

  return (
    <div>
      <Nav />
      {!hideHeader && <Header setSearchQuery={setSearchQuery} />}
      <Routes>
        <Route path="/" element={<Library searchQuery={searchQuery} />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
