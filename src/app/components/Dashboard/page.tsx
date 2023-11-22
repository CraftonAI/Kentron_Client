'use client';
import React, {useState} from 'react';
import "./dashboard.css";
import Navbar from '../Navbar/page';
import Sidebar from '../Sidebar/Sidebar';
import AllWorkspace from "../AllWorkspaces/page";
import Singleworkspace from './Workspaces/WorkspaceHeaders/Singleworkspace';

const Page = () => {
  const [currentView, setCurrentView] = useState('singleWorkspace');

  const switchToAllWorkspace = () => {
    setCurrentView('allWorkspace');
  };

  const switchToSingleWorkspace = () => {
    setCurrentView('singleWorkspace');
  };



  return (
      <main className='dashboard'>
      <Navbar />
      <div className="dashboardbody">
        <Sidebar switchToAllWorkspace={switchToAllWorkspace} switchToSingleWorkspace={switchToSingleWorkspace} />
        <div className="contentbox">
          {currentView === 'allWorkspace' ? <AllWorkspace /> : <Singleworkspace />}
        </div>
      </div>
    </main>
  )
}

export default Page