import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DisplayItem from "./pages/DisplayItem";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DisplayItem />} />
      </Routes>
    </Router>
  );
};

export default App;
