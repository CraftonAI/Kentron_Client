import { BiUserCircle } from "react-icons/bi";
import SideBar from "./sidebar";
import Header from "./header";

const Admin = () => {
  return (
    <div className="flex text-black flex-col bg-[#ede4ff] h-[100vh] justify-between w-full">
      <div className="flex h-20 bg-black text-white">
        <Header />
      </div>
      <div className="flex w-full flex-1">
        <div className="flex w-[20%] xl:w-[16%]">
          <SideBar />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex h-16 border-b font-Helvetica text-xl border-b-gray-300 mx-7 items-center">
            <span className="flex font-bold">Welcome back,</span> Jennifer steve
          </div>
          <div className="flex flex-col my-3">
            <div className="flex mx-7 text-sm my-4 font-bold">
              Your organisaton at a glance
            </div>
            <div className="flex w-full justify-around text-base">
              <span className="flex flex-col bg-white h-16 w-[14vw] border justify-center rounded-lg">
                <div className="flex font-bold text-sm mx-3">12000</div>
                <div className="flex items-center text-[#1616168A] text-sm mx-3">
                  <BiUserCircle
                    size={15}
                    style={{ display: "flex", marginRight: "2px" }}
                  />
                  Users
                </div>
              </span>
              <span className="flex flex-col bg-white h-16 w-[14vw] border justify-center rounded-lg">
                <div className="flex font-bold mx-3">12000</div>
                <div className="flex items-center text-[#1616168A] text-sm mx-3">
                  <BiUserCircle
                    size={15}
                    style={{ display: "flex", marginRight: "2px" }}
                  />
                  Workspace
                </div>
              </span>
              <span className="flex flex-col bg-white h-16 w-[14vw] border justify-center rounded-lg">
                <div className="flex font-bold mx-3">12000</div>
                <div className="flex items-center text-[#1616168A] text-sm mx-3">
                  <BiUserCircle
                    size={15}
                    style={{ display: "flex", marginRight: "2px" }}
                  />
                  Connection
                </div>
              </span>
              <span className="flex flex-col bg-white h-16 w-[14vw] border justify-center rounded-lg">
                <div className="flex font-bold mx-3">12 GB</div>
                <div className="flex items-center text-[#1616168A] text-sm mx-3">
                  <BiUserCircle
                    size={15}
                    style={{ display: "flex", marginRight: "2px" }}
                  />
                  Total processes data
                </div>
              </span>
              <span className="flex flex-col bg-white h-16 w-[14vw] border justify-center rounded-lg">
                <div className="flex font-bold mx-3">25 GB</div>
                <div className="flex items-center text-[#1616168A] text-sm mx-3">
                  <BiUserCircle
                    size={15}
                    style={{ display: "flex", marginRight: "2px" }}
                  />
                  Total current storage
                </div>
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col h-[50vh]">
            <div className="flex text-sm h-12 items-center font-bold mx-6">
              Title here
            </div>
            <textarea className="flex bg-white rounded-lg flex-1 w-[96%] mx-6 p-2" ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
