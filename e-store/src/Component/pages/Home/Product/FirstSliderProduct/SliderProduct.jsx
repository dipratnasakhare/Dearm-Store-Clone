import { Box  } from "@chakra-ui/react"
import ProductBox from "./Splitebox/ProductBox"
import SlideBox from "./Splitebox/SlideBox"

export default function SliderProduct(){

    return(
        <Box display="flex">
            <ProductBox />
            <SlideBox />
        </Box>
    )
}