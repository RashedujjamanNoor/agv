import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bd" element={<Home2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
