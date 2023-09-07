import React from 'react'
import MenuCard from './MenuCard'
import { Divider } from '@mui/material';

export default function Mainmenu({mealsForCurrPage,handlePassenger}) {
  
  return (
    <div>
      <Divider/>
      {mealsForCurrPage.map((ele) => {
        return <MenuCard
          key={ele.id}
          item={ele}
          handlePassenger={handlePassenger} />;
      })}
    </div>
  );
}
