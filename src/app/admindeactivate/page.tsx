"use client";
import Header from "../Admin/header";
import SideBar from "../Admin/sidebar";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useState } from "react";

const DeactiveUser = () => {
  const data = new Array(50).fill(null).map((_, index) => ({
    name: `User Name ${index + 1}`,
    email: `username${index + 1}@example.com`,
    deactive: "12/02/2023",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Adjust as needed

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Replace 50 with your total number of users
  const pageCount = Math.ceil(data.length / itemsPerPage);
  return (
    <div className="flex text-black flex-col bg-[#ede4ff] h-[100vh] overflow-y-scroll justify-between w-full">
      <div className="flex h-20 bg-black text-white">
        <Header />
      </div>
      <div className="flex w-full flex-1">
        <div className="flex w-[20%] xl:w-[16%]">
          <SideBar />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex h-20 w-ful justify-between items-center mx-5">
            <div className="flex text-lg font-bold">Deactivate Users</div>
          </div>
          <div className="flex w-full h-full">
            <div className="w-full mx-5">
              <div className="flex flex-col w-full">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                  <div className="inline-block w-full align-middle">
                    <div className="overflow-hidden w-full">
                      <div className="bg-white shadow-md h-full rounded my-6">
                        <table className="min-w-max bg-white w-full h-full table-auto">
                          <thead>
                            <tr className="border-b uppercase py-4 text-sm font-bold leading-normal">
                              <th className="py-3 px-6 text-left">Name</th>
                              <th className="py-3 px-6 text-left">Email</th>
                              <th className="py-3 px-6 flex mx-3 text-center">
                                Deactivated on
                              </th>
                              <th className="py-3 px-5 justify-start">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-600 text-sm font-light">
                            {currentItems.map((user, index) => (
                              <tr className="border-b" key={index}>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="font-bold">
                                      {user.name}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                  <div className="flex text-[#161616] font-medium text-xs items-center">
                                    <span>{user.email}</span>
                                  </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                  <span className="flex justify-between text-[#161616] font-medium py-2 px-3 rounded-full text-xs">
                                    {user.deactive}
}
                                    <RiArrowDropDownLine size={20} />
                                  </span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                  <div className="flex item-center justify-center mr-8">
                                    <div className="w-4 transform hover:scale-110">
                                      {/* Icon or button for action */}
                                      <button className="text-[#161616] font-medium text-xs">
                                        Deactivate
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="flex bg-white justify-between -mt-6 items-center px-5 py-5">
                        <div className="flex">
                          <span className="text-sm text-gray-700">
                            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                            {currentPage * itemsPerPage} of {data.length}{" "}
                            entries
                          </span>
                        </div>
                        <div className="flex">
                          <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                              {/* ... Pagination Buttons ... */}
                              {new Array(pageCount)
                                .fill(null)
                                .map((_, index) => (
                                  <li key={index}>
                                    <button
                                      onClick={() => paginate(index + 1)}
                                      className={`py-2 px-3 leading-tight ${
                                        currentPage === index + 1
                                          ? "text-blue-600 bg-blue-50"
                                          : "text-gray-500 bg-white"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeactiveUser;
