import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
};

export default App;
