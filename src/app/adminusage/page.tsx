import Header from "@/app/Admin/header";
import SideBar from "@/app/Admin/sidebar";
import workspace from "../components/Assets/workspaces.png";
import Image from 'next/image';
import user from "../components/Assets/account_circle.png";
import connections from "../components/Assets/account_tree.png";
import drive from "../components/Assets/hard_drive.png";
import data from "../components/Assets/overview.png";
import slack from "../components/Assets/slack.png";
import google from "../components/Assets/google.png";
import jira from "../components/Assets/jira.png";
import confluence from "../components/Assets/confluence.png";
import microsoft from "../components/Assets/microsoft.png";




const AdminUsage = () => {
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
            <span className="flex h-[8vh] font-bold items-center mx-7 text-lg">
              Platform Usage Metrics
            </span>
            <div className="flex justify-center h-24">
              <div className="flex bg-white rounded-lg justify-around w-full items-center mx-7">
                <div className="flex w-[14vw] items-center h-16 border-r px-7 ">
                  <div className="flex rounded-md text-lg h-10 w-10 font-bold justify-center items-center -mr-1">
                  <Image src={user} width={30}  alt="none" className='adds'/>

                  </div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-[12px] text-[#1616168A]">User</p>
                    <p className="flex -mt-1 text-[16px] font-bold">12,000</p>
                  </div>
                </div>
                <div className="flex w-[14vw] items-center h-16 border-r px-7 ">
                  <div className="flex rounded-md text-lg h-10 w-10 font-bold justify-center items-center -mr-1">
                  <Image src={workspace} width={30}  alt="none" className='adds'/>
                  </div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-[12px] text-[#1616168A]">Workspace</p>
                    <p className="flex -mt-1 text-[16px] font-bold">12,000</p>
                  </div>
                </div>
                <div className="flex w-[14vw] items-center h-16 border-r px-7 ">
                  <div className="flex rounded-md text-lg h-10 w-10 font-bold justify-center items-center -mr-1">
                  <Image src={connections} width={30}  alt="none" className='adds'/>
                  </div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-[12px] text-[#1616168A]">Connectors</p>
                    <p className="flex -mt-1 text-[16px] font-bold">12,000</p>
                  </div>
                </div>
                <div className="flex w-[14vw] items-center h-16 border-r px-7 ">
                  <div className="flex rounded-md text-lg h-10 w-10 font-bold justify-center items-center -mr-1">
                  <Image src={data} width={30}  alt="none" className='adds'/>
                  </div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-[12px] text-[#1616168A]">Total process Data</p>
                    <p className="flex -mt-1 text-[16px] font-bold">12 GB</p>
                  </div>
                </div>
                <div className="flex w-[14vw] items-center h-16 px-7 ">
                  <div className="flex rounded-md text-lg h-10 w-10 font-bold justify-center items-center -mr-1">
                  <Image src={drive} width={30}  alt="none" className='adds'/>
                  </div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-[12px] text-[#1616168A]">Total Work storage</p>
                    <p className="flex -mt-1 text-[16px] font-bold">12 GB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <span className="flex h-[8vh] font-bold items-center mx-7 text-lg">
              Application Usage Metrics
            </span>
            <div className="flex justify-center h-24">
              <div className="flex bg-white rounded-lg justify-around w-full items-center mx-7">
                <div className="flex w-[14vw] items-center h-16 border-r px-7 ">
                  <div className="flex rounded-md text-lg h-10 w-10 font-bold justify-center items-center -mr-1">
                  <Image src={slack} width={30}  alt="none" className='adds'/>

                  </div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-[12px] text-[#1616168A]">Slack Enterprise</p>
                    <p className="flex -mt-1 text-[16px] font-bold">12,000</p>
                  </div>
                </div>
                <div className="flex w-[14vw] items-center h-16 border-r px-7 ">
                  <div className="flex rounded-md text-lg h-10 w-10 font-bold justify-center items-center -mr-1">
                  <Image src={google} width={30}  alt="none" className='adds'/>

                  </div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-[12px] text-[#1616168A]">Google Workspace</p>
                    <p className="flex -mt-1 text-[16px] font-bold">12,000</p>
                  </div>
                </div>
                <div className="flex w-[14vw] items-center h-16 border-r px-7 ">
                  <div className="flex rounded-md text-lg h-10 w-10 font-bold justify-center items-center -mr-1">
                  <Image src={jira} width={30}  alt="none" className='adds'/>

                  </div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-[12px] text-[#1616168A]">Jira</p>
                    <p className="flex -mt-1 text-[16px] font-bold">12,000</p>
                  </div>
                </div>
                <div className="flex w-[14vw] items-center h-16 border-r px-7 ">
                  <div className="flex rounded-md text-lg h-10 w-10 font-bold justify-center items-center -mr-1">
                  <Image src={confluence} width={30}  alt="none" className='adds'/>

                  </div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-[12px] text-[#1616168A]">Confluence</p>
                    <p className="flex -mt-1 text-[16px] font-bold">12,000</p>
                  </div>
                </div>
                <div className="flex w-[14vw] items-center h-16 px-7 ">
                  <div className="flex rounded-md text-lg h-10 w-10 font-bold justify-center items-center -mr-1">
                  <Image src={microsoft} width={30}  alt="none" className='adds'/>

                  </div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-[12px] text-[#1616168A]">Microsoft 365</p>
                    <p className="flex -mt-1 text-[16px] font-bold">12,000</p>
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

export default AdminUsage;