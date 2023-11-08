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
import { BsArchive, BsUnity} from 'react-icons/bs';
import radioicon from "../../../Assets/workspaces.png";
import { CiUser } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";


export const DataSource = () => {
  const [slackbox, setslackbox] = useState(false);
  const [roadicon, setroadicon] = useState(0);
  const slackboxopen = ()=>{
    setslackbox(true);
  }
  const slackboxclose = ()=>{
    setslackbox(false);
  }
  const submit = () =>{
    setslackbox(false);
    setroadicon(0);
  }
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
                  <BiSend className={(roadicon===0)?'purbg':(roadicon>0?'greenbg':'whitebg')}/>
                  <p className={(roadicon===0)?'purptext':(roadicon>0?'greentext':'whitetext')}>Connect</p>
                </div>
                <div className={(roadicon===0)?'purline1 purpline':(roadicon>0?'purline1 greenline':'purline1 whiteline')}></div>
              </div>

              <div className="roadmapicon">
                <div className="roadiconcont">
                  <BiSync className={(roadicon===1)?'purbg':(roadicon>1?'greenbg':'whitebg')}/>
                  <p className={(roadicon===1)?'purptext':(roadicon>1?'greentext':'whitetext')}>Synchronization</p>
                </div>
                <div className={(roadicon===1)?'purline2 purpline':(roadicon>1?'purline2 greenline':'purline2 whiteline')}></div>
              </div>

              <div className="roadmapicon">
                <div className="roadiconcont">
                  <BsUnity className={(roadicon===2)?'purbg':(roadicon>2?'greenbg':'whitebg')}/>
                  <p className={(roadicon===2)?'purptext':(roadicon>2?'greentext':'whitetext')}>Select Component</p>
                </div>
                <div  className={(roadicon===2)?'purline3 purpline':(roadicon>2?'purline3 greenline':'purline3 whiteline')}></div>
              </div>

              <div className="roadmapicon">
                <div className="roadiconcont">
                  <MdOutlinePersonAddAlt className={(roadicon===3)?'purbg':(roadicon>3?'greenbg':'whitebg')}/>
                  <p className={(roadicon===3)?'purptext':(roadicon>3?'greentext':'whitetext')}>Add User</p>
                </div>
                <div className={(roadicon===3)?'purline4 purpline':(roadicon>3?'purline4 greenline':'purline3 whiteline')}></div>
              </div>

              <div className="roadmapicon">
                <div className="roadiconcont">
                  <TbTopologyStar3 className={(roadicon===4)?'purbg':(roadicon>4?'greenbg':'whitebg')}/>
                  <p className={(roadicon===4)?'purptext':(roadicon>3?'greentext':'whitetext')}>Add Channels</p>
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
                  <button className={(roadicon<4)?'savebtn nextbtn':'closehid'} onClick={()=>{setroadicon(roadicon+1)}}>Next</button>
                  <button className={(roadicon===4)?'savebtn nextbtn':'closehid'} onClick={()=>{submit()}}>Submit</button>
                </div> 
            </div>
          </div>
        </section>
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
           <div className="createboxinputs">
              <p>Add User <span>| Required</span></p>
              <input type="email" placeholder='user@example.com'/>
              <div className='addusertext'>Enter email address of user</div>
           </div>
      </div>
    )
  }





const Addchannel = ()=>{
  return(
    <div className="Addchannel">
      <div className="createboxinputs">
            <p>Filter</p>
            <input type="email" placeholder='Search Channel name'/>
            <div className="filterhead">
               <div className='addusertext'>Search channels to sync</div>
               <div className='channeltypes'>
                  <div className="channel1">
                    <span>#</span>Public
                  </div>
                  <div className="channel1">
                    <span><AiOutlineLock/></span>Private
                  </div>
                  <div className="channel1">
                    <span><BsArchive/></span>Archieved
                  </div>
               </div>
            </div>
          </div>
          <div className='checkbox'>
            <input type="checkbox"/>
            <p>Select All</p>
          </div>
          <div className='checkbox'>
            <input type="checkbox"/>
            <p>#</p>
            <p>Channel01</p>
          </div>
          <div className='checkbox'>
            <input type="checkbox"/>
            <AiOutlineLock className="checkicons"/>
            <p>Channel02</p>
          </div>
          <div className='checkbox'>
            <input type="checkbox"/>
            <BsArchive className="checkicons"/>
            <p>Channel03</p>
          </div>
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