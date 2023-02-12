import { useGlobalState, setGlobalState } from "../context";
import { FaTimes } from "react-icons/fa";

const Fund = () => {
  const [fundModal] = useGlobalState("fundModal");

  return (
    <div
      className={`${fundModal} fixed top-0 left-0 w-screen h-screen flex
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
              onClick={() => setGlobalState("fundModal", "scale-0")}
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

          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="number"
              step={0.01}
              min={0.01}
              name="cost"
              placeholder="Amount"
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-primary-red
            text-white font-semibold text-md leading-tight
            rounded-lg shadow-md mt-10 w-[50%] mx-auto"
          >
            Fund
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fund;
