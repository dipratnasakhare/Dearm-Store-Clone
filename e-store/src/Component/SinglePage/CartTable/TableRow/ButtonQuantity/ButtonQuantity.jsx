import { Td, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import TotalCount from "./TotalCount/TotalCount";

export default function ButtonQuantity({ price, setAllTotal, allTotal}) {
  let [quantity, setQuantity] = useState(1);


  return (
    <>
    <Td>
      <Button
        disabled={quantity === 1}
        border="1px solid"
        borderRadius="0px"
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </Button>
      <Button border="1px solid" borderRadius="0px">
        {quantity}
      </Button>
      <Button
        disabled={quantity === 8}
        border="1px solid"
        borderRadius="0px"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </Button>
    </Td>
     <TotalCount allTotal={allTotal}  quantity={quantity} price={price} setAllTotal={setAllTotal} />
    </>
  );
}
