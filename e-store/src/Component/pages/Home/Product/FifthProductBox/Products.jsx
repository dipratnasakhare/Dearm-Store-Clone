import { Box, Heading, Text, Image, Grid, GridItem } from "@chakra-ui/react" 

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
     <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}  gap={10}>
        
      {Products.map((ele)=>{
        return(
            <GridItem  gap={5} alignContent={"center"}>
                <Box><Image  src={ele.img} alt="" /></Box>
                <Box><Heading>{ele.text}</Heading></Box>
                <Box><Text>{ele.p}</Text></Box>
            </GridItem>
        )
      })}
      
     </Grid>
    )
}