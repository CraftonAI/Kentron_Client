import React, { useState } from "react";
import "./searches.css";
import check from "../../../Assets/check_circle.png";
import { GiBiceps } from "react-icons/gi";
import { RiFilter2Line } from "react-icons/ri";
import Image from "next/image";
import { PiStarBold } from "react-icons/pi";
import { BiDownload } from "react-icons/bi";
import { MdOutlineInfo } from "react-icons/md";
import work from "../../../Assets/workspaces.png";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import FilterPopup from "./filterpopup";
import ExportPopup from "./exportpopup";

export const Searches = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className="flex h-[76vh] overflow-y-scroll w-full flex-col">
      <div className="flex flex-col w-full">
        <div className="flex w-[15%] justify-around py-4">
          Showing<span className="flex font-semibold">16,456</span> search
          results,
        </div>
        <div className="flex w-[100%]">
          <div className="flex w-[15%]">
            <span className="flex w-full px-2 shadow-lg justify-around bg-green-200 h-9 items-center rounded-full">
              <div className="flex">
                <Image src={check} width={30} alt="none" className="h-6 w-6" />
              </div>
              <div className="flex text-xs">Data collection completed</div>
              <div className="flex h-full items-center">
                <GiBiceps />
              </div>
            </span>
          </div>
          <div className="flex flex-1 px-2">
            <span className="flex w-full px-2 shadow-lg justify-start h-9 items-center rounded-full">
              <div className="flex text-xs mx-4 h-full items-center font-bold">
                Data collection contains :{" "}
              </div>
              <div className="flex w-9/12 justify-around items-center h-full">
                {" "}
                <div className="flex h-full items-center">
                  <div className="flex">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-xs">PII</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-xs">Sensitive Words</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-xs">HIPAA</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-xs">Contracts</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-xs">Address</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-xs">US Social Security Number</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-xs">Phone Number</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-xs">Passport</div>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex h-full justify-center items-center w-16">
            <span
              onClick={openPopup}
              className="flex cursor-pointer h-10 justify-center items-center w-full rounded-md bg-[#6528F7] text-white"
            >
              <RiFilter2Line size={18} />
            </span>
            {isPopupVisible && <FilterPopup onClose={closePopup} />}
          </div>
          <div className="flex flex-1 mx-3 items-center">
            <input
              className="flex h-10 shadow-lg rounded-md px-5 w-full"
              type="search"
              placeholder="Filter here"
            />
          </div>
          <div className="flex w-54 justify-center">
            <button
              onClick={openPopup}
              className="flex rounded-md p-5 font-bold text-white justify-center items-center mx-4 px-12 my-3 bg-[#6528F7] h-10"
            >
              Export
            </button>
          </div>
          {isPopupVisible && <ExportPopup onClose={closePopup} />}
        </div>
      </div>
      <div className="flex h-[60vh] scrollmain">
        <div className="flex flex-1 flex-col justify-between overflow-y-scroll scrollsemi">
          <span className="flex flex-col border shadow-md rounded-md bg-[#FFFFFFBF] xl:w-[900px] 2xl:w-[96%] my-1 h-[169px]">
            <div className="flex w-full px-4 h-24 items-center">
              <span className="flex w-12 h-12 rounded-full items-center justify-center border mx-2 shadow-lg">
                <Image src={work} width={30} alt="none" className="h-6 w-6" />
              </span>
              <span className="flex h-14 justify-center flex-col flex-1">
                <div className="flex font-bold text-md mx-3 underline underline-offset-1">
                  Personal messages john and jennifer - 2023-10-01
                </div>
                <div className="flex w-9/12 h-full items-center justify-around">
                  <div className="flex px-3 h-full items-center text-sm">
                    {" "}
                    <FaRegCalendarDays className="flex h-full mr-1" /> Created
                    date :
                  </div>
                  <div className="flex justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    12/05/2023{" "}
                  </div>
                  <div className="flex flex-1 px-2 justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    |
                    <FiUser className="ml-2 -mr-1 text-md" />
                    Direct Message
                  </div>
                </div>
              </span>
              <span className="flex flex-1 justify-end px-2 items-center">
                <BiDownload className="mx-1" size={22} />
                <PiStarBold classname="mx-1" size={20} />
                <MdOutlineInfo className="ml-1" size={20} />
              </span>
            </div>
            <span className="flex w-full text-xs mx-2 font-normal p-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages,Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </span>
          </span>
          <span className="flex flex-col border shadow-md rounded-md bg-[#FFFFFFBF] xl:w-[900px] 2xl:w-[96%] my-1 h-[169px]">
            <div className="flex w-full px-4 h-24 items-center">
              <span className="flex w-12 h-12 rounded-full items-center justify-center border mx-2 shadow-lg">
                <Image src={work} width={30} alt="none" className="h-6 w-6" />
              </span>
              <span className="flex h-14 justify-center flex-col flex-1">
                <div className="flex font-bold text-md mx-3 underline underline-offset-1">
                  Personal messages john and jennifer - 2023-10-01
                </div>
                <div className="flex w-9/12 h-full items-center justify-around">
                  <div className="flex px-3 h-full items-center text-sm">
                    {" "}
                    <FaRegCalendarDays className="flex h-full mr-1" /> Created
                    date :
                  </div>
                  <div className="flex justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    12/05/2023{" "}
                  </div>
                  <div className="flex flex-1 px-2 justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    |
                    <FiUser className="ml-2 -mr-1 text-md" />
                    Direct Message
                  </div>
                </div>
              </span>
              <span className="flex flex-1 justify-end px-2 items-center">
                <BiDownload className="mx-1" size={22} />
                <PiStarBold classname="mx-1" size={20} />
                <MdOutlineInfo className="ml-1" size={20} />
              </span>
            </div>
            <span className="flex w-full text-xs mx-2 font-normal p-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages,Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </span>
          </span>
          <span className="flex flex-col border shadow-md rounded-md bg-[#FFFFFFBF] xl:w-[900px] 2xl:w-[96%] my-1 h-[169px]">
            <div className="flex w-full px-4 h-24 items-center">
              <span className="flex w-12 h-12 rounded-full items-center justify-center border mx-2 shadow-lg">
                <Image src={work} width={30} alt="none" className="h-6 w-6" />
              </span>
              <span className="flex h-14 justify-center flex-col flex-1">
                <div className="flex font-bold text-md mx-3 underline underline-offset-1">
                  Personal messages john and jennifer - 2023-10-01
                </div>
                <div className="flex w-9/12 h-full items-center justify-around">
                  <div className="flex px-3 h-full items-center text-sm">
                    {" "}
                    <FaRegCalendarDays className="flex h-full mr-1" /> Created
                    date :
                  </div>
                  <div className="flex justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    12/05/2023{" "}
                  </div>
                  <div className="flex flex-1 px-2 justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    |
                    <FiUser className="ml-2 -mr-1 text-md" />
                    Direct Message
                  </div>
                </div>
              </span>
              <span className="flex flex-1 justify-end px-2 items-center">
                <BiDownload className="mx-1" size={22} />
                <PiStarBold classname="mx-1" size={20} />
                <MdOutlineInfo className="ml-1" size={20} />
              </span>
            </div>
            <span className="flex w-full text-xs mx-2 font-normal p-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages,Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </span>
          </span>
          <span className="flex flex-col border shadow-md rounded-md bg-[#FFFFFFBF] xl:w-[900px] 2xl:w-[96%] my-1 h-[169px]">
            <div className="flex w-full px-4 h-24 items-center">
              <span className="flex w-12 h-12 rounded-full items-center justify-center border mx-2 shadow-lg">
                <Image src={work} width={30} alt="none" className="h-6 w-6" />
              </span>
              <span className="flex h-14 justify-center flex-col flex-1">
                <div className="flex font-bold text-md mx-3 underline underline-offset-1">
                  Personal messages john and jennifer - 2023-10-01
                </div>
                <div className="flex w-9/12 h-full items-center justify-around">
                  <div className="flex px-3 h-full items-center text-sm">
                    {" "}
                    <FaRegCalendarDays className="flex h-full mr-1" /> Created
                    date :
                  </div>
                  <div className="flex justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    12/05/2023{" "}
                  </div>
                  <div className="flex flex-1 px-2 justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    |
                    <FiUser className="ml-2 -mr-1 text-md" />
                    Direct Message
                  </div>
                </div>
              </span>
              <span className="flex flex-1 justify-end px-2 items-center">
                <BiDownload className="mx-1" size={22} />
                <PiStarBold classname="mx-1" size={20} />
                <MdOutlineInfo className="ml-1" size={20} />
              </span>
            </div>
            <span className="flex w-full text-xs mx-2 font-normal p-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages,Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </span>
          </span>
        </div>
        <div className="flex flex-col w-80 border shadow-lg overflow-y-scroll mb-2 mx-3 rounded-md bg-[#FFFFFFBF] h-full">
          <div className="flex w-full justify-between items-center h-10 border-b">
            <span className="flex h-10 mx-4 font-bold text-sm items-center">
              <MdOutlineInfo className="mx-1" size={20} />
              File information
            </span>
            <RiCloseLine size={20} />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  size
                </div>
                <div className="flex font-normal text-md">58.23 KB</div>
              </span>
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Last modified
                </div>
                <div className="flex font-normal text-md">10/25/2023</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Type
                </div>
                <div className="flex font-normal text-md">Conversational</div>
              </span>
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  File creation
                </div>
                <div className="flex font-normal text-md">10/25/2023</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Title
                </div>
                <div className="flex font-normal text-md">
                  Personal messages john and Jennifer - 2023-10-01
                </div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Active Participant
                </div>
                <div className="flex font-normal text-md">Jennifer stark</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Active Participant
                </div>
                <div className="flex font-normal text-md">Jennifer stark</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Member
                </div>
                <div className="flex font-normal text-md">
                  Jennifer stark, Jennifer stark
                </div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Thread
                </div>
                <div className="flex font-normal text-md">Direct message</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Modifications
                </div>
                <div className="flex font-normal text-md">Yes</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Language
                </div>
                <div className="flex font-normal text-md">English</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Duplicates
                </div>
                <div className="flex font-normal text-md">02</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
