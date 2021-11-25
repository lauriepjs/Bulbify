
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Organize from "./pages/organize";
import Join from "./pages/Join";
import Play from "./pages/play";
import Tuto from "./pages/tuto";

function App() {
  return (
    <>
    <h1>La Team Disney</h1>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/organise" element={Organize} />
        <Route path="/rejoins" element={Join} />
        <Route path="/joue" element={Play} />
        <Route path="/tuto" element={Tuto} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
