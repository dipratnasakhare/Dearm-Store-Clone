import { useState } from "react";
import SecF from "./Component/SecF" 
import { Box, Divider, SimpleGrid } from "@chakra-ui/react"
import CartFooterBox from "./Component/CartFooterBox/CartFooterBox";

function Footer() {



    return (
      <Box>
       <SecF/>
        <CartFooterBox/>
      </Box >
    );
  }
  
  export default Footer;
  