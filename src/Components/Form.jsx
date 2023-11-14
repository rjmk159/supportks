import { useState } from "react";
import axios from "axios";
import {
  BsHandThumbsDown,
  BsHandThumbsDownFill,
  BsHandThumbsUp,
  BsHandThumbsUpFill,
} from "react-icons/bs";

const ThumbsForm = ({ handleSubmitFeedback }) => {
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const [showThankyou, setShowThankyou] = useState(false);

  const handleThumbsUp = async () => {
    setSelected("up");
  };

  const handleThumbsDown = async () => {
    setSelected("down");
  };
  const handleSubmitFeedbackCall = () => {
    handleSubmitFeedback(selected, message);

    setTimeout(() => {
      setShowThankyou(true);
    }, 2000);
    setTimeout(() => {
      setShowThankyou(false);
      setSelected("");
      setMessage("");
    }, 2000);
  };
  return !showThankyou ? (
    <>
      <h5 className="text-2xl font-semibold tracking-tight text-gray-700 mb-4">
        Have you submitted your feedback and got the confirmation message
      </h5>
      <div className="flex justify-between">
        <button
          onClick={handleThumbsUp}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          {selected === "up" ? (
            <BsHandThumbsUpFill className="w-7 h-7 mr-2" />
          ) : (
            <BsHandThumbsUp className="w-7 h-7 mr-2" />
          )}{" "}
          Yes, I love my Language
        </button>
        <button
          onClick={handleThumbsDown}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          {selected === "down" ? (
            <BsHandThumbsDownFill className="w-7 h-7 mr-2" />
          ) : (
            <BsHandThumbsDown className="w-7 h-7 mr-2" />
          )}{" "}
          Waste of time
        </button>
      </div>
      <div className="mt-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-600"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
          placeholder="Enter your feedback message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="mt-4">
        <button
          className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSubmitFeedbackCall}
        >
          Submit
        </button>
      </div>
    </>
  ) : (
    <h5 className="text-2xl font-semibold tracking-tight text-gray-700 mb-4">
      Thank you for your feedback
    </h5>
  );
};

export default ThumbsForm;
