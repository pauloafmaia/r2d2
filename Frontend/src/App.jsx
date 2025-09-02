import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
        <Route path="/author" element={<Author />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
