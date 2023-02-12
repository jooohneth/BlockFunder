import Identicons from "react-identicons";
import { FaEthereum } from "react-icons/fa";
import { setGlobalState } from "../context";

const ProjectDetails = ({ project }) => {
  return (
    <div className="pt-24 mb-5 px-6 flex justify-center mt-8">
      <div className="flex justify-center flex-col md:w-2/3">
        <div
          className="flex justify-start items-start
        sm:space-x-4 flex-wrap"
        >
          <img
            src="https://pbs.twimg.com/profile_images/1597775748580134914/bLhE1aY1_400x400.jpg"
            alt="temp_alt"
            className="rounded-xl h-64 object-cover sm:w-1/3 w-full"
          />

          <div className="flex-1 sm:py-0 py-4">
            <div className="flex flex-col justify-start flex-wrap">
              <h5 className="text-gray-900 text-xl font-bold my-2">
                Mantle Network
              </h5>
              <small className="text-gray-500">3 days left</small>
            </div>

            <div className="flex justify-between items-center w-full pt-1">
              <div className="flex justify-start space-x-2">
                <Identicons
                  className="rounded-full shadow-md"
                  string={"0x868....hIGh"}
                  size={15}
                />
                <small className="text-gray-700 font-semibold text-sm">
                  0x868....hIGh
                </small>
                <small className="text-gray-500 font-bold">16 Funders</small>
              </div>

              <div className="font-bold"></div>
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

            <p className="text-sm font-light mt-4">
              Mantle is a high-performance Ethereum layer-2 network built with
              modular architecture delivering low fees and high security.
              Builders can leverage Mantle’s unique design to build dApps with
              exceptional UX, all while relying on Ethereum’s unrivaled
              security.
            </p>
          </div>

          <div className="w-full overflow-hidden bg-gray-300 mt-4">
            <div
              className="bg-primary-red text-xs font-medium
              text-green-100 text-center p-1 leading-none
              rounded-l-full h-1 overflow-hidden max-w-full"
              style={{
                width: `50%`,
              }}
            ></div>
          </div>

          <div className="w-full flex justify-between items-center font-bold mt-2">
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
        </div>

        <div className="flex justify-between items-center space-x-2 my-5">
          <div>
            <button
              type="button"
              className="inline-block px-6 py-2.5
              font-semibold text-xs leading-tight uppercase
              rounded-lg shadow-md text-white bg-primary-red mx-2"
              onClick={() => setGlobalState("fundModal", "scale-100")}
            >
              Fund
            </button>
            <button
              type="button"
              className="inline-block px-6 py-2.5
                        font-semibold text-xs leading-tight uppercase
                        rounded-lg shadow-md text-primary-red hover:text-primary-white bg-transparent hover:bg-primary-red border border-primary-red"
            >
              Payout
            </button>
          </div>
          <div>
            <button
              type="button"
              className="inline-block px-6 py-2.5
                        font-semibold text-xs leading-tight uppercase
                        rounded-lg shadow-md text-primary-red hover:text-primary-white bg-transparent hover:bg-primary-red border border-primary-red"
              onClick={() => setGlobalState("editModal", "scale-100")}
            >
              Edit
            </button>
            <button
              type="button"
              className="inline-block px-6 py-2.5
              font-semibold text-xs leading-tight uppercase
              rounded-lg shadow-md text-white bg-primary-red mx-2"
              onClick={() => setGlobalState("deleteModal", "scale-100")}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
