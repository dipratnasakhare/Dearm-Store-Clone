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
import styled from "./stylebox/SecBox.module.css";

export default function Footer() {

    const [bool, setbool] = useState(true)


  

  return (
    <Box>
      <Box height="6rem" gap="5" >
          <Text>Sign up to our newsletters and receive the latest exclusive discounts and deals</Text>
           <Button>SIGN ME UP</Button>
          </Box>
    <Box borderTop="1px solid">

      <Box  className={styled.Login}>
        <Box>
        
          {/* <NavLink to="/login"> */}
            <Text>Sign in or Create Account</Text>
          {/* </NavLink> */}
        </Box>

        <Box>
          <Heading size="md" mb="3">
            Get the latest deals and more.
          </Heading>

          {!bool ? (
            <Box style={{ margin: "auto" }}>
              <Image
                w="20%"
                src="https://cdn-icons-png.flaticon.com/512/2279/2279398.png"
              />
            </Box>
          ) : (
            <Box className={styled.flexbox}>
              <Box >
                <Input  pos="s" type="email" placeholder="Enter email address" />
              </Box>

              <Box>
                <Button
                  _hover="none"
                  ml="10rem"
                  pos="s"
                  bg="blue"
                  color="white"
                  position="absolute"
                  onClick={()=>setbool(!bool)}
                >
                  Sign Up
                </Button>
              </Box>

            </Box>
          )}
          {/* */}
        </Box>

       
       

        <Box ml={1}>
          <Text>Forums, blogs & more</Text>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}
