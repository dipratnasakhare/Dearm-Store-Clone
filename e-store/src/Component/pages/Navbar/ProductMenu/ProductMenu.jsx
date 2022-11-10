import { Flex, Spacer, Text, Box } from "@chakra-ui/react";
import MenuButtondata from "./MenuButton"

// import MenuButon from "./Textnavdata";

let MenuData = ["Brands", "Holiday Shop",
 "Browse By", "Bestsellers",
"Skin Care", "Makeup",
"Hair Care", "Bath & Body",
"Gift & Sets", "BeautyFIX",
"Offers","New","Skin 101" ];

export default function ProductMenu() {

  return (
    <Flex
      gap="2"
      borderTop="1px solid "
      alignItems="end"
      margin="auto"
      pt="10px"
      width="100%"
    
      
    >
    
      <Box  margin="auto" gap={7} display="flex">
        {MenuData.map((ele) => MenuButtondata(ele))}
      </Box>
   
    </Flex>
  );
}