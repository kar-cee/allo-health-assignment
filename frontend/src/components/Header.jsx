import React, { useContext } from 'react'
import {Button,Stack} from '@mui/material';
import '../App.css'
import {menuContext} from '../App';

export default function Header({ setfilteredData }) {
  
  const data = useContext(menuContext)
  
  const filterByTag = (label) => {
    if (label === "All") {
      setfilteredData(data);
      return;
    }
    const filteredMeal = data.filter((meal) => {
      return meal.labels.includes(label);
    });
    setfilteredData(filteredMeal);
  };
  return (
    <ul>
      <Stack
        spacing={1}
        flexDirection={'row'}
        className='navBtn'
        useFlexGap={true}
        flexWrap={'wrap'}
      >
        <Button variant='outlined' onClick={() => { filterByTag('All') }}>All</Button>
        <Button variant='outlined' onClick={() => { filterByTag('chicken') }}>Chicken</Button>
        <Button variant='outlined' onClick={() => { filterByTag('pork') }}>pork</Button>
        <Button variant='outlined' onClick={() => { filterByTag('seaFood') }}>seaFood</Button>
        <Button variant='outlined'onClick={() => { filterByTag('beef') }}>beef</Button>
        <Button variant='outlined'onClick={() => { filterByTag('vegetable') }}>vegetable</Button>
        <Button variant='outlined'onClick={() => { filterByTag('breakfast') }}>breakfast</Button>
        <Button variant='outlined'onClick={() => { filterByTag('kid menu') }}>kid menu</Button>
      </Stack>
    </ul>
  )
}
