"use client";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Header from "../Admin/header";
import {BsPersonFillAdd} from "react-icons/bs";
import SideBar from "../Admin/sidebar";
import { useState } from "react";
import UserPopup from "../Admin/popups/userpop";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 330 },
  { field: "email", headerName: "Email", width: 330 },
  { field: "role", headerName: "Role", width: 330 },
  { field: "action", headerName: "Action", width: 330 }
];

const rows = [
  { id: 1, name: "username", email: "user@example.com", role: "Member", action:"Deactivate"},
  { id: 2, name: "username", email: "user@example.com", role: "Member", action:"Deactivate"},
  { id: 3, name: "username", email: "user@example.com", role: "Member", action:"Deactivate"},
  { id: 4, name: "username", email: "user@example.com", role: "Member", action:"Deactivate"},
];

const ActiveUsers = () => {

  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
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
              Active Users
              <button onClick={openPopup} className="flex bg-[#6528F7] text-white font-bold text-sm justify-center items-center w-[8vw] h-10 rounded-lg">
               <BsPersonFillAdd size={20} />
               <div className="flex mx-3">Add User</div>
              </button>
            </span>
            {isPopupVisible && <UserPopup onClose={closePopup} />}

            <div className="flex items-center w-[95%] mx-10 justify-center h-[40vh] bg-white">
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;