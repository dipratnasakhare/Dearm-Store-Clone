import {
  Flex,
  Heading,
  ButtonGroup,
  Box,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react";
import img from "../../../Logo/DreamStore.png";
import cart from "../../../Logo/shoppingcart.png";
import user from "../../../Logo/user.png";
import {useState} from "react"
import ProductMenu from "./ProductMenu/ProductMenu";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom"

export default function Navbar() {

  let [hamburger , sethamburger] = useState(false)
  let [hamburgergap , sethamburgep] = useState(null)

  const navigate = useNavigate();

  return (
    <Box pos="sticky" h={["3.5rem", "8rem"]} mb={hamburgergap} >
      <Flex
        width="90%"
        margin="auto"
        minWidth="max-content"
        alignItems="center"
        gap={[3, 2]}
        

      >
        <Box p="2" display="flex" gap="10px">
          {/* HamburgerIcon */}

          <Flex display={["flex", "none"]} onClick={()=>{
            sethamburger(!hamburger)
            sethamburgep("20rem")
            if(hamburger){
              sethamburgep(null)
            }
            }}>
            <IconButton aria-label="Search database" icon={<HamburgerIcon />} />
          </Flex>

          {/* logo here  */}

          <Flex gap={1} m="auto" onClick={()=>navigate("/")}>
            <Box  w={["40px", "68px"]}  m="auto" mt={[null, null, "8px"]} >
              <img src={img} alt="" width="65px" />
            </Box>

            {/* website text here */}

            <Box margin="auto">
              {/* <Center> */}
              <Heading as="h3" size={["lg", "xl"]}>
                DreamStore
              </Heading>
              {/* </Center> */}
            </Box>
          </Flex>

          {/* search box  */}
        </Box>
        <InputGroup display={["None", "flex"]}>
          <InputLeftElement />
          <Input placeholder="Search for a product barnd..." />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>

        <ButtonGroup>
          <Box gap={[1, 3]} display="flex" width={["70%", "100px"]}>
            <Box>
              <img width="30px" src={user} alt="" />
            </Box>
            <Box display={["none", "flex"]}>
              <Text fontSize="xl" colorScheme="teal">
                User
              </Text>
            </Box>
          </Box>

          <Box onClick={()=>navigate("/carttable")} gap={[1, 3]} display="flex" width={["70%", "100px"]}>
            <Box>
              <img width="30px" src={cart} alt="" />
            </Box>
            <Box display={["none", "flex"]}>
              <Text fontSize="xl" colorScheme="teal">
                Cart
              </Text>
            </Box>
          </Box>
        </ButtonGroup>
      </Flex>

      <ProductMenu hamburger={hamburger} sethamburger={sethamburger} />
    </Box>
  );
}
