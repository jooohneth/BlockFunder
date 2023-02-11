import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center
    py-5 px-10 bg-primary-white shadow-lg rounded-full fixed top-0 left-0 right-0 m-4"
    >
      <Link
        to="/"
        className="flex justify-start items-center
  text-xl text-black space-x-1"
      >
        <div className="font-bold">
          <span className="text-primary-black">Block</span>
          <span className="text-primary-red">Funder</span>
        </div>
      </Link>

      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="inline-block px-6 py-2.5
        text-primary-white font-bold text-xs leading-tight uppercase
        rounded-full shadow-lg bg-primary-white hover:bg-primary-red text-primary-red hover:text-primary-white border-2 border-primary-red"
        >
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
