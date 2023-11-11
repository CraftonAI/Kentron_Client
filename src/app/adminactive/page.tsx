"use client";
import Header from "../Admin/header";
import {BsPersonFillAdd} from "react-icons/bs";
import SideBar from "../Admin/sidebar";
import { useState } from "react";
import UserPopup from "../Admin/popups/userpop";


const ActiveUsers = () => {

  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className="flex text-black flex-col bg-[#ede4ff] h-[100vh] justify-between w-full">
      <div className="flex h-20 bg-black text-white">
        <Header />
      </div>
      <div className="flex w-full flex-1">
        <div className="flex w-[16%]">
          <SideBar />
        </div>
        <div className="flex flex-1 justify-start flex-col">
         Active admin
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;
