import { setGlobalState } from "../context";

const Hero = () => {
  return (
    <div className="text-center bg-white text-gray-800 mt-60 mb-20 px-6">
      <h1
        className="text-5xl md:text-6xl xl:text-7xl font-bold
      tracking-tight my-12"
      >
        <span className="capitalize">
          <span className="text-primary-red underline underline-offset-8">
            fund
          </span>{" "}
          or get{" "}
          <span className="text-primary-red underline underline-offset-8">
            funded
          </span>
          .
        </span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-primary-red
        text-primary-white font-bold text-xs leading-tight uppercase
        rounded-lg shadow-md"
          onClick={() => setGlobalState("getFundingModal", "scale-100")}
        >
          Get Funding
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-primary-red
        font-bold text-xs leading-tight uppercase text-primary-red
        rounded-lg shadow-md bg-transparent hover:bg-primary-red
        hover:text-primary-white"
        >
          Fund Projects
        </button>
      </div>
    </div>
  );
};

export default Hero;
