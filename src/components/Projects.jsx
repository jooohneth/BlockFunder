import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="flex flex-col px-6 mb-7 bg-white">
      <div className="flex justify-center items-center flex-wrap">
        {Array(6)
          .fill()
          .map((project, i) => (
            <ProjectCard key={i} id={i} project={[project]} />
          ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, id }) => {
  return (
    <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
      <Link to={"/projects/" + id}>
        <img
          src="https://pbs.twimg.com/profile_images/1597775748580134914/bLhE1aY1_400x400.jpg"
          alt="temp_alt"
          className="rounded-xl h-64 w-full object-cover"
        />

        <div className="p-4">
          <h5>Mantle Network</h5>

          <div className="flex flex-col">
            <div className="flex justify-start space-x-2 items-center mb-3"></div>

            <small className="text-gray-500">3 days left</small>
          </div>

          <div className="w-full bg-gray-300 overflow-hidden">
            <div
              className="bg-primary-red text-xs font-medium text-center p-1 leading-none
            rounded-l-full"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div
            className="flex justify-between items-center 
        font-bold mt-1 mb-2 text-gray-700"
          >
            <small className="flex justify-center items-center">
              <span>Raised: </span>
              <FaEthereum />
              <span>7 ETH</span>
            </small>
            <small className="flex justify-start items-center">
              <FaEthereum />
              <span>14 ETH</span>
            </small>
          </div>

          <div
            className="flex justify-between items-center flex-wrap
            mt-4 mb-2 text-gray-500 font-bold"
          >
            <small>3 Funders</small>
            <div>
              <small className="text-green-500">Open</small>
              {/*expired ? (
                <small className="text-red-500">Expired</small>
              ) : project?.status == 0 ? (
                <small className="text-gray-500">Open</small>
              ) : project?.status == 1 ? (
                <small className="text-green-500">Accepted</small>
              ) : project?.status == 2 ? (
                <small className="text-gray-500">Reverted</small>
              ) : project?.status == 3 ? (
                <small className="text-red-500">Deleted</small>
              ) : (
                <small className="text-orange-500">Paid</small>
              )*/}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
