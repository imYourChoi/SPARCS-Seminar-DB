import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CounterPage from "./components/CounterPage";
import DogPage from "./components/DogPage";
import TodoPage from "./components/TodoPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<h1>Main</h1>} />
        <Route exact path="/counter" element={<CounterPage />} />
        <Route exact path="/dogs" element={<DogPage />} />
        <Route exact path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
