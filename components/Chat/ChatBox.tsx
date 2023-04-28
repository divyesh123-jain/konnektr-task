import React from 'react';
import { useState } from 'react';
import { GrAttachment } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { FcVideoCall } from 'react-icons/fc';
import { BiSend } from 'react-icons/bi';
import Fab from '@mui/material/Fab';
import { Avatar } from '@mui/material';
import Cardss from './Card';

const ChatBox: React.FC = () => {
  const [todos, setTodos] = React.useState({});
  const [tempText, setTempText] = React.useState<string>('');
  const [visible , setVisible] = React.useState<boolean>(false)

    const handleCall = () => {

      setVisible(true)


    }

  const addTodo = (text: string) => {
    setTodos({ ...todos, [text]: true });
    setTempText('');
  };

  React.useEffect(() => {
    console.log(todos);
  }, [todos]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tempText.trim() !== '') {
      addTodo(tempText);
      setTempText('');
    }
  };

  return (
    <>

    
      <div className="relative">
        <div className="absolute top-[85px] left-[10%] md:left-[330px] rounded-18xl bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-100 via-violet-300 to-sky-100 box-border w-[80%] md:w-[700px] h-[612px] border-[3px] border-solid border-gray-100 rounded-3xl" />
        <div className="absolute top-[568px] left-[20%] md:left-[600px] text-lg leading-[119.02%] text-black flex items-center w-[60%] md:w-[282px]">
          <ul className='text-xl'>
            {Object.entries(todos).map(([text, done]) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>

        <Cardss  isvissible={visible} />

        <div className="absolute pb-3 top-[640px] left-[14%] md:left-[424px] text-lg leading-[119.02%] text-black flex items-center w-[70%] md:w-[80px]">
          {/* Message sender */}
          <form onSubmit={sendMessage}>
            <div className="relative flex items-center text-gray-400">
              <GrAttachment className="absolute ml-3" />
              <button
                className="absolute ml-[92%] md:ml-[470px]"
                onClick={() => {
                  addTodo(tempText);
                  setTempText('');
                }}
              >
                <BiSend />
              </button>
              <input
                type="text"
                value={tempText}
                onChange={(e) => setTempText(e.target.value)}
                name="message"
                placeholder="message"
                autoComplete="off"
                aria-label="message"
                className="pr-3 pl-10 py-2 w-[80%] md:w-[500px] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-500 focus:ring-2"
              />
            </div>
          </form>
        </div>

        {/* Top bar With phone and video call */}
        <div className="absolute top-[115px] left-[10%] md:left-[380px] text-sm inline-block w-[80%] md:w-[600px]">
          <form action="">
            <div className="relative flex items-center text-gray-400">
             

              <Avatar alt="Remy Sharp" className="absolute" src="" />
              <FiPhoneCall onClick={handleCall}  className="absolute w-12 ml-[92%] md:ml-[500px] flex justify-end" /
              >
              <FcVideoCall className="absolute w-12 ml-[95%] md:ml-[540px] flex justify-end" />
              <input
                
                
                name='Divyesh'
                placeholder='Divyesh'
                autoComplete='off'
                aria-label='Divyesh'
                className='pr-3 pl-10 py-2 w-[1090px] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-500 focus:ring-2 ' 
                 />
             </div>
           </form>     
         </div>
   
   
           </div>
       </>)
   }
   
   export default ChatBox
