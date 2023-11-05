"use client";
import React from 'react';
import slack from "../../../Assets/slack.png";
import google from "../../../Assets/google.png";
import jira from "../../../Assets/jira.png";
import confluence from "../../../Assets/confluence.png";
import microsoft from "../../../Assets/microsoft.png";
import arrowbtn from "../../../Assets/arrowbtn.png";
import imports from "../../../Assets/import.png";
import Image from 'next/image';
import "./datasource.css";


export const DataSource = () => {
    return (
      <div className='datasource'>
        <div className='enterprise'>
          <h1>Enterprise Sources</h1>
          <div className="enterpriseproducts">
          <div className='product'>
              <Image src={slack} width={100} alt="none" className='dataicons'/>
              <p>Slack Enterprise</p>
              <button><Image src={arrowbtn} width={15}  alt="none" className='connectbtnicon'/>Connect</button>
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
      </div>
    )
  }