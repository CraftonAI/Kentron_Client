"use client";
import Header from "../Admin/header";
import {BsPersonFillAdd} from "react-icons/bs";
import SideBar from "../Admin/sidebar";


const ActiveGuest = () => {
  return (
    <div className="flex text-black flex-col bg-[#ede4ff] h-[100vh] justify-between w-full">
      <div className="flex h-20 bg-black text-white">
        <Header />
      </div>
      <div className="flex w-full flex-1">
        <div className="flex w-[20%] xl:w-[16%]">
          <SideBar />
        </div>
        <div className="flex flex-col flex-1">
         <div className="flex h-20 w-ful justify-between items-center mx-5">
            <div className="flex text-xl font-bold">Guest Users</div>
         </div>
         <div className="flex w-full h-full">
         <div className="w-full mx-5">
            <div className="flex flex-col w-full">
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <div className="inline-block w-full align-middle">
                  <div className="overflow-hidden w-full">
                    <table className="w-full divide-y bg-white">
                      <thead className="bg-white">
                        <tr>
                          <th scope="col" className="p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-all"
                                type="checkbox"
                                className="w-4 h-4"
                              />
                              <label htmlFor="checkbox-all" className="sr-only">
                                checkbox
                              </label>
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-sm font-medium text-left"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-sm font-medium text-left"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-sm font-medium text-left"
                          >
                            Sign-in status
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-sm font-medium tracking-wider text-left"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y text-black">
                        <tr className="text-black">
                          <td className="p-4 w-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-1"
                                type="checkbox"
                                className="w-4 h-4"
                              />
                              <label
                                htmlFor="checkbox-table-1"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium ">
                            User Name
                          </td>
                          <td className="py-4 px-6 text-xs font-medium ">
                            example@gmail.com
                          </td>
                          <td className="py-4 px-6 text-sm font-medium">
                            12/02/2023 11:00 Am
                          </td>
                          <td className="py-4 px-6 text-sm font-medium ">
                            Deactivate
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 w-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-2"
                                type="checkbox"
                                className="w-4 h-4 rounded"
                              />
                              <label
                                htmlFor="checkbox-table-2"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium ">
                            User Name
                          </td>
                          <td className="py-4 px-6 text-xs font-medium">
                            example@gmail.com
                          </td>
                          <td className="py-4 px-6 text-sm font-medium">
                            12/02/2023 11:00 Am
                          </td>
                          <td className="py-4 px-6 text-sm font-medium">
                            Deactivate
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 w-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-3"
                                type="checkbox"
                                className="w-4 h-4"
                              />
                              <label
                                htmlFor="checkbox-table-3"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium ">
                            User Name
                          </td>
                          <td className="py-4 px-6 text-xs font-medium">
                            example@gmail.com
                          </td>
                          <td className="py-4 px-6 text-sm font-medium">
                            12/02/2023 11:00 Am
                          </td>
                          <td className="py-4 px-6 text-sm font-medium">
                            Deactivate
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 w-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-4"
                                type="checkbox"
                                className="w-4 h-4"
                              />
                              <label
                                htmlFor="checkbox-table-4"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium ">
                            User Name
                          </td>
                          <td className="py-4 px-6 text-xs font-medium ">
                            example@gmail.com
                          </td>
                          <td className="py-4 px-6 text-sm font-medium">
                            12/02/2023 11:00 Am
                          </td>
                          <td className="py-4 px-6 text-sm font-medium">
                            Deactivate
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default ActiveGuest;
