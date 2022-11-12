import { createContext } from "react";
import { useState } from "react";


export let AuthTableData = createContext()

export default function AuthaCartData({children}){

    let [tableList , setTableList] = useState([])


let funcsetList = (ele) => {
    setTableList([...tableList, ele])
}

let newFunRemovedata = (key) => {
    let data = tableList.filter((ele) => {
        return key !== ele.key;
      });
      data.shift()
      setTableList(data);
}




    return(
        <AuthTableData.Provider value={{funcsetList, newFunRemovedata,setTableList, tableList}}>
            {children}
        </AuthTableData.Provider>
    )
}