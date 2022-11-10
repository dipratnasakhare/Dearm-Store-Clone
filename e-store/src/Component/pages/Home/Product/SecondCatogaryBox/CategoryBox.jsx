import { Box, Flex, Heading } from "@chakra-ui/react";

export default function CategoryBox(){

  let catogerydata = [
    'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png',
    'https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2833%29-085536.png',
    'https://static.thcdn.com/images/small/webp/widgets/208-us/32/DS_Round_Nav_-_Untitled_Page_%289%29-052632.png',
    'https://static.thcdn.com/images/small/webp/widgets/208-us/03/DS_Round_Nav_-_Untitled_Page_%2810%29-052703.png',
    'https://static.thcdn.com/images/small/webp/widgets/208-us/49/DS_Round_Nav_-_Untitled_Page_%2813%29-053649.png',
    'https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2825%29-063536.png',
    
  ]
    return(
       <Box >
         <Heading as='h3' size='xl'>
           Shop By Category
         </Heading>

         <Box m="auto"  display="flex">
            {catogerydata.map((ele)=>{
              return(
                <Box m="auto">
                  <img src={ele} alt="" />
                </Box>
              )
            })}
         </Box>
       </Box>
    )
}