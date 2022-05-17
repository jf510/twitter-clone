import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={[<Home />]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
