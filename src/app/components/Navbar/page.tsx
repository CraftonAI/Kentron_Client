import React from 'react';
import "./navbar.css";
import Image from 'next/image';
import navitem1 from "../Assets/notifications.png";
import navitem2 from "../Assets/contact_support.png";
import user from "../Assets/user.png";

const page = () => {
  return (
    <nav className='Navbar'>
        <div className="logo"><span className='logoicon'>k</span><span className='cname'>Kentron</span></div>
        <div className="items">
           <Image src={navitem2} width={30} alt="none" className='comma'/>
           <Image src={navitem1} width={20}  alt="none" className='notifications'/>
           <Image src={user} width={40}  alt="none" className='user'/>
        </div>   
    </nav>
  )
}

export default page