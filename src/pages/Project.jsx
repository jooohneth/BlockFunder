import ProjectInfo from "../components/ProjectInfo";
import Funders from "../components/Funders";
import Edit from "../components/Edit";
import Fund from "../components/Fund";
import Delete from "../components/Delete";

const Project = () => {
  return (
    <>
      <ProjectInfo></ProjectInfo>
      <Funders></Funders>
      <Edit></Edit>
      <Fund></Fund>
      <Delete></Delete>
    </>
  );
};

export default Project;
