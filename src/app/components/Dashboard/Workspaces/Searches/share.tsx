"use client";
import { GrFormClose } from "react-icons/gr";
import { RiFilter2Line } from "react-icons/ri";
import { BsPersonFillAdd } from "react-icons/bs";
import { IoMdShare } from "react-icons/io";

interface ShareProps {
  onClose: () => void;
}

const SharePopup: React.FC<ShareProps> = ({ onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 border rounded-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2 bg-white w-[40%] h-[45vh] p-2 z-50">
      <div className="flex w-full flex-col h-full">
        <div className="flex w-full justify-between my-2 2xl:my-4">
          <span className="flex font-normal text-sm mx-4 w-full h-full items-center">
            <span className="flex h-10 shadow-md items-center justify-center w-10 rounded-full">
              <IoMdShare size={20} />
            </span>
            <div className="flex mx-3">Share source</div>
          </span>
          <span onClick={onClose} className="flex cursor-pointer mx-4">
            <GrFormClose size={25} />
          </span>
        </div>
        <div className="flex flex-col justify-around flex-1">
          {/* Name */}
          <div className="flex w-full mx-6 my-2">
            <span className="flex text-sm 2xl:text-sm h-full items-center">
              User or Group to share with
            </span>
          </div>
          <div className="flex w-full">
            <input
              placeholder="Add user.."
              type="text"
              className="flex p-1 2xl:p-3 h-8 2xl:h-11 w-full mx-5 rounded-lg border"
            />
          </div>

          {/* Email ID */}
          <div className="flex w-full mx-6 my-2">
            <span className="flex text-sm 2xl:text-sm h-full items-center">
              Permission
            </span>
          </div>

          <div className="flex w-full">
            <input
              placeholder="Select permission"
              type="text"
              className="flex p-1 2xl:p-3 h-8 2xl:h-11 w-full mb-3 mx-5 rounded-lg border"
            />
          </div>

          <div className="flex w-full mx-6 my-2">
            <span className="flex text-sm 2xl:text-sm h-full items-center">
              Message
            </span>
          </div>

          <div className="flex w-full">
            <input
              placeholder="Add a note to send with the email"
              type="text"
              className="flex p-1 2xl:p-3 h-8 2xl:h-11 w-full mb-3 mx-5 rounded-lg border"
            />
          </div>
        </div>
        <div className="flex w-full h-12 text-sm justify-end">
          <button className="flex mx-2 hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-normal w-20 h-10 rounded-lg hover:text-white">
            Share
          </button>
          <button
            onClick={onClose}
            className="flex mx-2 hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-normal w-20 h-10 rounded-lg hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
