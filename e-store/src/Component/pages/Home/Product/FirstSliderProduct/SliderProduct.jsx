import { SimpleGrid  } from "@chakra-ui/react"
import ProductBox from "./Splitebox/ProductBox"
import SlideBox from "./Splitebox/SlideBox"

export default function SliderProduct(){

    return(
        <SimpleGrid columns={[1,2]} spacing={10} >
            <ProductBox />
            <SlideBox />
        </SimpleGrid>
    )
}

