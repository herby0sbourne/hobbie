import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Hobby from "./components/Hobby.jsx";
import Result from "./components/Result.jsx";

import "./App.css";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route element={<NavBar />}>
          <Route path={"hobbies"} element={<Hobby />} />
          <Route path={"results"} element={<Result />} />
        </Route>
        {/*<Route path={"hobbies"} element={<Hobby />} />*/}
        {/*<Route path={"results"} element={<Result />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
