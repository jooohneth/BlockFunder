import Hero from "../components/Hero";
import Projects from "../components/Projects";
import GetFunded from "../components/GetFunded";
import { useEffect } from "react";
import { loadProjects } from "../ethereum";
import { useGlobalState } from "../context";

const Main = () => {
  const [projects] = useGlobalState("projects");
  const [stats] = useGlobalState("stats");

  useEffect(async () => {
    //await loadProjects();
  }, []);

  return (
    <>
      <Hero></Hero>
      <Projects></Projects>
      <GetFunded></GetFunded>
    </>
  );
};

export default Main;
