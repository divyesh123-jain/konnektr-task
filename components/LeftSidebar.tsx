import React from 'react'
import {BiHomeAlt} from 'react-icons/bi'
import {AiFillFire} from 'react-icons/ai'
import {RiAlarmWarningLine} from 'react-icons/ri'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {BiMessageAlt} from 'react-icons/bi'

const LeftSidebar: React.FC = () => {
    return (<>
    <div className="absolute top-[204px] left-[58px] w-[209px] h-[301px]">

       
        <b  className="absolute flex text-xl top-[6px] left-[50px]">
            <BiHomeAlt  size={25} className='relative ' />
             Home
        </b>


        <b className="absolute top-[56px] left-[48px] flex font-exo-2 items-center w-[104px] h-[18px]">
          
            <span className='className="absolute flex text-xl top-[6px] left-[46px]'>
                <AiFillFire  size={25} className='relative ' />
                Konnektions
            </span>
            
        </b>


        <b className="absolute flex top-[111px] text-xl left-[46px]">
            <RiAlarmWarningLine size={25} className='relative '  />
            Communities
        </b>


        <b className="absolute flex top-[168px] text-xl left-[46px]"><BsFillBookmarkFill size={25} className='relative '  />
        Quests
        </b>


        <b className="absolute flex top-[220px] text-xl left-[46px]"><CgProfile size={25} className='relative ' />
        Store
        </b>


        <b className="absolute top-[274px] flex left-[46px] text-gray-600  ">
          <BiMessageAlt size={25} className='relative fill-[background:linear-gradient(91.4deg,_#fe06c7,_#9313f8)] [-webkit-background-clip:text] ' />
          <span className= 'text-[linear-gradient(91.4deg,_#fe06c7,_#9313f8)] text-xl ' >Messages</span> 
        </b>


        </div>
    
    
    </>
       
    )
}

export default LeftSidebar