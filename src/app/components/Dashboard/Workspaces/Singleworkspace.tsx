"use client";
import React, {useRef, useState} from 'react';
import Image from 'next/image';
import "./singleworkspace.css";
import { GoHome } from "react-icons/go";
import { BsDiagram2 } from "react-icons/bs";
import { MdContentPasteSearch,MdOutlineSettings,MdOutlineCalendarMonth} from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import bodylogo from "../../Assets/bogylogo.png";
import share from "../../Assets/share.png";
import edit from "../../Assets/Edit.png";
import close from "../../Assets/close.png";

import slack from "../../Assets/slack.png";
import google from "../../Assets/google.png";
import jira from "../../Assets/jira.png";
import confluence from "../../Assets/confluence.png";
import microsoft from "../../Assets/microsoft.png";


const Singleworkspace = () => {
  const [home, sethome] = useState(true);
  const [datasource, setdatasource] = useState(false);
  const [searches, setsearches] = useState(false);
  const [exports, setexports] = useState(false);
  const [setting, setsetting] = useState(false);

  const homeopen = ()=>{
    sethome(true);
    setdatasource(false);
    setsearches(false);
    setexports(false);
    setsetting(false);
  }
  const datasourceopen = ()=>{
    sethome(false);
    setdatasource(true);
    setsearches(false);
    setexports(false);
    setsetting(false);
  }
  const searchesopen = ()=>{
    sethome(false);
    setdatasource(false);
    setsearches(true);
    setexports(false);
    setsetting(false);
  }
  const exportopen = ()=>{
    sethome(false);
    setdatasource(false);
    setsearches(false);
    setexports(true);
    setsetting(false);
  }
  const settingopen = ()=>{
    sethome(false);
    setdatasource(false);
    setsearches(false);
    setexports(false);
    setsetting(true);
  }
  return (
    <section className='singleworkspace'>
        <h1>Workspace Name</h1>
        <div className="workspaceheaders">
            <div className={(home)?"headitems headbold":"headitems"} onClick={()=>{homeopen()}}>
              <GoHome className='headicons'/>
              <p>Home</p>
            </div>
            <div className={(datasource)?"headitems headbold":"headitems"}  onClick={()=>{datasourceopen()}}>
              <BsDiagram2 className='headicons'/>
              <p>Data Source</p>
            </div>
            <div className={(searches)?"headitems headbold":"headitems"}  onClick={()=>{searchesopen()}}>
              <MdContentPasteSearch className='headicons'/>
              <p>Searches</p>
            </div>
            <div className={(exports)?"headitems headbold":"headitems"}  onClick={()=>{exportopen()}}>
              <PiExportBold className='headicons'/>
              <p>Export</p>
            </div>
            <div className={(setting)?"headitems headbold":"headitems"}  onClick={()=>{settingopen()}}>
              <MdOutlineSettings className='headicons'/>
              <p>Setting</p>
            </div>
        </div>
        {(home)?<Home/>:<></>}
        {(datasource)?<DataSource/>:<></>}
        {(searches)?<Searches/>:<></>}
        {(exports)?<Export/>:<></>}
        {(setting)?<Setting/>:<></>}
        </section>
  )
}




const DataSource = () => {
  return (
    <div className='datasource'>
      <div className='enterprise'>
        <h1>Enterprise</h1>
        <div className="enterpriseproducts">
          <div className='product'>
          <Image src={google} width={60} height={60} style={{'width':'auto'}} alt="none" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Searches= () => {
  return (
    <div>Searches</div>
  )
}
const Export = () => {
  return (
    <div>Export</div>
  )
}
const Setting = () => {
  return (
    <div>Setting</div>
  )
}






const Home = () => {
  const [editbox, seteditbox] = useState(false);
  const [workspacename, setworkspacename] = useState('Workspace Name');
  const [status, setstatus] = useState('Active');
  const [description, setdescription] = useState(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages`);
  const workspace = useRef(null);
  const stats = useRef(null);
  const desc = useRef(null);
  const editboxopen = ()=>{
    seteditbox(true);
  }
  const editboxclose = ()=>{
    seteditbox(false);
  }
  const save = (a: any,b: any,c: any)=>{
    setworkspacename(a.current.value);
    setdescription(c.current.value);
    setstatus(b.current.value);
    a.current.value='';
    b.current.value='';
    c.current.value='';
    seteditbox(false);
  }
  return (
    <div>
      <div className="homebody">
          <div className="homebodyheader">
            <div className="headtexts">
              <Image src={bodylogo} width={60} height={60} style={{'width':'auto'}} alt="none" />
              <div className="headbodytexts">
                <h1>{workspacename}<span>{status}</span></h1>
                <p><MdOutlineCalendarMonth className="icons"/> Created Date : <span>12/05/2023</span> | <Image src={share} width={15} height={15} alt="none" className='icon' /> Shared Externally : <span>Yes</span></p>
              </div>
            </div>
            <div className="headedit"> <Image src={edit} width={60} height={15} alt="none" className='edits' onClick={()=>{editboxopen()}}/></div>
          </div>
          <p className='homebodytxt'>{description}</p>
        </div>

        
        <div className={(editbox)?"workspaceedit":"createworkspacehid"}>
        <div className="editbox">
          <div className="createhead">
            <h1>Edit Workspace</h1>
            <Image src={close} width={20} height={20} alt="none" className='icon' onClick={()=>{editboxclose()}}/>
          </div>

          <div className="createboxinputs">
            <p>Name <span>| Required</span></p>
            <input type="text" placeholder='Enter workspace name' ref={workspace}/>
          </div>

          <div className="createboxinputs">
            <p>Description</p>
            <textarea rows={4} placeholder='Enter description' ref={desc}/>
          </div>

          <div className="createboxinputs">
            <p>Status <span>| Required</span></p>
            <select name="status" id="status" ref={stats}>
              <option value="active">Active</option>
              <option value="noactive">Not active</option>
            </select>
          </div>

          <div className="createboxbtn">
            <button className='savebtn' onClick={()=>{save(workspace,stats,desc)}}>Save</button>
            <button onClick={()=>{editboxclose()}}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Singleworkspace