import Product from "./Product/Products";
import { Divider, Box} from "@chakra-ui/react";
import style from "./style/Home.module.css"
export default function Home(){

    return(
        <Box className={style.HomeBox}>
        <div>
        <Product/>
        </div>
        <Divider/>
        </Box>
    )
}