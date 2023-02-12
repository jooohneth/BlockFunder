import { useGlobalState, setGlobalState } from "../context";
import { FaTimes } from "react-icons/fa";

const Delete = () => {
  const [deleteModal] = useGlobalState("deleteModal");

  return (
    <div
      className={`${deleteModal} fixed top-0 left-0 w-screen h-screen flex
    items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300`}
    >
      <div
        className="bg-white shadow-xl shadow-black
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
      >
        <form className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold">#Project Name</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={() => setGlobalState("deleteModal", "scale-0")}
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex justify-center items-center mt-5">
            <div className="rounded-xl overflow-hidden h-20 w-20">
              <img
                src="https://pbs.twimg.com/profile_images/1597775748580134914/bLhE1aY1_400x400.jpg"
                alt="project title"
                className="h-full w-full object-cover cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center rounded-xl mt-5">
            <span className="font-bold text-primary-red">
              This action can't be undone!
            </span>
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-primary-red
            text-white font-semibold text-md leading-tight
            rounded-lg shadow-md mt-10 w-[50%] mx-auto"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default Delete;
