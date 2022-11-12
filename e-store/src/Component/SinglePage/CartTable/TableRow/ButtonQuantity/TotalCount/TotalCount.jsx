import { Td } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export default function TotalCount({setAllTotal, quantity, price, allTotal }){

    let [total , setTotal] = useState(price)
    let x = Converter(price);
    let [count , setcount] = useState(Converter(total))

    useEffect(() => {
        setcount(0)
        setcount(count + quantity * x)
        setTotal(`$${quantity * x}.00`);
       
      }, [quantity]);

console.log(count)

      function Converter(price) {
        let x = price.split("$");
        x = x[1].split(".");
        x = Number(x[0])
        return x;
      }



    return(
        <Td>{total}</Td>

    )
}