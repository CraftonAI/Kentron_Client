"use client";
import React, { useState } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";

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
  const itemsPerPage = 1; // Adjust as needed

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Replace 50 with your total number of users
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  };

  const isAllChecked = currentItems.every((user) => selectAll);

  return (
    <div className="flex h-[76vh] overflow-y-scroll w-full flex-col">
      <div className="h-full flex flex-col w-full">
        {/* <div>table</div> */}
        <div className="sh-full my-6 shadow-md rounded-md border">
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
                      <span className="font-bold flex h-12 items-center">
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
                      <GrStatusGood
                        style={{
                          marginRight: "3px",
                          marginTop: "2px",
                          Color: "green",
                        }}
                      />
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
        <div className="flex justify-between overflow-x-scroll -mt-6 items-center px-5 py-5 rounded-md ">
          <div className="flex">
            <span className="text-sm text-gray-700">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {currentPage * itemsPerPage} of {data.length} entries
            </span>
          </div>
          <div className="flex">
            <nav aria-label="Page navigation example">
              <ul className="inline-flex items-center -space-x-px">
                {/* ... Pagination Buttons ... */}
                {new Array(pageCount).fill(null).map((_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`py-2 px-3 leading-tight ${
                        currentPage === index + 1
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-500 border"
                      } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                {/* ... */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllWorkspace;
