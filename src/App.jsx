import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Project from "./pages/Project";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEffect, useState } from "react";
import { isWallectConnected } from "./ethereum";

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  return library;
};

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    await isWallectConnected();
    setLoaded(true);
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="min-h-screen relative">
        <Navbar />
        {loaded && (
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/projects/:id" element={<Project />}></Route>
          </Routes>
        )}
      </div>
    </Web3ReactProvider>
  );
};

export default App;
