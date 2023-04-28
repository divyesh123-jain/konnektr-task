import React from 'react'
import {BsSearch} from 'react-icons/bs'
const SideBar: React.FC = () => {
    return (
       <>

       
<div className="absolute top-[40px] left-[1100px] w-[310px] h-[46px] text-sm">
            
            <form  action='' >
              <div className='relative flex items-center text-gray-400'>
                 <BsSearch className='absolute ml-3' />
                 <input 
                 type='text'
                 name='serach'
                 placeholder='Search'
                 autoComplete='off'
                 aria-label='Search'
                 className='pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-500 focus:ring-2 ' 
                  />
              </div>
            </form>       
            </div>  

       
       <div className="absolute top-[98px] left-[1090px] rounded-18xl bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-100 via-violet-300 to-sky-100  box-border w-[310px] h-[612px] border-[3px] border-solid border-gray-100 rounded-3xl"  />
      <div className="absolute top-[111px] left-[947px] w-[60px] h-7 text-lg">
        <b className="absolute top-[0px] left-[190px] flex items-center w-[60px] h-7">
          Chats
        </b>
       
      </div>





       </>
    )
}

export default SideBar