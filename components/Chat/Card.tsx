import React, { useState, useEffect } from 'react';
import { CgArrowsExpandLeft } from 'react-icons/cg';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RxAvatar, RxCardStackPlus } from 'react-icons/rx';
import CardActions from '@mui/material/CardActions';
import { FcVideoCall } from 'react-icons/fc';
import { FcEndCall } from 'react-icons/fc';
import { FiPhoneCall } from 'react-icons/fi';
import { Block } from '@react-three/fiber/dist/declarations/src/core/utils';
import { CSSProperties } from 'react';

interface Props {
  isvissible: boolean;
}

const Cardss: React.FC<Props> = (props: Props) => {
  const [callState, setCallState] = useState<'Ready' | 'Outgoing' | 'Ongoing' | 'Cancelled'>('Ready');
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  const { isvissible } = props;

  const [cardStyle, setCardStyle] = useState<CSSProperties>({});

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined') {
      const card = event.currentTarget.closest('.MuiCard-root');
      const cardRect = card?.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const handleMouseMove = (event: MouseEvent) => {
        const deltaX = event.clientX - mouseX;
        const deltaY = event.clientY - mouseY;
        setCardStyle({ transform: `translate(${deltaX}px, ${deltaY}px)` });
      };

      const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        setCardStyle({});
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
  };

  const handlePhoneCallButtonClick = () => {
    setCallState('Outgoing');
    setTimeout(() => {
      setCallState('Ongoing');
    }, 5000);
  };

  const handleCancelCallButtonClick = () => {
    setCallState('Cancelled');
    setTimeElapsed(0);
    setTimeout(() => {
      setCallState('Ready');
    }, 5000);
  };
console.log(props.isvissible)
  return (
    <>
    
      <Card  style={{ display :`${isvissible == true ? "block" : "none"}  `  }} sx={{ maxWidth: 325, height: 240  }} onMouseDown={handleMouseDown}>
        <CardMedia
          sx={{ height: 50 }}
         
        />

        <div className="absolute top-2 left-2">
          <CgArrowsExpandLeft className="cursor-pointer" />
        </div>

        <div className="card-content">
          <Typography gutterBottom variant="h5" component="div">
            <span className="flex justify-center pb-5">
              <RxAvatar size={50} />
            </span>
            {callState === 'Ready' && <span className="mx-16">Ready To Call</span>}
            {callState === 'Outgoing' && <span className="mx-16">Outgoing Call</span>}
            {callState === 'Ongoing' && <span className="mx-16">Ongoing Call</span>}
            {callState === 'Cancelled' && <span className="mx-16">Call Cancelled</span>}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {callState === 'Ongoing' && `Time Elapsed: ${timeElapsed} seconds`}
      </Typography>
    </div>

    <CardActions className="justify-center">
      {callState === 'Ready' && (
        <Button variant="contained" size="small" startIcon={<FiPhoneCall />} onClick={handlePhoneCallButtonClick}>
          Call
        </Button>
      )}

      {callState === 'Outgoing' && (
        <Button variant="contained" size="small" startIcon={<FcVideoCall />} disabled>
          Calling...
        </Button>
      )}

      {callState === 'Ongoing' && (
        <>
          <Button variant="contained" size="small" startIcon={<FcEndCall />} onClick={handleCancelCallButtonClick}>
            End Call
          </Button>
        </>
      )}

      {callState === 'Cancelled' && (
        <Button variant="contained" className='pb-18' size="small" startIcon={<FcEndCall />} disabled>
          Call Cancelled
        </Button>
      )}
    </CardActions>
  </Card>

 


</>
);
};

export default Cardss;
