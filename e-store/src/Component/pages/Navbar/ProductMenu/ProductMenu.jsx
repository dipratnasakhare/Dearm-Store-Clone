import { Flex, Icon, Box, Button } from "@chakra-ui/react";
import MenuButtondata from "./MenuButton";
import { CloseIcon } from "@chakra-ui/icons";

// import MenuButon from "./Textnavdata";

let MenuData = [
  "Brands",
  "Holiday Shop",
  "Browse By",
  "Bestsellers",
  "Skin Care",
  "Makeup",
  "Hair Care",
  "Bath & Body",
  "Gift & Sets",
  "BeautyFIX",
  "Offers",
  "New",
  "Skin 101",
];

export default function ProductMenu({hamburger}) {
  return (
    <>
      <Flex
        gap="2"
        borderTop="1px solid"
        alignItems="end"
        margin="auto"
        pt="10px"
        width="100%"
        display={["none", "flex"]}
     
      >
        <Box margin="auto" gap={7} display="flex">
          {MenuData.map((ele) => MenuButtondata(ele))}
        </Box>
      </Flex>

      
       {hamburger &&  <Box 
         margin="auto"
         bg="white"
        cgap={7}
         overflow="auto"
         display={[null, "none"]}
         width={"100%"}
         pos="sticky"

         height="20rem"
         mb="20rem"
          >
          {MenuData.map((ele) => MenuButtondata(ele))}
        </Box>}

    </>
  );
}
