import {Box, Heading, Text, Spacer, Image, Flex} from "@chakra-ui/react"

export default function CartFooterBox() {

    let paycartdata = [
        'https://cdn-icons-png.flaticon.com/512/349/349221.png',
        'https://cdn-icons-png.flaticon.com/512/888/888870.png',
        'https://cdn-icons-png.flaticon.com/512/825/825464.png',
        'https://cdn-icons-png.flaticon.com/512/49/49456.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968601.png',
        'https://cdn-icons-png.flaticon.com/512/39/39073.png',

    ]
  return (
    <Box display="flex" p="5px">
      <Box >
        <Heading as="h2" size="3xl" noOfLines={1}>
          THG
        </Heading>
        <Text>2022 @ The Hun.com.Ltd</Text>
      </Box>

      <Spacer />
      <Box  textAlign={"start"}>
        <Text>
            Pay Secure With
        </Text>
        <Flex gap={10}>
        {paycartdata.map((ele)=>{
            return(
                <Image w="80px" src={ele} alt="sd"/>
            )
        })}
        </Flex>
      </Box>
    </Box>
  );
}
