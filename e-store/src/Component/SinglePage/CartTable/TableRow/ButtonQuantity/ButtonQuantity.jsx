import { Td, Button, Box } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import TotalCount from "./TotalCount/TotalCount";

export default function ButtonQuantity({ price, arr, index,setAllTotal }) {
  let [quantity, setQuantity] = useState(1);

  useEffect(()=>{
  arr.map((ele)=>{
    if(ele.productId == index){
      ele["quant"] = quantity
    }
  })

  function Converter(price) {
    let x = price.split("$");
    x = x[1].split(".");
    x = Number(x[0]);
    return x;
  }

  console.log(arr)
  let x = 0;
  arr.map((ele)=>{
   let num = Converter(ele.currentSku.listPrice)
   x+= num * ele["quant"]
   console.log(ele["quant"],num, )
  })
  setAllTotal(x)
  },[quantity])

  let handelAdd = () => {
    setQuantity(quantity + 1)
    
  }

  let heandelMinus = () => {
    setQuantity(quantity - 1)
  }

  return (
    <>
    <Box as="td">
      <Button
        disabled={quantity === 1}
        border="1px solid"
        borderRadius="0px"
        onClick={heandelMinus}
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
        onClick={handelAdd}
      >
        +
      </Button>
    </Box>
     <TotalCount  quantity={quantity} price={price}  />
    </>
  );
}
