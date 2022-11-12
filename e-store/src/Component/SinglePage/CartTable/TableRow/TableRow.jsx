import {
    Tr,
    Td,
    Icon,
  } from "@chakra-ui/react";
  import { CloseIcon } from "@chakra-ui/icons";
  import { useState } from "react";
import ButtonQuantity from "./ButtonQuantity/ButtonQuantity";

export default function TableRow({arr, setAllTotal, allTotal}){

    let [total , setTotal] = useState(0)

   

    return(
        <>
        {arr && arr.map((ele) => {
            return (
              <Tr>
                <Td>{ele.currentSku.imageAltText}</Td>
                <Td>{ele.currentSku.listPrice}</Td>
                <ButtonQuantity allTotal={allTotal} setAllTotal={setAllTotal} total={total} price={ele.currentSku.listPrice} setTotal={setTotal}/>
                <Td>
                  <Icon as={CloseIcon} />
                </Td>
              </Tr>
            );
          })}
          </>
    )
}