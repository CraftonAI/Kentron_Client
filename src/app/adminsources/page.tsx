"use client"

import Header from "@/app/Admin/header";
import SideBar from "@/app/Admin/sidebar";

const ManageSources = () => {
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
            <span className="flex h-[8vh] font-bold items-center mx-7 text-xl">
              Organization Policies{" "}
            </span>
            <div className="flex justify-center h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
              <div className="flex flex-1">
                  <div className="flex w-[18vw] items-center h-16 border-r px-7 mx-7 ">
                    <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                    <div className="flex flex-col mx-3">
                      <p className="flex text-sm font-bold">
                        Slack Enterprise
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mx-10">
                  <div className="flex w-24 items-center justify-between h-8 rounded-2xl border">
                    <span className="flex flex-1 items-center mx-2">
                      Disable
                    </span>
                    <span className="flex h-5 w-5 rounded-full bg-gray-400 mr-1"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-4 h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
                <div className="flex flex-1">
                  <div className="flex w-[18vw] items-center h-16 border-r px-7 mx-7 ">
                    <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                    <div className="flex flex-col mx-3">
                      <p className="flex text-sm font-bold">
                        Google Workspace
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mx-10">
                  <div className="flex w-24 items-center justify-between h-8 rounded-2xl border">
                    <span className="flex flex-1 items-center mx-2">
                      Disable
                    </span>
                    <span className="flex h-5 w-5 rounded-full bg-gray-400 mr-1"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-4 h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
              <div className="flex flex-1">
                  <div className="flex w-[18vw] items-center h-16 border-r px-7 mx-7 ">
                    <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                    <div className="flex flex-col mx-3">
                      <p className="flex text-sm font-bold">
                        Jira
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mx-10">
                  <div className="flex w-24 items-center justify-between h-8 rounded-2xl border">
                    <span className="flex flex-1 items-center mx-2">
                      Disable
                    </span>
                    <span className="flex h-5 w-5 rounded-full bg-gray-400 mr-1"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-4 h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
              <div className="flex flex-1">
                  <div className="flex w-[18vw] items-center h-16 border-r px-7 mx-7 ">
                    <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                    <div className="flex flex-col mx-3">
                      <p className="flex text-sm font-bold">
                        Confluence
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mx-10">
                  <div className="flex w-24 items-center justify-between h-8 rounded-2xl border">
                    <span className="flex flex-1 items-center mx-2">
                      Disable
                    </span>
                    <span className="flex h-5 w-5 rounded-full bg-gray-400 mr-1"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-4 h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
              <div className="flex flex-1">
                  <div className="flex w-[18vw] items-center h-16 border-r px-7 mx-7 ">
                    <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                    <div className="flex flex-col mx-3">
                      <p className="flex text-sm font-bold">
                        Microsoft 365
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mx-10">
                  <div className="flex w-24 items-center justify-between h-8 rounded-2xl border">
                    <span className="flex flex-1 items-center mx-2">
                      Disable
                    </span>
                    <span className="flex h-5 w-5 rounded-full bg-gray-400 mr-1"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSources;
