import { Box } from "@chakra-ui/react"
import style from "./Footercss/SecondF.module.css"

import FirstBox from "./Second/FirstBox"
import SecBox from "./Second/SecBox"


export default function footer(){

    
        
     
    return(
        <>
        <Box border="1px solid red" className={style.box}>
           <SecBox/>
           <FirstBox/>
        </Box>
        </>

    )
}