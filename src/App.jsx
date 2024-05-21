import 'bulma/css/bulma.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./Views/Home";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
