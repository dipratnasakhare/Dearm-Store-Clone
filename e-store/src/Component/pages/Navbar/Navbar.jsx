import {
  Button,
  Flex,
  Heading,
  ButtonGroup,
  Box,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import img from "../../../Logo/DreamStore.png"
import cart from "../../../Logo/shoppingcart.png"
import user from "../../../Logo/user.png"


import ProductMenu from "./ProductMenu/ProductMenu";
import {  SearchIcon } from "@chakra-ui/icons";


export default function Navbar() {
  return (
    <div style={{ height: "8rem", width:"100%" }}>

      <Flex width="90%" margin="auto"  minWidth="max-content" alignItems="center" gap="2">
        <Box p="2" display="flex" gap="10px"  >

{/* logo here  */}

          <Box style={{width:"60px"}}>
            <img src={img} alt="" width="60px"/>
          </Box>

{/* website text here */}

         <Box  margin="auto">
           {/* <Center> */}
           <Heading as='h3' size='xl'>
             DreamStore
           </Heading>
           {/* </Center> */}
         </Box>

{/* search box  */}

        </Box>
        <InputGroup>
    <InputLeftElement
    />
    <Input placeholder='Search for a product barnd...' />
    <InputRightElement children={<SearchIcon  />} />
  </InputGroup>

      

        <ButtonGroup gap="2"> 

        <Box gap={3} display="flex" width="100px">
          <Box>
              <img width="30px" src={user} alt="" />
          </Box>
          <Box>
              <Text fontSize='xl' colorScheme="teal">User</Text>
          </Box>
        </Box> 
          
        <Box  gap={3} display="flex" width="100px">
          <Box>
              <img width="30px" src={cart} alt="" />
          </Box>
          <Box>
              <Text fontSize='xl' colorScheme="teal">Cart</Text>
          </Box>
        </Box> 

        </ButtonGroup>  
      </Flex>



  <ProductMenu/>


    </div>
  );
}
