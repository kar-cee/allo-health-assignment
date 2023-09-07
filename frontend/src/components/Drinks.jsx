import React, { useState,useContext } from "react";
import { styled } from "@mui/system";
import { passengerContext} from "../App";

import {
  Button,
  Typography,
  CardMedia,
  Box,
  Stack,
} from "@mui/material";
    
const StyledCardmedia = styled(CardMedia)`
  width: 50px; 
  height: 100px; 
  margin:5px;
`;



export default function Drinks({ availableDrinks, handleDrinkSelection, totalCost,mealId }) {
  const passengerList = useContext(passengerContext);
  const [select, setselect] = useState('select')

  const mealSelectionHandle = () => {
    if (select === 'select') {
      let temp = passengerList.passengers.tempMeal;
      temp.push(mealId);
      passengerList.setPessengers((pre) => {
        return {
          tempMeal: temp,
          passenger1: [],
          passenger2: [],
          sum: pre.sum + totalCost
        };
      });
      setselect("cancel")
    } else {
      let temp = passengerList.passengers.tempMeal.filter((ele) => {
        return ele !== mealId
      })
      passengerList.setPessengers((pre) => {
        return {
          tempMeal: temp,
          passenger1: [],
          passenger2: [],
          sum: pre.sum - totalCost,
        }
      });
       
      setselect("select")
    }
    //   let s = 0;
    // passengerList.passengers.tempMeal.forEach((sMeal) => {
    //   menuList.forEach((meal) => {
    //     if (meal.id === sMeal) {
    //       s += meal.price;
    //       console.log(meal.id)
          
    //     } else { 
    //       let i = 0;
    //       while (true) {
    //         if (meal.drinks[i].id === sMeal) {
    //           s += meal.drinks[i].price;
    //           break;
    //         }
    //         i++;
    //       }
    //     }
    //   });
      
    //   passengerList.setPessengers((pre) => {
    //     return {
    //       tempMeal: pre.tempMeal,
    //       passenger1: [],
    //       passenger2: [],
    //       sum: pre.sum + s.toFixed(2),
    //     };
    //   });

    // });
    
  };
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Stack flexDirection="row">
        {availableDrinks.map((drink) => (
          <>
            <StyledCardmedia
              component="img"
              alt="drink"
              key={drink.id}
              image={drink.img}
              onClick={() => {
                handleDrinkSelection(drink);
              }}
            />
          </>
        ))}
      </Stack>
      <Box>
        <Typography>${totalCost}</Typography>
        <Button variant="outlined" onClick={() => {mealSelectionHandle()}}>
          {select}
        </Button>
      </Box>
    </Box>
  );
}
