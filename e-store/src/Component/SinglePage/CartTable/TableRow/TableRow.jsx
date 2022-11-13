import { Box, Icon } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import ButtonQuantity from "./ButtonQuantity/ButtonQuantity";

export default function TableRow({ arr, handeldelate, setAllTotal }) {
  return (
    <>
      {arr &&
        arr.map((ele, i) => {
          return (
            <Box as="tr">
              <Box as="td">{ele.currentSku.imageAltText.split("-")[0]}</Box>
              <Box as="td">{ele.currentSku.listPrice}</Box>
              <ButtonQuantity
                price={ele.currentSku.listPrice}
                arr={arr}
                index={ele.productId}
                setAllTotal={setAllTotal}
              />
              <Box as="td" onClick={() => handeldelate(ele.productId)}>
                <Icon as={CloseIcon} />
              </Box>
            </Box>
          );
        })}
    </>
  );
}
