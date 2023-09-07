import { Typography, styled } from "@mui/material";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import React, { useContext } from "react";
import { passengerContext } from "../App";


const StyledBox = styled(Box)`
  padding: 1rem;
  width: 100%;
  border: 1px solid #5e4af0;
  display:flex;
  justify-content:space-between
`;
export default function Passenger() {
  const passengerList = useContext(passengerContext)

  
  return (
    <Box
      sx={{
        height: "100%",
        width: "40%",
        margin: 1,
      }}
    >
      <Box>
        <AirplanemodeActiveIcon
          sx={{
            fontSize: "medium",
            transform: "rotate(90deg)",
            display: "inline-block",
          }}
        />
        <Typography
          variant="h6"
          display={"inline-block"}
          mx={1}
          fontWeight={600}
        >
          Select Meal
        </Typography>
      </Box>
      <StyledBox>
        <div>
          <Typography variant="h6">Riga - St Petersburg</Typography>
          <Typography variant="p">Flight Duration - 3hrs</Typography>
        </div>
        <KeyboardArrowDownIcon onClick={() => {}} />
      </StyledBox>
      <StyledBox>
        <div>Passenger1</div>
        <Typography variant="p">select Meal</Typography>
      </StyledBox>
      <StyledBox>
        <div>Passenger1</div>
        <Typography variant="p">select Meal</Typography>
      </StyledBox>
      <Box sx={
        {
          display: "flex",
          justifyContent: "space-between",
          
          padding:'1rem'
        }
      }>
        <Box fontSize={'.7rem'}>Total Fee of passengers</Box>
        <Typography fontWeight={600}>
          {(passengerList.passengers.sum).toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
}
