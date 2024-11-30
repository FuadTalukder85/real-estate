import React from "react";
import { MdClose } from "react-icons/md";

const UpdateProfileModal = ({ onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 backdrop-blur-[3px] z-50" onClick={onClose}>
        {/* Modal Container */}
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg w-96 p-6 z-60">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-700">
              Update your profile
            </h2>
            <button
              onClick={onClose}
              className="text-white bg-red-500 hover:bg-red-600 rounded px-2 py-1"
            >
              <MdClose />
            </button>
          </div>

          {/* Modal Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Profile picture"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Your Number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Your Address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileModal;
