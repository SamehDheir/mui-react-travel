import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar";

import Home from "./components/pages/Home";
import Tour from "./components/pages/Tour";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
