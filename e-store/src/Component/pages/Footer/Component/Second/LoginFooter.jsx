import {
  Box,
  Text,
  Image,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import styled from "./stylebox/LoginFooter.module.css";

export default function Footer() {

   let Servise = [
    "Help Center/FAQs",
    "Returns",
    "Shipping Information",
    "Track My Order",
    "Cookie Setting"
   ]


  

  return (
    <Box>
      <Box height="6rem" gap="5" >
          <Text>Sign up to our newsletters and receive the latest exclusive discounts and deals</Text>
           <Button _hover="none" color="white" bg="black">SIGN ME UP</Button>
          </Box>
    <Box borderTop="1px solid">

      <Box  className={styled.Login}>


        <Box>
            <Box><Text>Costomers Servise</Text></Box>
            {Servise.map((ele)=>{
              return(
                <Text>{ele}</Text>
              )
            })}
        </Box>

       
         
       
       

       
      </Box>
    </Box>
    </Box>
  );
}
