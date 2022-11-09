import {
  Button,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Box,
  Input
} from "@chakra-ui/react";
import img from "../../../Logo/DreamStore.png"
import ProductMenu from "./ProductMenu/ProductMenu";

export default function Navbar() {
  return (
    <div style={{ height: "8rem", border: "1px solid" }}>


      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2" display="flex" gap="10px" border="1px solid" >

{/* logo here  */}

          <Box border="1px solid" style={{width:"60px"}}>
            <img src={img} alt="" width="60px"/>
          </Box>

{/* website text here */}

         <Box border="1px solid" margin="auto">
           {/* <Center> */}
           <Heading as='h3' size='xl'>
             DreamStore
           </Heading>
           {/* </Center> */}
         </Box>

{/* search box  */}

        </Box>

        <Input placeholder='Search for a product barnd...'  />

        <Spacer />

        <ButtonGroup gap="2">

          <Button colorScheme="teal">Account</Button>
          <Button colorScheme="teal">Cart</Button>

        </ButtonGroup>  
      </Flex>



  <ProductMenu/>


    </div>
  );
}
