import { Text, Heading } from "@chakra-ui/react"
import AddBar from "./AddBar/AddBar"
import BestsellersSlider from "./Bestsellers/BestsellersSlider"
import CategoryBox from "./CatogaryBox/CategoryBox"
import BrandsFeatured from "./FeaturedBrands/Featured Brands"
import SliderBoxThird from "./SliderBox/SliderBoxThird"
import SliderForth from "./sliderforth/SliderForth"
import SliderProduct from "./SliderProduct/SliderProduct"
export default function Product(){

    return(
        <div>
              <Heading as='h3' size='xl'>
                 2x Points on EltaMD
              </Heading>

            <Text>Rewards members earn DOUBLE on sunscreen, moisturizers & more. Plus, receive a $16 gift when you spend $75+ on the brand.</Text>

            <SliderProduct/>
            <CategoryBox/>
            <AddBar/>
            <BestsellersSlider/>
            <SliderBoxThird/>

            <BrandsFeatured />
            <SliderForth/>

        </div>
    )
}