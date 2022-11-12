import { Routes , Route  } from "react-router-dom"
import Home from "../pages/Home/Home"
import CartPage from "../SinglePage/CartPage/CartPage"
import CartTable from "../SinglePage/CartTable/CartTable"
import LoginPage from "../SinglePage/LoginPage/LoginPage"

export default function RoutesData(){

    return(
       <Routes>
         
            <Route exact   path="/" element={<Home/>} />
            <Route exact   path="/:id" element={<CartPage/>} />
            <Route exact   path="/carttable" element={<CartTable/>}/>
            <Route exact   path="/login" element={<LoginPage/>}/>
       </Routes>
    )
}