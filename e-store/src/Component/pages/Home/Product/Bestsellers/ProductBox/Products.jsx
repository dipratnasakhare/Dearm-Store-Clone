import { Box, Flex, Heading, Text } from "@chakra-ui/react" 

export default function Products(){

    let Products = [
        {
            img:'https://static.thcdn.com/images/small/webp/widgets/208-us/12/Revision_NPD-040112.png',
            text:'New from Revision Skincare',
            p:'A serum that helps strengthen skin’s barrier & boost elasticity.'
        },
        {
            img:'https://static.thcdn.com/images/small/webp/widgets/208-us/05/HP_LPSQ_BANNER_676x556-064705.jpg',
            text:'Spotlight On: Dr. Loretta',
            p:'Look and feel confident with dermatologist-founded products that make you feel like yourself again.'  
        },
        {
            img:'https://static.thcdn.com/images/small/webp/widgets/208-us/49/PCA_Skin_NPD-055049.png',
            text:'New from PCA Skin',
            p:'Help resurface, calm & hydrate for smoother, clearer-looking skin.'
        }
    ]

    return(
      <Flex>
      {Products.map((ele)=>{
        return(
            <Box>
                <Box><img src={ele.img} alt="" /></Box>
                <Box><Heading>{ele.text}</Heading></Box>
                <Box><Text>{ele.p}</Text></Box>
            </Box>
        )
      })}
      </Flex>
    )
}