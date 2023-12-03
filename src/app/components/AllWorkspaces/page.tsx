"use client";
import React, { useState } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { Pagination } from "@nextui-org/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "../AllWorkspaces/workspace.css"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const AllWorkspace = () => {
  const data = new Array(20).fill(null).map((_, index) => ({
    name: `Workspace Name${index + 1}`,
    size: 0.6,
    external: "yes",
    status: "Active",
    date: "14/08/2022",
    lastDate: "12/05/2023",
    lastby: "John Deer",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false); // Added state for "Select All" checkbox
  const itemsPerPage = 10; // Adjust as needed

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Replace 50 with your total number of userss
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  };

  const isAllChecked = currentItems.every((user) => selectAll);

  return (
    <div className="flex h-[86vh] 2xl:w-full flex-col">
      <div className="flex py-6 text-2xl mx-3 font-semibold text-black">All Workspaces </div>
      <div className="2xl:h-[90%] lg:h-[90%] flex bg-white px-3 rounded-md flex-col 2xl:w-full mx-3">
      <div className="flex py-3 2xl:w-full justify-end px-3 items-center text-black">
      <input
              className="flex h-10 shadow-md border rounded-md px-5"
              type="search"
              placeholder="Search here..."
            />
         </div>
        {/* <div>table</div> */}
        <div className="sh-full overflow-y-scroll lg:my-8 2xl:my-6 shadow-md rounded-md border">
          <table className="min-w-max w-full h-full table-auto rounded-md ">
            <thead>
              <tr className="border-b py-4 text-sm text-black font-bold leading-normal">
                <th className="py-3 px-6 flex h-12 items-center text-left">
                  <input
                    id="selectAllCheckbox"
                    type="checkbox"
                    value=""
                    checked={isAllChecked}
                    onChange={handleSelectAllChange}
                    className="w-4 h-4 mx-6 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  Name
                </th>
                <th className="py-3 px-6 text-left">Size (GB)</th>
                <th className="py-3 px-6 flex mx-3 text-center">
                  Externally Shared
                </th>
                <th className="py-3 px-8 justify-start pl-0">Status</th>
                <th className="py-3 px-5 justify-start">Created Date</th>
                <th className="py-3 px-5 justify-start">Last Modify Date</th>
                <th className="py-3 px-5 justify-start">Last Modify By</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-black">
              {currentItems.map((user, index) => (
                <tr className="border-b" key={index}>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-bold lg:w-auto justify-between flex h-12 items-center">
                        <input
                          id={`checkbox-${index}`}
                          type="checkbox"
                          value=""
                          checked={selectAll}
                          onChange={() => {}}
                          className="w-4 h-4 mx-6 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                        />
                        <FaShareFromSquare style={{ marginRight: "5px" }} />{" "}
                        {user.name}
                        
                          
                            <BiDotsVerticalRounded className="mx-2" />
                          
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex text-[#161616] font-medium mx-1 text-sm h-full justify-start items-center">
                      <span>{user.size}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="flex text-[#161616] w-10/12  h-full items-center text-left font-medium py-2 px-3 rounded-full text-xs">
                      {user.external}
                    </span>
                  </td>

                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center mr-8">
                      {user.status}
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="flex text-[#161616] justify-center font-medium py-2 px-3 rounded-full text-xs">
                      {user.date}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="flex text-[#161616] w-10/12 justify-center  h-full items-center text-left font-medium py-2 px-3 rounded-full text-xs">
                      {user.lastDate}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="flex text-[#161616] justify-center w-10/12  h-full items-center text-left font-medium py-2 px-3 rounded-full text-xs">
                      {user.lastby}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between -mt-6 bg-white lg:border py-2 2xl:border-none lg:mb-2 2xl:mb-1 items-center px-2  rounded-md ">
          <div className="flex">
            <span className="text-sm text-gray-700">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {currentPage * itemsPerPage} of {data.length} entries
            </span>
          </div>
          <div className="flex">
            <Pagination
              showControls
              total={pageCount}
              initialPage={currentPage}
              onChange={(newPage) => paginate(newPage)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllWorkspace;
