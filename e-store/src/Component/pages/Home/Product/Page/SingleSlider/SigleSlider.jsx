import { Text, Box, Image, Button, Center, Spacer } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import { StarIcon } from "@chakra-ui/icons";
export default function SingleSlider({ ele }) {
  // <Image src={ele.currentSku.skuImages.image135} alt={property.imageAlt} />

  return (
    <Box
      gap={50}
      overflow="hidden"
      height="29rem"
      p="10px"
      alignContent={"flex-end"}
      border="1px solid red"
    >
      <Center
       ><Image
       h="15rem"
       src={ele.image135}
       alt={ele.currentSku.skuImages.image135}
     />
      </Center>


      {/* <Spacer /> */}





      <Box border="1px solid red" alignItems={"flex-start"}   >


        <Center display="flex">
          <Box>{ele.displayName}</Box>
        </Center>
        
        <Center gap={3} display="flex" mt="2" alignItems="center">
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

        <Center>
          <Text>{ele.currentSku.listPrice}</Text>
        </Center>

        <Box alignItems={"flex-end"} border="1px solid red">
          <Button _hover="none" bg="black" color="white">
            Quick Buy
          </Button>
        </Box>


      </Box>
    </Box>
  );
}
