import {BsQuestionCircle, BsFillChatLeftTextFill} from "react-icons/bs";
import user from "../components/Assets/user.png";
import Image from 'next/image';


const Header = () => {
  return (
    <div className='flex h-20 w-full justify-between items-center'>
        <div className="flex mx-10 flex-1">
            <div className="flex bg-[#6528F7] rounded-md text-lg h-10 w-10 font-bold justify-center items-center">K</div>
            <div className="flex flex-col mx-3">
                <p className="flex font-bold">Kentron</p>
                <p className="flex -mt-0 text-sm">Admin Center</p>
            </div>
        </div>
        <div className="flex flex-1 justify-end h-full mx-5 items-center ">
            <span className="flex mx-5">
                <BsQuestionCircle size={25} />
            </span>
            <span className="flex">
                <BsFillChatLeftTextFill size={23} />
            </span>
            <span className="flex">
                <div className="flex h-8 rounded-md justify-center items-center mx-5 w-8 bg-gray-500">
                <Image src={user} width={30}  alt="none" className='adds'/>

                </div>
            </span>
        </div>
    </div>
  )
}

export default Header