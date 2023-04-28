import Image from 'next/image'
import { Inter } from 'next/font/google'

import ChatBox from '@/components/Chat/ChatBox'
import SideBar from '@/components/SideBar'
import LeftSidebar from '@/components/LeftSidebar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>

    <div className='relative rounded-11xl  w-full min-h-screen overflow-hidden text-left text-base text-slategray-100'>
            <b className='absolute top-[33px] left-[57px] text-[20px]'>Konnektr</b>
            <div className="absolute top-[48px] left-[889.17px] w-[27.43px] h-6 overflow-hidden" />
            <div className="absolute top-[40px] left-[1100px] w-[310px] h-[46px] text-sm"></div>
            <ChatBox />
            <SideBar />
            <LeftSidebar />
            </div>
    
  </>)
}
