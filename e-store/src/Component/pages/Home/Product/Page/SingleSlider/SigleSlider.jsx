import {
  Flex,
  Text,
  Box,
  Image,
  Button,
  Center,
  Spacer,
} from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import { StarIcon } from "@chakra-ui/icons";
import {AuthaCartData} from "../../../../../ContextAPI/Authcartdata"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
export default function SingleSlider({ ele }) {

 const { setCartData, cartData } = useContext(AuthaCartData)

  const navigate = useNavigate();

 let handelCart = () => {
  setCartData(ele)
  navigate("/5")
 }
  return (
    <Flex
      m="10px"
      h="20rem"
      display="grid"
      border={"1px solid"}
      borderRadius="5px"
    >
      <Center>
        <Image src={ele.image135} alt={ele.currentSku.skuImages.image135} />
      </Center>

      <Spacer />

      <Flex display="grid">
        <Spacer />

        <Center display="flex">
          <Box>{ele.displayName}</Box>
        </Center>
        <Spacer />

        <Center gap={3} display="flex" mt="2">
          <Box>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={
                    i < Math.floor(Number(ele.rating))
                      ? "Black.500"
                      : "gray.300"
                  }
                />
              ))}
          </Box>
          <Text>{ele.reviews}</Text>
        </Center>
        <Spacer />

        <Center>
          <Text>{ele.currentSku.listPrice}</Text>
        </Center>
        <Spacer />

        <Box alignItems={"flex-end"}>
          <Button onClick={handelCart} _hover="none" bg="black" color="white">
            Quick Buy
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
