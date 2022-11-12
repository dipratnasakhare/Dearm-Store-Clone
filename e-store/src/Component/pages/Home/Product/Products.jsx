import { Text, Box, Heading } from "@chakra-ui/react"
import AddBar from "./ThirdAddBar/AddBar"
import BestsellersSlider from "./ForthBestsellers/BestsellersSlider"
import CategoryBox from "./SecondCatogaryBox/CategoryBox"
import BrandsFeatured from "./SevenFeaturedBrands/Featured Brands"
import SliderBoxThird from "./SixSliderBox/SliderBoxThird"
import SliderForth from "./EightSliderForth/SliderForth"
import SliderProduct from "./FirstSliderProduct/SliderProduct"
import Products from "./FifthProductBox/Products"
import SlideShow from "./TopSliderbar/SlidShow"
import Style from "./Style/Products.module.css" 
export default function Product(){

    return(
        <>
        <SlideShow/>

        <div className={Style.productbox}>
             <Box m="3rem">
                    <Heading as='h3' size='xl'>
                        2x Points on EltaMD
                    </Heading>
                    <Text>Rewards members earn DOUBLE on sunscreen, moisturizers & more. Plus, receive a $16 gift when you spend $75+ on the brand.</Text>
             </Box>

            <SliderProduct/>
            <CategoryBox/>
            <AddBar/>
            <BestsellersSlider/>
            <Products />
            <SliderBoxThird/>
            <BrandsFeatured />
            <SliderForth/>

        </div>
        </>
    )
}