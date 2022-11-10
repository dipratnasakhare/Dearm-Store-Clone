
import SecF from "./Component/SecF" 
import { Divider } from "@chakra-ui/react"
import CartFooterBox from "./Component/CartFooterBox/CartFooterBox";
function Footer() {
    return (
      <div  style={{paddingTop:"5px",width:"80%", margin:"auto"}}>
      
       <Divider style={{opacity:"100%"}}/>
       <SecF/>
       <CartFooterBox/>
      </div>
    );
  }
  
  export default Footer;
  