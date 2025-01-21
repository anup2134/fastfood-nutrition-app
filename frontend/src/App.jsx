import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import MenuPage from "./views/MenuPage";
import PageNotFound from "./views/PageNotFound";
import Menu from "./components/Menu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mcdonalds" element={<MenuPage />} />
        <Route path="/dominos" element={<MenuPage />} />
        <Route path="/kfc" element={<MenuPage />} />
        <Route path="/burgerking" element={<MenuPage />} />
        <Route path="/subway" element={<MenuPage />} />
        <Route path="/pizzahut" element={<MenuPage />} />
        <Route path="/starbucks" element={<MenuPage />} />
        <Route path="/ccd" element={<MenuPage />} />
        <Route path="*" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;
