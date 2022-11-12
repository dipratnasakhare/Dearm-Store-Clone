import { Heading, Input, Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function LoginPage() {
  let [userLogin, setUserLogin] = useState(false);

  if (userLogin) {
    return (
      <Box gap={20} w="80%" m="auto" mt="5rem" mb="10rem">
        <Heading  mb="25px" as="h2" size="xl">
          Thank You For Signing Up
        </Heading>
        <Text>
            You have been added to our email list, please add us to 
            'safe senders' list to make sure your're the first to heir
            about our exclusive offer ans new product
        </Text>
      </Box>
    );
  }

  return (
    <Box  w="80%" m="auto" mt="5rem" mb="10rem">
      <Heading  mb="25px" as="h2" size="xl">
        Joint DreamStrore
      </Heading>
      <Input  borderRadius="0px"   mb="25px" placeholder="Enter Email" />
      <Button
        onClick={()=>setUserLogin(true)}
        width="10rem"
        borderRadius="0px"
       
        bg="black"
        color="white"
      >
        Submit
      </Button>
    </Box>
  );
}
