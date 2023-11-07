"use client";
import React,{useState} from 'react';
import slack from "../../../Assets/slack.png";
import google from "../../../Assets/google.png";
import jira from "../../../Assets/jira.png";
import confluence from "../../../Assets/confluence.png";
import microsoft from "../../../Assets/microsoft.png";
import arrowbtn from "../../../Assets/arrowbtn.png";
import imports from "../../../Assets/import.png";
import Image from 'next/image';
import "./datasource.css";
import close from "../../../Assets/close.png";
import {MdOutlinePersonAddAlt } from "react-icons/md";
import { TbTopologyStar3 } from "react-icons/tb";
import { BiGroup, BiSend, BiSync, } from "react-icons/bi";
import { BsUnity} from 'react-icons/bs';
import radioicon from "../../../Assets/workspaces.png";
import { CiUser } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";


export const DataSource = () => {
  const [slackbox, setslackbox] = useState(false);
  const slackboxopen = ()=>{
    setslackbox(true);
  }
  const slackboxclose = ()=>{
    setslackbox(false);
  }
  const [roadicon, setroadicon] = useState(0);

  return (
      <div className='datasource'>
        <div className='enterprise'>
          <h1>Enterprise Sources</h1>
          <div className="enterpriseproducts">
          <div className='product'>
              <Image src={slack} width={100} alt="none" className='dataicons'/>
              <p>Slack Enterprise</p>
              <button onClick={()=>{slackboxopen()}}><Image src={arrowbtn} width={15}  alt="none" className='connectbtnicon'/>Connect</button>
            </div>
            <div className='product'>
              <Image src={google} width={100} alt="none" className='dataicons'/>
              <p>Google Workspace</p>
              <button><Image src={arrowbtn} width={15}   alt="none" className='connectbtnicon'/>Connect</button>
            </div>
            <div className='product'>
              <Image src={jira} width={100} alt="none" className='dataicons'/>
              <p>Jira</p>
              <button><Image src={arrowbtn} width={15}   alt="none" className='connectbtnicon'/>Connect</button>
            </div>
            <div className='product'>
              <Image src={confluence} width={100} alt="none" className='dataicons'/>
              <p>Confluence</p>
              <button><Image src={arrowbtn} width={15}   alt="none" className='connectbtnicon'/>Connect</button>
            </div>
            <div className='product'>
              <Image src={microsoft} width={100} alt="none" className='dataicons'/>
              <p>Microsoft 365</p>
              <button><Image src={arrowbtn} width={15}   alt="none" className='connectbtnicon'/>Connect</button>
            </div>
          </div>
        </div>
  
        <div className='enterprise'>
          <h1>Non-Enterprise Sources</h1>
          <div className="enterpriseproducts">
          <div className='product'>
              <Image src={slack} width={100} alt="none" className='dataicons'/>
              <p>Slack Enterprise</p>
              <button><Image src={imports} width={15}   alt="none" className='btnimporticon'/>Import</button>
            </div>
            <div className='product'>
              <Image src={google} width={100} alt="none" className='dataicons'/>
              <p>Google Workspace</p>
              <button><Image src={imports} width={15}   alt="none" className='btnimporticon'/>Import</button>
            </div>
            <div className='product'>
              <Image src={jira} width={100} alt="none" className='dataicons'/>
              <p>Jira</p>
              <button><Image src={imports} width={15}   alt="none" className='btnimporticon'/>Import</button>
            </div>
            <div className='product'>
              <Image src={confluence} width={100} alt="none" className='dataicons'/>
              <p>Confluence</p>
              <button><Image src={imports} width={15}   alt="none" className='btnimporticon'/>Import</button>
            </div>
            <div className='product'>
              <Image src={microsoft} width={100} alt="none" className='dataicons'/>
              <p>Microsoft 365</p>
              <button><Image src={imports} width={15}   alt="none" className='btnimporticon'/>Import</button>
            </div>
          </div>
        </div>














        <section className={(slackbox)?'slackenterprise':'slackenterprise slackhid'}>
          <div className="enterprisecont">
            <div className="SEheadercont">
              <div className="SEheader">
                <Image src={slack} width={55} alt="none" />
                <p>Slack Enterprise</p>
              </div>
              <Image src={close} width={12} alt="none"  className='close' onClick={()=>{slackboxclose()}} />
            </div>
            <div className="enterpriseroadmap">
              <div className="roadmapicon">
                <div className="roadiconcont">
                  <BiSend className="purbg"/>
                  <p>Connect</p>
                </div>
                <div className='purline1'></div>
              </div>

              <div className="roadmapicon">
                <div className="roadiconcont">
                  <BiSync className="whitebg"/>
                  <p>Synchronization</p>
                </div>
                <div className='purline2'></div>
              </div>

              <div className="roadmapicon">
                <div className="roadiconcont">
                  <BsUnity className="whitebg"/>
                  <p>Select Component</p>
                </div>
                <div className='purline3'></div>
              </div>

              <div className="roadmapicon">
                <div className="roadiconcont">
                  <MdOutlinePersonAddAlt className="whitebg"/>
                  <p>Add User</p>
                </div>
                <div className='purline4'></div>
              </div>

              <div className="roadmapicon">
                <div className="roadiconcont">
                  <TbTopologyStar3 className="whitebg"/>
                  <p>Add Channels</p>
                </div>
              </div>
            </div>

            <div className={(roadicon===0)?'':'closehid'}><ConnectBody/></div>
            <div className={(roadicon===1)?'':'closehid'}><Synchronization/></div>
            <div className={(roadicon===2)?'':'closehid'}><Selectcomponent/></div>
            <div className={(roadicon===3)?'':'closehid'}><Adduser/></div>
            <div className={(roadicon===4)?'':'closehid'}><Addchannel/></div>

            <div className="Enterprisebody">
                <div className="createboxbtn slackenterprisebtn">
                  <button onClick={()=>{slackboxclose()}} className={(roadicon>0)?'closehid':''}>Close</button>
                  <button onClick={()=>{setroadicon(roadicon-1)}} className={(roadicon>0)?'openback':'closeback'}>Back</button>
                  <button className='savebtn nextbtn' onClick={()=>{setroadicon(roadicon+1)}}>Next</button>
                </div>
             
            </div>
          </div>
        </section>
        <MdOutlinePersonAddAlt/>
      </div>
    )
  }








  const Synchronization = ()=>{
    return(
      <div className="Synchronization">
        <p>Select workspaces</p>
        <div className='radiobuttons'>
           <input type="radio" name="workspace"/>
           <Image src={radioicon} width={14} alt="none" className='radioicons'/>
           <p>Workspace 1</p>
        </div>
        <div className='radiobuttons'>
           <input type="radio" name="workspace"/>
           <Image src={radioicon} width={14} alt="none" className='radioicons' />
           <p>Workspace 2</p>
        </div>
        <div className='radiobuttons'>
           <input type="radio" name="workspace"/>
           <Image src={radioicon} width={14} alt="none" className='radioicons'/>
           <p>Workspace 3</p>
        </div>

        <p className='checkboxheader'>Select additional channels types</p>
        <div className='checkbox'>
           <input type="checkbox"/>
           <p>Include multi-workspace channels</p>
        </div>
        <div className='checkbox'>
           <input type="checkbox"/>
           <p>Include slack connect channels</p>
        </div>
      </div>
    )
  }

  const Selectcomponent = ()=>{
    return(
      <div className="component">
        <p className='checkboxheader'>Select components</p>
        <div className='checkbox'>
           <input type="checkbox"/>
           <CiUser className="checkicons"/>
           <p>Direct messages</p>
        </div>
        <div className='checkbox'>
           <input type="checkbox"/>
           <BiGroup className="checkicons"/>
           <p>Group messages</p>
        </div>
        <div className='checkbox'>
           <input type="checkbox"/>
           <AiOutlineLock className="checkicons"/>
           <p>Private channels</p>
        </div>
        <div className='checkbox'>
           <input type="checkbox"/>
           <p>#</p>
           <p>Public channels</p>
        </div>
      </div>
    )
  }

  const Adduser = ()=>{
    return(
      <div className="Adduser">
        Add User
      </div>
    )
  }

  const Addchannel = ()=>{
    return(
      <div className="Addchannel">
        Add Channel
      </div>
    )
  }

  const ConnectBody = ()=>{
    return(
      <>
      <div className="createboxinputs">
                <p>Name <span>| Required</span></p>
                <input type="text" placeholder='Enter workspace name'/>
              </div>
              <div className="createboxinputs">
                <p>Syncronization mode <span>| Required</span></p>
                <select name="status" id="status">
                  <option value="">Select Mode</option>
                  <option value="mode1">Not active mode</option>
                  <option value="mode1">Active mode</option>
                </select>

                <div className="datecont">
                    <div className="createboxinputs">
                      <p>From Date <span>| Required</span></p>
                      <input type="text" placeholder='Select date'/>
                    </div>
                    <div className="createboxinputs">
                      <p>To Date <span>| Required</span></p>
                      <input type="text" placeholder='Select date'/>
                    </div>
                </div>
                </div>
      </>
    )
  }