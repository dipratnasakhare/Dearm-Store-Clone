import { Flex, Spacer, Text, Box } from "@chakra-ui/react";
import MenuButtondata from "./MenuButton"

// import MenuButon from "./Textnavdata";

let MenuData = ["Account", "Recently Viewed", "Order Status", "Saved Items"];

export default function ProductMenu() {

  return (
    <Flex
      gap="2"
      borderTop="0.3px solid white"
      pl={30}
      pr={22}
      alignItems="end"
      pb={2}
    >
      <Box display="flex" gap={7} w={650}>
        <Box>
          <Text>Top Deals</Text>
        </Box>
        <Box>
          <Text>Deal of the Day</Text>
        </Box>
        <Box>
          <Text>Totaltech Membership</Text>
        </Box>

        {MenuButtondata("more")}
      </Box>

      <Spacer />

      <Box w={550} gap={7} display="flex">
        {MenuData.map((ele) => MenuButtondata(ele))}
      </Box>
    </Flex>
  );
}