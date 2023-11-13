"use client";
import { BsPersonFillAdd } from "react-icons/bs";
import {GrFormClose} from "react-icons/gr";

interface UserPopupProps {
  onClose: () => void;
}

const UserPopup: React.FC<UserPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 border rounded-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2 bg-white w-[35%] h-[38vh] p-2 z-50">
    <div className="flex w-full flex-col h-full">
      <div className="flex w-full justify-between my-4">
        <span className="flex font-bold text-lg mx-4 w-full h-full items-center">
        <BsPersonFillAdd size={20} />
               <div className="flex mx-3">Add User</div>
        </span>
        <span onClick={onClose} className="flex cursor-pointer mx-4"><GrFormClose size={25} /></span>
      </div>
      <div className="flex flex-col justify-around flex-1">
        <div className="flex w-full mx-6 my-2">
          <span className="flex text-md h-full items-center">Name</span>
          <span className="flex h-full items-center text-[#8D8D8D] text-sm mx-2">| Required</span>
        </div>
        <div className="flex w-full">
          <input placeholder="Enter user name" type="text" className="flex p-3 h-11 w-full mx-5 rounded-lg border" />
        </div>

        <div className="flex w-full mx-6 my-2">
          <span className="flex text-md h-full items-center">Email ID </span>
          <span className="flex h-full items-center text-[#8D8D8D] text-sm mx-2">| Required</span>
        </div>

        <div className="flex w-full">
          <input placeholder="Enter email id" type="text" className="flex p-3 h-11 w-full mb-3 mx-5 rounded-lg border" />
        </div>
 
      </div>
      <div className="flex w-full h-12 justify-end">
        <button className="flex mx-2 hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-semibold w-20 h-10 rounded-lg hover:text-white">save</button>
        <button onClick={onClose} className="flex mx-2 hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-semibold w-20 h-10 rounded-lg hover:text-white">cancel</button>
      </div>
    </div>
    </div>
  );
};

export default UserPopup;
