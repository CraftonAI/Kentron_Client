"use client";
import React, { useState } from "react";
import "./Export.css";
import { FaShareFromSquare } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { Pagination } from "@nextui-org/react";



export const Export = () => {
  // New data sourcee
  const data = new Array(50).fill(null).map((_, index) => ({
    name: `Export search - - 2023-10-12 ${index + 1}`,
    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    size: 0.6,
    date: "14/08/2022",
    status: "Ready to download"
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust as needed

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Replace 50 with your total number of users
  const pageCount = Math.ceil(data.length / itemsPerPage);

    return (
      <div className="flex h-[76vh]  2xl:w-full flex-col">
      <div className="h-full flex flex-col w-full">
      {/* <div>table</div> */}
      <div className="bg-white sh-full overflow-y-scroll my-6 shadow-md rounded-md border">
        <table className="min-w-max bg-white w-full h-full table-auto rounded-md ">
          <thead>
            <tr className="border-b py-4 text-sm font-bold leading-normal">
              <th className="py-3 px-6 flex h-12 items-center text-left">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 mx-6 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                />
                Name
              </th>
              <th className="py-3 px-6 text-left">Size (GB)</th>
              <th className="py-3 px-6 flex mx-3 text-center">Comment</th>
              <th className="py-3 px-8 justify-start pl-0">Status</th>
              <th className="py-3 px-5 justify-start">Created Date</th>

            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {currentItems.map((user, index) => (
              <tr className="border-b" key={index}>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-bold flex h-12 items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 mx-6 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                      />{" "}
                     <FaShareFromSquare style={{marginRight:"5px"}} /> {user.name}
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
                    {user.comment}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-end mr-8">
                <GrStatusGood style={{marginRight:"3px", marginTop:"2px", Color:"green"}} />  {user.status}
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className="flex text-[#161616] justify-center font-medium py-2 px-3 rounded-full text-xs">
                    {user.date}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
     
        <div className="flex justify-between lg:border py-2 2xl:border-none lg:mb-2 2xl:mb-1 items-center px-2  rounded-md ">
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
  
    
    )
}