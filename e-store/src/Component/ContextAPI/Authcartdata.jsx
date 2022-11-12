
import { createContext, useState } from "react";

export const AuthaCartData = createContext()
let obj = {
    "brandName": "Farmacy",
    "currentSku": {
        "badgeAltText": "Clean plus planet positive",
        "biExclusiveLevel": "none",
        "imageAltText": "Farmacy - Honey Haven Hydration Bestsellers Set",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": true,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": true,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": true,
        "listPrice": "$60.00",
        "salePrice": "",
        "skuId": "2613958",
        "skuImages": {
            "image135": "https://www.sephora.com/productimages/sku/s2613958-main-grid.jpg?pb=clean-planet-positive-badge-2021",
            "image162": "https://www.sephora.com/productimages/sku/s2613958-162.jpg?pb=clean-planet-positive-badge-2021",
            "image250": "https://www.sephora.com/productimages/sku/s2613958-main-hero.jpg?pb=clean-planet-positive-badge-2021",
            "image42": "https://www.sephora.com/productimages/sku/s2613958-main-thumb.jpg?pb=clean-planet-positive-badge-2021",
            "image450": "https://www.sephora.com/productimages/sku/s2613958-main-Lhero.jpg?pb=clean-planet-positive-badge-2021",
            "image62": "https://www.sephora.com/productimages/sku/s2613958-main-Lthumb.jpg?pb=clean-planet-positive-badge-2021",
            "image97": "https://www.sephora.com/productimages/sku/s2613958-main-Sgrid.jpg?pb=clean-planet-positive-badge-2021"
        },
        "skuType": "Standard",
        "valuePrice": "$93.00"
    },
    "displayName": "Honey Haven Hydration Bestsellers Set",
    "heroImage": "https://www.sephora.com/productimages/sku/s2613958-main-grid.jpg?pb=clean-planet-positive-badge-2021",
    "image135": "https://www.sephora.com/productimages/sku/s2613958-main-grid.jpg?pb=clean-planet-positive-badge-2021",
    "image250": "https://www.sephora.com/productimages/sku/s2613958-main-hero.jpg?pb=clean-planet-positive-badge-2021",
    "image450": "https://www.sephora.com/productimages/sku/s2613958-main-Lhero.jpg?pb=clean-planet-positive-badge-2021",
    "productId": "P501292",
    "rating": "4.5556",
    "reviews": "9",
    "targetUrl": "/product/honey-haven-set-P501292"
}


function AuthaCartDataprovider({children}){
    
    let [cartData , setCartData] = useState(obj)


    return(
        <AuthaCartData.Provider value={{setCartData, cartData}}>
            {children}
        </AuthaCartData.Provider>
    )
}

export default AuthaCartDataprovider