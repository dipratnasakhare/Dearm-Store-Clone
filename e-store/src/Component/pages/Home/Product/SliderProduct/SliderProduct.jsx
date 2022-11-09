import { Flex } from "@chakra-ui/react"
import ProductBox from "./Splitebox/ProductBox"
import SlideBox from "./Splitebox/SlideBox"

export default function SliderProduct(){

    return(
        <Flex margin="auto" border="1px solid" width="100%" backgroundColor="green.400">
            <ProductBox />
            <SlideBox />
        </Flex>

    )
}