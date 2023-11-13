import { BsPersonFillAdd } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import React from "react";

interface UserPopupProps {
  onClose: () => void;
}

const UserPopup: React.FC<UserPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 border rounded-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2 bg-white w-[90%] max-w-md h-[45vh] p-2 z-50">
      <div className="flex w-full flex-col h-full">
        <div className="flex w-full justify-between my-2 2xl:my-4">
          <span className="flex font-bold text-lg mx-4 w-full h-full items-center">
            <BsPersonFillAdd size={20} />
            <div className="flex mx-3">Add User</div>
          </span>
          <span onClick={onClose} className="flex cursor-pointer mx-4">
            <GrFormClose size={25} />
          </span>
        </div>
        <div className="flex flex-col justify-around flex-1">
          {/* Name */}
          <div className="flex w-full mx-6 my-2">
            <span className="flex text-sm 2xl:text-base h-full items-center">Name</span>
            <span className="flex h-full items-center text-[#8D8D8D] text-xs 2xl:text-sm mx-2">
              | Required
            </span>
          </div>
          <div className="flex w-full">
            <input
              placeholder="Enter user name"
              type="text"
              className="flex p-1 2xl:p-3 h-8 2xl:h-11 w-full mx-5 rounded-lg border"
            />
          </div>

          {/* Email ID */}
          <div className="flex w-full mx-6 my-2">
            <span className="flex text-sm 2xl:text-base h-full items-center">Email ID </span>
            <span className="flex h-full items-center text-[#8D8D8D] text-xs 2xl:text-sm mx-2">
              | Required
            </span>
          </div>

          <div className="flex w-full">
            <input
              placeholder="Enter email id"
              type="text"
              className="flex p-1 2xl:p-3 h-8 2xl:h-11 w-full mb-3 mx-5 rounded-lg border"
            />
          </div>
        </div>
        <div className="flex w-full h-12 justify-end">
          <button className="flex mx-2 hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-semibold w-20 h-10 rounded-lg hover:text-white">
            Save
          </button>
          <button
            onClick={onClose}
            className="flex mx-2 hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-semibold w-20 h-10 rounded-lg hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPopup;
