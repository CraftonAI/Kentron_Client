import React, { useState } from 'react';
import "./dashboard.css";
import Navbar from '../Navbar/page';
import Sidebar from '../Sidebar/page';

const page = () => {
  return (
    <main className='dashboard'>
        <Navbar/>
        <div className="dashboardbody">
           <Sidebar/>
           <div className="contentbox"></div>
        </div>
    </main>
  )
}

export default page