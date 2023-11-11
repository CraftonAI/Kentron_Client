"use client";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Header from "../Admin/header";
import {BsPersonFillAdd} from "react-icons/bs";
import SideBar from "../Admin/sidebar";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 330 },
  { field: "email", headerName: "Email", width: 330 },
  { field: "signin", headerName: "Sign-in Status", width: 330 },
  { field: "action", headerName: "Action", width: 330 }
];

const rows = [
  { id: 1, name: "username", email: "user@example.com", signin: "12/02/2023 11:00 AM", action:"Deactivate"},
  { id: 2, name: "username", email: "user@example.com", signin: "12/02/2023 11:00 AM", action:"Deactivate"},
  { id: 3, name: "username", email: "user@example.com", signin: "12/02/2023 11:00 AM", action:"Deactivate"},
  { id: 4, name: "username", email: "user@example.com", signin: "12/02/2023 11:00 AM", action:"Deactivate"},
];

const ActiveGuest = () => {
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
            <span className="flex h-[8vh] font-bold items-center mx-9 text-xl">
              Guest Users
            </span>
            <div className="flex items-center w-[95%] mx-10 justify-center h-[40vh] bg-white">
              <DataGrid
               className="flex font-semibold"
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

export default ActiveGuest;