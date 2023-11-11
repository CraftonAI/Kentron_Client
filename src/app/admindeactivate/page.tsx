"use client";
import Header from "../Admin/header";
import SideBar from "../Admin/sidebar";

const DeactiveUser = () => {
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
          <div className="flex w-full flex-col">
            <span className="flex h-[8vh] justify-between font-bold items-center mx-9 text-xl">
              Deactivate Users
              
            </span>
            <div className="flex items-center w-[95%] mx-10 justify-center h-[40vh] bg-white">
             Admin deactivate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeactiveUser;
