import {
  Box,
  Image,
  Flex,
  Text,
  SimpleGrid,
  Radio,
  Heading,
  Divider,
  Button,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { StarIcon } from "@chakra-ui/icons";
import styles from "./style/CartPage.module.css"
import { AuthaCartData } from "../../ContextAPI/Authcartdata"
import { AuthTableData } from "../../ContextAPI/AuthTableData"

export default function CartPage() {
  let [productimage, setproductimage] = useState([]);
  let [quntity, setQuntity] = useState(1);
  
  const {funcsetList, tableList} = useContext(AuthTableData)

  const { setCartData, cartData } = useContext(AuthaCartData)

 let handelAddtocart = () => {
  funcsetList(cartData)
  console.log(tableList)
 }






  useEffect(() => {
    let photos = cartData.currentSku.skuImages;
    let count = 0
    for (let i in photos) {
        if(count == 1) return;
      setproductimage([...productimage, photos[i]]);
      count++
    }
  
  }, []);

  
  return (
    <>
    <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}  className={styles.mainBox}>
      <GridItem >
        {productimage.map((ele) => {
          return <Image src={ele} alt="product" />;
        })}
      </GridItem >

      <GridItem display={["none", "inline"]}  >
        <Image  src={cartData.image450} />
      </GridItem >

      <GridItem  className={styles.TextBar}  p="1rem">
        <Box>
          <Heading as="h2" size="lg">
            {cartData.brandName}
          </Heading>
        </Box>
        <Box>
          <Heading as="h2" size="2xl">
            {cartData.currentSku.imageAltText}
          </Heading>
        </Box>
        <Box>
          <Text>A powerfull face serum that deeply hydrates skin</Text>
        </Box>

        <Flex>
          <Text>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={
                    i < Math.floor(Number(cartData.rating))
                      ? "yellow.500"
                      : "gray.300"
                  }
                />
              ))}
          </Text>
          <Text> {cartData.reviews} Reviews</Text>
        </Flex>

        <Flex>
          <Image
            width="50px"
            src="https://as1.ftcdn.net/v2/jpg/03/95/04/78/1000_F_395047812_kmXO1JBQKNqWeOQSCTvagAm30wnaWkz7.jpg"
            alt="star"
          />
          <Text as="b">
            Earn 530 reward and points when purchasing this product as a reward
            member
          </Text>
        </Flex>

        <Box>
          <Box border="1px solid" mb="5px">
            <Box>
             <Text>
             <Radio
                border={"1px solid red"}
                justifyContent={"flex-start"}
                value="1"
              >
                {cartData.currentSku.listPrice}
              </Radio>{" "}
              One Time Purchase
             </Text>
            </Box>
          </Box>

          {/* <Box alignItems={"flex-start"} border="1px solid "><Text  >{obj.currentSku.listPrice}</Text> </Box> */}

          <Box border="1px solid ">
           <Text>
           <Radio justifyContent={"flex-start"} value="1">
              {cartData.currentSku.salePrice}
            </Radio>{" "}
            Auto-Replenish
           </Text>
          </Box>

        </Box>

        <Box>
          <Heading as="h2" size="xl">
            {cartData.currentSku.listPrice}
          </Heading>
        </Box>

        <Divider />
        <Text textAlign={"start"} border={"1px solid"} mb="8px">
          Quantity
        </Text>
        <Flex>
          <Box>
            <Button
              disabled={quntity === 1}
              onClick={() => {
                setQuntity(quntity - 1);
              }}
              borderRadius={"0px"}
              border={"1px solid "}
            >
              -
            </Button>
            <Button borderRadius={"0px"}>{quntity}</Button>
            <Button
              disabled={quntity === 8}
              onClick={() => setQuntity(quntity + 1)}
              borderRadius={"0px"}
              border={"1px solid "}
            >
              +
            </Button>
          </Box>
          <Box>
            <Button onClick={handelAddtocart} bg="blue.900" color="white" borderRadius={"0px"}>
              ADD TO CART
            </Button>
          </Box>
        </Flex>

        <Divider />

        <Box textAlign="start">
        <Button borderRadius={"0px"} >
          Double Points + $ 16 Gifts
        </Button>
        </Box>

        <Box>
          <Text>
            Earn 2x Dermstore Rewards Points on EltaMD. 2x points = 10% back in
            rewards to spend on future purchases at Dermstore.com. Plus, receive
            an EltaMD UV Restore Tinted 0.5 oz deluxe ($16 value) when you spend
            $75 or more on the brand. Participating products only. EltaMD event
            ends 11/11/22 at 11:59 p.m. PT.
          </Text>
        </Box>

        <Box  textAlign="start">
        <Button borderRadius={"0px"} border={"1px solid"}>
          START EARNING
        </Button>
        </Box>
      </GridItem >
    </Grid>
    <Divider />
    </>
  );
}
