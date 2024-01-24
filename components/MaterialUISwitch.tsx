import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 171, 
  height: 32,
  padding: 1.5,
  '& .MuiSwitch-switchBase': {
    padding:1.5,
    
    '&.Mui-checked': {
      transform: 'translateX(81px)',
      '& .MuiSwitch-thumb': {
        '&::after': {
          content: '"Store"', // 체크된 상태에서는 'Store'로 표시
          position: 'absolute',
          fontSize: '18px',
          fontWeight:"bold",
          fontFamily:"Manrope",
          color: '#fff',
          left:'50%',
          top:'56%',
          transform: 'translate(-50%, -50%)',
        },
      },
      '& + .MuiSwitch-track': {
        backgroundColor:"rgba(71,71,71, 0.3)",
        border:"2px solid rgba(255,255,255,0.4)",
        
      },
    },
    '& .MuiSwitch-thumb': {
      '&::after': {
        content: '"Online"', // 체크되지 않은 상태에서는 'Online'으로 표시
        position: 'absolute',
        color: '#fff',
        left:'50%',
        top:'58%',
        transform: 'translate(-50%, -50%)',
        fontSize:"18px",
        fontWeight:"bold",
        fontFamily:"Manrope"
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 88,
    height: 30,
    borderRadius:"16px",
    backgroundColor:"#f84040",
    border:"1px solid #f84040",
    boxShadow: 'none',
    '&::after': {
    position:'absolute',  
    transform:'translateX(-50%)',
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: "16px",
    backgroundColor:"rgba(71,71,71, 0.9)",
    border:"2px solid rgba(255,255,255,0.3)",
    width: 171,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '55%',
      transform: 'translateY(-50%)',
      
    },
    '&::before': {
      left: 20,
      fontSize:"18px",
      fontWeight:"500",
      fontFamily:"Manrope",
      color:"#b2b2b2",
      content: '"Online"',
    },
    '&::after': {
      right: 20,
      fontSize:"18px",
      fontWeight:"500",
      fontFamily:"Manrope",
      color:"#b2b2b2",
      content: '"Store"',
    },
  },
}));

export default function CustomizedSwitches() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch checked={checked} onChange={handleChange} />}
        label=""
      />
    </FormGroup>
  );
}