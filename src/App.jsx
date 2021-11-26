import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import Organize from "./pages/Organize";
import Join from "./pages/Join";
import Play from "./pages/play";
import Tuto from "./pages/tuto";
import Header from "./components/Header";
import Taste from './components/Taste';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/organise" element={<Organize />} />
          <Route path="/rejoins" element={<Taste />} />
          <Route path="/joue" element={<Play />} />
          <Route path="/tutoriel" element={<Tuto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
