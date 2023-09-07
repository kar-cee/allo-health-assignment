import React, { useContext, useState} from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Box, Divider } from '@mui/material';
import Drinks from './Drinks';
import { passengerContext } from "../App";


const StyledFoodMenuCard = styled(Box)`
  display:flex;
  flex-direction: row;
  
  margin: 16px;
  text-align: left;
  
`;

const StyledCardMedia = styled(CardMedia)`
  max-width: 40%; 
  height: 200px; 
`;


const FoodMenuCard = ({ item }) => {
  const passengerList = useContext(passengerContext);

  const [selectedDrink, setselectedDrink] = useState("")
  const [totalCost, settotalCost] = useState(item.price);

  const handleDrinkSelection = (drink) => {
    if (selectedDrink === drink.title ) {
      settotalCost((totalCost - drink.price).toFixed(2));

      let temp = passengerList.passengers.tempMeal.filter((ele) => {
        return ele !== drink.id
      })
      passengerList.setPessengers({
        tempMeal: temp,
        passenger1: [],
        passenger2: [],
        sum: 0
      }
      )
      setselectedDrink("")
    }
    else {
      let temp = passengerList.passengers.tempMeal;
      temp.push(drink.id)
      passengerList.setPessengers({
        tempMeal: temp,
        passenger1: [],
        passenger2: [],
        sum: 0,
      });
      settotalCost((item.price + drink.price).toFixed(2));
      setselectedDrink(drink.title)
    }
  }
  return (
    <>
      <StyledFoodMenuCard>
        <StyledCardMedia component="img" alt="dfdf" image={item.img} />
        <CardContent>
          <Typography variant="" component="div">
            {item.title} + drinks
          </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            officia beatae magnam quidem?
          </Typography>
          <div
            className="item-selected"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Typography variant="">starter: {item.starter}</Typography>
            <Typography variant="">desert: {item.desert}</Typography>
            <Typography variant="">selected drink: {selectedDrink}</Typography>
          </div>
          <Drinks
            availableDrinks={item.drinks}
            handleDrinkSelection={handleDrinkSelection}
            totalCost={totalCost}
            mealId = {item.id}
          />
        </CardContent>
      </StyledFoodMenuCard>
      <Divider/>
    </>
  );
};

export default FoodMenuCard;
