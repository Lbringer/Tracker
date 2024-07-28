import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { useEffect } from "react";
import { Dashboard } from "./pages/Dashboard";
import { RecoilRoot } from "recoil";
import { Todo } from "./pages/Todo";

function App() {
  useEffect(() => {
    localStorage.setItem("theme", localStorage.getItem("theme") || "");
    const theme = localStorage.getItem("theme");
    if (theme == "dark") {
      const root = document.documentElement;
      root.classList.add(theme);
    }
  }, []);
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
