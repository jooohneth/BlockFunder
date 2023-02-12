import { useGlobalState, setGlobalState } from "../context";
import { createProject } from "../ethereum";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const GetFunded = () => {
  const [getFundingModal] = useGlobalState("getFundingModal");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const formatTime = (dateStr) => {
    const dateObj = Date.parse(dateStr);
    return dateObj / 1000;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !amount || !date || !image) return;

    const params = {
      title,
      description,
      image,
      amount,
      expires: formatTime(date),
    };

    await createProject(params);
    onClose();
  };

  const onClose = () => {
    setGlobalState("getFundingModal", "scale-0");
    def();
  };

  const def = () => {
    setTitle("");
    setAmount("");
    setDescription("");
    setImage("");
    setDate("");
  };

  return (
    <div
      className={`${getFundingModal} fixed top-0 left-0 w-screen h-screen flex
    items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300`}
    >
      <div
        className="bg-white shadow-xl shadow-black
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
      >
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Add Project</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={onClose}
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex justify-center items-center mt-5">
            {image && (
              <div className="rounded-xl overflow-hidden h-20 w-20">
                <img
                  src={image}
                  alt="project-logo"
                  className="h-full w-full object-cover cursor-pointer"
                />
              </div>
            )}
          </div>
          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
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
              placeholder="cost (ETH)"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              required
            />
          </div>
          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="date"
              name="date"
              placeholder="Expires"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required
            />
          </div>
          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="url"
              name="imageURL"
              placeholder="Image URL"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              required
            />
          </div>
          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <textarea
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-primary-red
            text-white font-semibold text-md leading-tight
            rounded-lg shadow-md mt-10 w-[50%] mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetFunded;
