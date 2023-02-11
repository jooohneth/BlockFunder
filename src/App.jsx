import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Project from "./pages/Project";

const App = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/projects/:id" element={<Project />}></Route>
      </Routes>
    </div>
  );
};

export default App;
