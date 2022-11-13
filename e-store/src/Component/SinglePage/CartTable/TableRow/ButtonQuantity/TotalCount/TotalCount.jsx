import { Td } from "@chakra-ui/react";
import { useEffect, useState } from "react";
export default function TotalCount({  quantity, price }) {

  let [total, setTotal] = useState(Converter(price));

  let x = Converter(price);

  useEffect(() => {
    setTotal(quantity * x);
  }, [quantity]);

  function Converter(price) {
    let x = price.split("$");
    x = x[1].split(".");
    x = Number(x[0]);
    return x;
  }

  return <Td>${total}.00</Td>;
}
