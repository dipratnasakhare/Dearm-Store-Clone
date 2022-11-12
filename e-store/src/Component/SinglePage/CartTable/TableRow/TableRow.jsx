import {
    Td,
    Box,
    Icon,
  } from "@chakra-ui/react";
  import { CloseIcon } from "@chakra-ui/icons";
  import { useState } from "react";
import ButtonQuantity from "./ButtonQuantity/ButtonQuantity";

export default function TableRow({arr, setAllTotal, allTotal, handeldelate}){

    let [total , setTotal] = useState(0)


   

    return(
        <>
        {arr && arr.map((ele, i) => {
            return (
              <Box as="tr">
                <Box as="td"
                 >{ele.currentSku.imageAltText.split("-")[0]}</Box>
                <Box as="td"
               >{ele.currentSku.listPrice}</Box>
                <ButtonQuantity allTotal={allTotal} setAllTotal={setAllTotal} total={total} price={ele.currentSku.listPrice} setTotal={setTotal}/>
                <Box as="td" onClick={()=>handeldelate(ele.productId)}>
                  <Icon as={CloseIcon} />
                </Box >
              </Box>
            );
          })}
          </>
    )
}