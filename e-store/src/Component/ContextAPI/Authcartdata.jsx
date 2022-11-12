
import { createContext, useState } from "react";

export const AuthaCartData = createContext()


function AuthaCartDataprovider({children}){
    
    let [cartData , setCartData] = useState({})


    return(
        <AuthaCartData.Provider value={{setCartData, cartData}}>
            {children}
        </AuthaCartData.Provider>
    )
}

export default AuthaCartDataprovider