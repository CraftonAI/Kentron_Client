import React from 'react';
import "./dashboard.css";
import Navbar from '../Navbar/page';
import Sidebar from '../Sidebar/page';
// import Allworkspace from "./Allworkspaces/page";
import Singleworkspace from './Workspaces/Singleworkspace';

const page = () => {
  return (
    <main className='dashboard'>
        <Navbar/>
        <div className="dashboardbody">
           <Sidebar/>
           <div className="contentbox">
            {/* <Allworkspace/> */}
            <Singleworkspace/>
           </div>
        </div>
    </main>
  )
}

export default page