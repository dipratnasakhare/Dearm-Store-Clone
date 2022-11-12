import { Td } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TotalCount({ setAllTotal, quantity, price, allTotal }) {
  let [total, setTotal] = useState(Converter(price));
  let x = Converter(price);
  let [count, setcount] = useState(total);

  useEffect(() => {
    setAllTotal(total)

    setTotal(quantity * x);
  
   setAllTotal(total)
  


  }, [quantity, setTotal]);

  function Converter(price) {
    let x = price.split("$");
    x = x[1].split(".");
    x = Number(x[0]);
    return x;
  }

  return <Td>${total}.00</Td>;
}
