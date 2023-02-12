import { FaEthereum } from "react-icons/fa";
import Identicon from "react-identicons";
import Moment from "react-moment";

const Funders = ({ backers }) => {
  return (
    <div className="relative overflow-x-auto flex flex-col justify-center items-start md:w-2/3 px-6 mx-auto">
      <div
        className="max-h-[calc(100vh_-_25rem)] overflow-y-auto
        shadow-md rounded-md w-full mb-10"
      >
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 bg-primary-white shadow-lg">
            <tr>
              <th
                scope="col"
                className="text-sm font-semibold
                px-6 py-4 text-left"
              >
                Funder
              </th>
              <th
                scope="col"
                className="text-sm font-semibold
                px-6 py-4 text-left"
              >
                Amount
              </th>
              <th
                scope="col"
                className="text-sm font-semibold
                px-6 py-4 text-left"
              >
                Withdrawn
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(6)
              .fill()
              .map((backer, i) => (
                <Backer key={i} backer={i} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Backer = ({ backer }) => (
  <tr className="bg-white border-b">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
    >
      <div className="flex justify-start items-center space-x-2">
        <Identicon
          className="h-10 w-10 object-contain rounded-full shadow-md"
          string={"0x868....hIGh" + backer}
          size={25}
        />
        <span>0x868....hIGh</span>
      </div>
    </th>
    <td
      className="text-sm font-light
                  px-6 py-4 whitespace-nowrap"
    >
      <small className="flex justify-start items-center space-x-1">
        <FaEthereum />
        <span className="text-gray-700 font-medium">1 ETH</span>
      </small>
    </td>
    <td
      className="text-sm font-light
      px-6 py-4 whitespace-nowrap"
    >
      No
    </td>
    <td
      className="text-sm font-light
      px-6 py-4 whitespace-nowrap"
    >
      <Moment fromNow>1</Moment>
    </td>
  </tr>
);

export default Funders;
