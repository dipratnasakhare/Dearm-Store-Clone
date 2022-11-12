import { Box, Text, Image, GridItem, SimpleGrid } from "@chakra-ui/react";
import styled from "./stylebox/TextFooter.module.css";

export default function footer() {
  let first = [
    {
      text: "Check Order Status",
    },
    {
      text: "Shipping, Delivery & Pickup",
    },
    {
      text: "Returns & Exchanges",
    },
    {
      text: "Price Match Guarantee",
    },
    {
      text: "Product Recalls",
    },
    {
      text: "Trade-In Program",
    },
    {
      text: "Gift Cards",
    },
  ];
  let second = [
    {
      text: "Visit our Support Center",
    },
    {
      text: "Shop with an Expert",
    },
    {
      text: "Schedule a Service",
    },
    {
      text: "Manage an Appointment",
    },
    {
      text: "Protection & Support Plans",
    },
    {
      text: "Haul Away & Recycling",
    },
    {
      text: "Contact Us",
    },
  ];
  let third = [
    {
      text: "Affiliate Program",
    },
    {
      text: "Advertise with Us",
    },
    {
      text: "Developers",
    },
    {
      text: "Best Buy Health",
    },
    {
      text: "Best Buy Education",
    },
    {
      text: "Best Buy Business",
    },
  ];

  let social = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665209.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665228.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1362/1362857.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665213.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665232.png",
    },
  ];

  return (
    <Box>
      <Box mb="16px" height="6rem" display={["none", "flex"]}>
        <Box gap="5"  className={styled.social}>
          <Text>Contact us</Text>

          {social.map((ele) => {
            return (
              <Box>
                <Image src={ele.img} />
              </Box>
            );
          })}
        </Box>
      </Box>

      <SimpleGrid columns={[1, 3]} gap="10px" className={styled.box}>
        <Box borderTop="1px solid">
          <Text color="black">Order & Purchases</Text>
          {first.map((ele) => {
            return (
              <Box>
                <Text>{ele.text}</Text>
              </Box>
            );
          })}
        </Box>

        <Box borderTop="1px solid">
          <Text color="black">Support & Services</Text>
          {second.map((ele) => {
            return (
              <Box>
                <Text>{ele.text}</Text>
              </Box>
            );
          })}
        </Box>

        <Box borderTop="1px solid">
          <Text color="black">Partnerships</Text>
          {third.map((ele) => {
            return (
              <Box>
                <Text>{ele.text}</Text>
              </Box>
            );
          })}
        </Box>
      </SimpleGrid>
    </Box>
  );
}
