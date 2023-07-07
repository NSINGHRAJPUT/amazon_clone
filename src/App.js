import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
