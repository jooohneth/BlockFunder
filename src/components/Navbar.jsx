import { Link } from "react-router-dom";
import { injected } from "../ethereum";
import { format } from "../context";
import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { setGlobalState } from "../context";

const Navbar = () => {
  const { account, activate, deactivate, setError, active } = useWeb3React();

  const onClickConnect = () => {
    activate(
      injected,
      (error) => {
        if (error instanceof UserRejectedRequestError) {
          // ignore user rejected error
          console.log("user refused");
        } else {
          setError(error);
        }
      },
      false
    );
    setGlobalState("active", 1);
  };

  const onClickDisconnect = () => {
    deactivate();
  };

  return (
    <nav
      className="flex justify-between items-center
    py-5 px-10 bg-primary-white shadow-lg rounded-lg fixed top-0 left-0 right-0 m-4"
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
        {active && typeof account === "string" ? (
          <button
            type="button"
            className="inline-block px-6 py-2.5
text-primary-white font-bold text-xs leading-tight uppercase
rounded-lg shadow-lg bg-primary-red hover:bg-primary-red text-primary-red hover:text-primary-white border-2 border-primary-red"
            onClick={onClickDisconnect}
          >
            {format(account, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="inline-block px-6 py-2.5
        text-primary-white font-bold text-xs leading-tight uppercase
        rounded-lg shadow-lg bg-primary-red hover:bg-primary-red text-primary-red hover:text-primary-white border-2 border-primary-red"
            onClick={onClickConnect}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
