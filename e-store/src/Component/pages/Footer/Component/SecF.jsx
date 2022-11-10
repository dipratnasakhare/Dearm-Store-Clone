import { Box } from "@chakra-ui/react"
import style from "./Footercss/SecondF.module.css"

import FirstBox from "./Second/TextFooter"
import SecBox from "./Second/LoginFooter"


export default function footer(){

    
        
     
    return(
        <>
        <Box borderBottom="1px solid" gap={10} className={style.box}>
           <SecBox/>
           <FirstBox/>
        </Box>
        </>

    )
}