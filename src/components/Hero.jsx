const Hero = () => {
  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6">
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

      <div className="flex justify-center items-center mt-10 bg-primary-white">
        <div
          className="flex flex-col justify-center items-center
          h-20 border border-primary-white shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-primary-red
            leading-5"
          >
            0
          </span>
          <span>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border border-primary-white shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-primary-red
            leading-5"
          >
            0
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border border-primary-white shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-primary-red
            leading-5"
          >
            0 ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
