import { Box, Grid, GridItem, Heading } from "@chakra-ui/react"

export default function BrandsFeatured(){

    let catogerydata = [
        'https://static.thcdn.com/images/small/webp/widgets/208-us/19/SR-logo_2000x2000-060919.jpg',
        'https://static.thcdn.com/images/small/webp/widgets/208-us/59/Skinc-014559.jpg',
        'https://static.thcdn.com/images/small/webp/widgets/208-us/34/original-220322-ELTAMD-LOGO-RGB-01_%28002%29-014534.png',
        'https://static.thcdn.com/images/small/webp/widgets/208-us/09/Chantecaille-033909.png',
        'https://static.thcdn.com/images/small/webp/widgets/208-us/08/SkinMedica-014608.jpg',
        'https://static.thcdn.com/images/small/webp/widgets/208-us/21/augustinusbader-124221.gif',
        
      ]
        return(
           <Box gap={10}>
             <Box>
             <Heading as='h3' size='xl'>
             Featured Brands
             </Heading>
             </Box>
    
             <Grid gap={10} templateColumns={['repeat(2, 1fr)', 'repeat(6, 1fr)']}>
                {catogerydata.map((ele)=>{
                  return(
                    <GridItem m="auto">
                      <img src={ele} alt="" />
                    </GridItem>
                  )
                })}
             </Grid>
           </Box>
        )
    }