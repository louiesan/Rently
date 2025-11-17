import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import Property from "./pages/properties/Porperty";
import Detail from "./pages/detail/Detail";
import Article from "./pages/articles/Article";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./component/footer/Footer";
import Favorites from "./pages/favorites/Favorites";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
