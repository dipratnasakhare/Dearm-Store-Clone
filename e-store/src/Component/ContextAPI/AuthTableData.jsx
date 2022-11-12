import { createContext } from "react";
import { useState } from "react";


export let AuthTableData = createContext()

export default function AuthaCartData({children}){

    let [tableList , setTableList] = useState([])

    return(
        <AuthTableData.Provider value={{setTableList, tableList}}>
            {children}
        </AuthTableData.Provider>
    )
}