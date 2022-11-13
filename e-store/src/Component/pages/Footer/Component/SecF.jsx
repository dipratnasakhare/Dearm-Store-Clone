import { SimpleGrid } from "@chakra-ui/react"
import style from "./Footercss/SecondF.module.css"

import FirstBox from "./Second/TextFooter"
import SecBox from "./Second/LoginFooter"


export default function footer(){

    
        
     
    return(
        <>
        <SimpleGrid columns={[1, 2]} gap={10} className={style.box}>
           <SecBox/>
           <FirstBox/>
        </SimpleGrid>
        </>

    )
}