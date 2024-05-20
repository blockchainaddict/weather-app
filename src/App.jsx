import 'bulma/css/bulma.min.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./Views/Home";
import Header from "./Components/Header/Header";
import Crypto from "./Components/Crypto/Crypto";

function App() {
  return (
    <BrowserRouter>
    <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/crypto" element={<Crypto />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
