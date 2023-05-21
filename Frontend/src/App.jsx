import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Update from "./pages/Update";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Streaming from "./components/Streaming";
import Author from "./pages/Author";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Streaming />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/:id" element={<Movie />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/author" element={<Author />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
