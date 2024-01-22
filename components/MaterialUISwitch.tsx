import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 170, // 스위치의 전체 너비를 171px로 설정
  height: 32,
  padding: 1.5,
  '& .MuiSwitch-switchBase': {
    padding:1,
    
    '&.Mui-checked': {
      transform: 'translateX(81px)',
      '& .MuiSwitch-thumb': {
        '&::after': {
          content: '"Store"', // 체크된 상태에서는 'Store'로 표시
          position: 'absolute',
          color: '#fff',
          left:'50%',
          top:'50%',
          transform: 'translate(-50%, -50%)',
        },
      },
      '& + .MuiSwitch-track': {
        backgroundColor:"rgba(71,71,71, 0.3)",
        border:"2px solid rgba(255,255,255,0.2)",
        
      },
    },
    '& .MuiSwitch-thumb': {
      '&::after': {
        content: '"Online"', // 체크되지 않은 상태에서는 'Online'으로 표시
        position: 'absolute',
        color: '#fff',
        left:'50%',
        top:'50%',
        transform: 'translate(-50%, -50%)',
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
    backgroundColor:"rgba(71,71,71, 0.3)",
    border:"2px solid rgba(255,255,255,0.2)",
    width: 170,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      
    },
    '&::before': {
      left: 20,
      color:"#fff",
      content: '"Online"',
    },
    '&::after': {
      right: 20,
      color:"#fff",
      content: '"Store"',
    },
  },
}));

export default function CustomizedSwitches() {
  const [checked, setChecked] = useState(false);

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