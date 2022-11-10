import SliderForAll from "../../Page/SliderForall";
import { Box } from "@chakra-ui/react"

export default function SlideBox(){

    
      let sliderimg = [
        'https://static.thcdn.com/images/xlarge/webp/widgets/208-us/12/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02-HomePage_1920x700-094812.jpg',
        'https://static.thcdn.com/images/xlarge/webp/widgets/208-us/50/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-09-HomePage_1920x700-021350.jpg',
        'https://static.thcdn.com/images/xlarge/webp/widgets/208-us/34/1007-STDCRE-41315-WC-DS-Dermstore-Advent-Calendar-2022-Trading-Gif-1920x700-034034.gif',
        'https://static.thcdn.com/images/xlarge/webp/widgets/208-us/09/original-1027-STDCRE-42686-DS-EF-Cyber-Waitlist-V1-1920x700-082409.jpg',
        'https://static.thcdn.com/images/xlarge/webp/widgets/208-us/15/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02A-HomePage_1920x700-020215.jpg',
      ]

      let data = [
        {
            "brandName": "SEPHORA COLLECTION",
            "currentSku": {
                "biExclusiveLevel": "none",
                "imageAltText": "SEPHORA COLLECTION - Wishing You Advent Calendar",
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
                "listPrice": "$45.00",
                "salePrice": "",
                "skuId": "2579720",
                "skuImages": {
                    "image135": "https://www.sephora.com/productimages/sku/s2579720-main-grid.jpg",
                    "image162": "https://www.sephora.com/productimages/sku/s2579720-162.jpg",
                    "image250": "https://www.sephora.com/productimages/sku/s2579720-main-hero.jpg",
                    "image42": "https://www.sephora.com/productimages/sku/s2579720-main-thumb.jpg",
                    "image450": "https://www.sephora.com/productimages/sku/s2579720-main-Lhero.jpg",
                    "image62": "https://www.sephora.com/productimages/sku/s2579720-main-Lthumb.jpg",
                    "image97": "https://www.sephora.com/productimages/sku/s2579720-main-Sgrid.jpg"
                },
                "skuType": "Standard",
                "valuePrice": "$105.00"
            },
            "displayName": "Wishing You Advent Calendar",
            "heroImage": "https://www.sephora.com/productimages/sku/s2579720-main-grid.jpg",
            "image135": "https://www.sephora.com/productimages/sku/s2579720-main-grid.jpg",
            "image250": "https://www.sephora.com/productimages/sku/s2579720-main-hero.jpg",
            "image450": "https://www.sephora.com/productimages/sku/s2579720-main-Lhero.jpg",
            "productId": "P501351",
            "rating": "3.5556",
            "reviews": "9",
            "targetUrl": "/product/wishing-you-advent-calendar-P501351"
        },
        {
            "brandName": "Tatcha",
            "currentSku": {
                "badgeAltText": "Clean at Sephora",
                "biExclusiveLevel": "none",
                "imageAltText": "Tatcha - The Dewy Skin Cream Plumping & Hydrating Moisturizer",
                "isAppExclusive": false,
                "isBI": false,
                "isBest": false,
                "isFirstAccess": false,
                "isLimitedEdition": false,
                "isLimitedTimeOffer": false,
                "isNatural": false,
                "isNew": false,
                "isOnlineOnly": false,
                "isOrganic": false,
                "isSephoraExclusive": true,
                "listPrice": "$22.00 - $82.00",
                "salePrice": "",
                "skuId": "2181006",
                "skuImages": {
                    "image135": "https://www.sephora.com/productimages/sku/s2181006-main-grid.jpg?pb=2020-03-sephora-clean-2019",
                    "image162": "https://www.sephora.com/productimages/sku/s2181006-162.jpg?pb=2020-03-sephora-clean-2019",
                    "image250": "https://www.sephora.com/productimages/sku/s2181006-main-hero.jpg?pb=2020-03-sephora-clean-2019",
                    "image42": "https://www.sephora.com/productimages/sku/s2181006-main-thumb.jpg?pb=2020-03-sephora-clean-2019",
                    "image450": "https://www.sephora.com/productimages/sku/s2181006-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
                    "image62": "https://www.sephora.com/productimages/sku/s2181006-main-Lthumb.jpg?pb=2020-03-sephora-clean-2019",
                    "image97": "https://www.sephora.com/productimages/sku/s2181006-main-Sgrid.jpg?pb=2020-03-sephora-clean-2019"
                },
                "skuType": "Standard"
            },
            "displayName": "The Dewy Skin Cream Plumping & Hydrating Moisturizer",
            "heroImage": "https://www.sephora.com/productimages/sku/s2181006-main-grid.jpg?pb=2020-03-sephora-clean-2019",
            "heroImageAltText": "Clean at Sephora",
            "image135": "https://www.sephora.com/productimages/sku/s2181006-main-grid.jpg?pb=2020-03-sephora-clean-2019",
            "image250": "https://www.sephora.com/productimages/sku/s2181006-main-hero.jpg?pb=2020-03-sephora-clean-2019",
            "image450": "https://www.sephora.com/productimages/sku/s2181006-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
            "productId": "P441101",
            "rating": "4.1414",
            "reviews": "2928",
            "targetUrl": "/product/the-dewy-skin-cream-P441101"
        },
        {
            "brandName": "Tatcha",
            "currentSku": {
                "badgeAltText": "Clean at Sephora",
                "biExclusiveLevel": "none",
                "imageAltText": "Tatcha - Dewy Skin Essentials Set",
                "isAppExclusive": false,
                "isBI": false,
                "isBest": false,
                "isFirstAccess": false,
                "isLimitedEdition": true,
                "isLimitedTimeOffer": false,
                "isNatural": false,
                "isNew": false,
                "isOnlineOnly": false,
                "isOrganic": false,
                "isSephoraExclusive": true,
                "listPrice": "$82.00",
                "salePrice": "",
                "skuId": "2618528",
                "skuImages": {
                    "image135": "https://www.sephora.com/productimages/sku/s2618528-main-grid.jpg?pb=2020-03-sephora-clean-2019",
                    "image162": "https://www.sephora.com/productimages/sku/s2618528-162.jpg?pb=2020-03-sephora-clean-2019",
                    "image250": "https://www.sephora.com/productimages/sku/s2618528-main-hero.jpg?pb=2020-03-sephora-clean-2019",
                    "image42": "https://www.sephora.com/productimages/sku/s2618528-main-thumb.jpg?pb=2020-03-sephora-clean-2019",
                    "image450": "https://www.sephora.com/productimages/sku/s2618528-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
                    "image62": "https://www.sephora.com/productimages/sku/s2618528-main-Lthumb.jpg?pb=2020-03-sephora-clean-2019",
                    "image97": "https://www.sephora.com/productimages/sku/s2618528-main-Sgrid.jpg?pb=2020-03-sephora-clean-2019"
                },
                "skuType": "Standard",
                "valuePrice": "$117.00"
            },
            "displayName": "Dewy Skin Essentials Set",
            "heroImage": "https://www.sephora.com/productimages/sku/s2618528-main-grid.jpg?pb=2020-03-sephora-clean-2019",
            "image135": "https://www.sephora.com/productimages/sku/s2618528-main-grid.jpg?pb=2020-03-sephora-clean-2019",
            "image250": "https://www.sephora.com/productimages/sku/s2618528-main-hero.jpg?pb=2020-03-sephora-clean-2019",
            "image450": "https://www.sephora.com/productimages/sku/s2618528-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
            "productId": "P501290",
            "rating": "4.625",
            "reviews": "16",
            "targetUrl": "/product/dewy-skin-essentials-set-P501290"
        },
        {
            "brandName": "Dior",
            "currentSku": {
                "biExclusiveLevel": "none",
                "imageAltText": "Dior - Lip Glow Oil",
                "isAppExclusive": false,
                "isBI": false,
                "isBest": false,
                "isFirstAccess": false,
                "isLimitedEdition": false,
                "isLimitedTimeOffer": false,
                "isNatural": false,
                "isNew": false,
                "isOnlineOnly": false,
                "isOrganic": false,
                "isSephoraExclusive": true,
                "listPrice": "$38.00",
                "salePrice": "",
                "skuId": "2449130",
                "skuImages": {
                    "image135": "https://www.sephora.com/productimages/sku/s2449130-main-grid.jpg",
                    "image162": "https://www.sephora.com/productimages/sku/s2449130-162.jpg",
                    "image250": "https://www.sephora.com/productimages/sku/s2449130-main-hero.jpg",
                    "image42": "https://www.sephora.com/productimages/sku/s2449130-main-thumb.jpg",
                    "image450": "https://www.sephora.com/productimages/sku/s2449130-main-Lhero.jpg",
                    "image62": "https://www.sephora.com/productimages/sku/s2449130-main-Lthumb.jpg",
                    "image97": "https://www.sephora.com/productimages/sku/s2449130-main-Sgrid.jpg"
                },
                "skuType": "Standard"
            },
            "displayName": "Lip Glow Oil",
            "heroImage": "https://www.sephora.com/productimages/sku/s2449130-main-grid.jpg",
            "image135": "https://www.sephora.com/productimages/sku/s2449130-main-grid.jpg",
            "image250": "https://www.sephora.com/productimages/sku/s2449130-main-hero.jpg",
            "image450": "https://www.sephora.com/productimages/sku/s2449130-main-Lhero.jpg",
            "moreColors": 7,
            "productId": "P453814",
            "rating": "4.138",
            "reviews": "819",
            "targetUrl": "/product/dior-lip-glow-oil-P453814"
        },
        {
            "brandName": "Dior",
            "currentSku": {
                "biExclusiveLevel": "none",
                "imageAltText": "Dior - Dior Addict Lip Glow",
                "isAppExclusive": false,
                "isBI": false,
                "isBest": false,
                "isFirstAccess": false,
                "isLimitedEdition": false,
                "isLimitedTimeOffer": false,
                "isNatural": false,
                "isNew": false,
                "isOnlineOnly": true,
                "isOrganic": false,
                "isSephoraExclusive": true,
                "listPrice": "$38.00",
                "salePrice": "",
                "skuId": "2579340",
                "skuImages": {
                    "image135": "https://www.sephora.com/productimages/sku/s2579340-main-grid.jpg",
                    "image162": "https://www.sephora.com/productimages/sku/s2579340-162.jpg",
                    "image250": "https://www.sephora.com/productimages/sku/s2579340-main-hero.jpg",
                    "image42": "https://www.sephora.com/productimages/sku/s2579340-main-thumb.jpg",
                    "image450": "https://www.sephora.com/productimages/sku/s2579340-main-Lhero.jpg",
                    "image62": "https://www.sephora.com/productimages/sku/s2579340-main-Lthumb.jpg",
                    "image97": "https://www.sephora.com/productimages/sku/s2579340-main-Sgrid.jpg"
                },
                "skuType": "Standard"
            },
            "displayName": "Dior Addict Lip Glow",
            "heroImage": "https://www.sephora.com/productimages/sku/s2579340-main-grid.jpg",
            "image135": "https://www.sephora.com/productimages/sku/s2579340-main-grid.jpg",
            "image250": "https://www.sephora.com/productimages/sku/s2579340-main-hero.jpg",
            "image450": "https://www.sephora.com/productimages/sku/s2579340-main-Lhero.jpg",
            "moreColors": 13,
            "productId": "P236816",
            "rating": "4.3694",
            "reviews": "1960",
            "targetUrl": "/product/dior-addict-lip-glow-color-reviver-balm-P236816"
        },
        {
            "brandName": "Sol de Janeiro",
            "currentSku": {
                "biExclusiveLevel": "none",
                "imageAltText": "Sol de Janeiro - Brazilian Bum Bum Body Cream",
                "isAppExclusive": false,
                "isBI": false,
                "isBest": false,
                "isFirstAccess": false,
                "isLimitedEdition": false,
                "isLimitedTimeOffer": false,
                "isNatural": false,
                "isNew": false,
                "isOnlineOnly": false,
                "isOrganic": false,
                "isSephoraExclusive": true,
                "listPrice": "$22.00 - $85.00",
                "salePrice": "",
                "skuId": "1802412",
                "skuImages": {
                    "image135": "https://www.sephora.com/productimages/sku/s1802412-main-grid.jpg",
                    "image162": "https://www.sephora.com/productimages/sku/s1802412-162.jpg",
                    "image250": "https://www.sephora.com/productimages/sku/s1802412-main-hero.jpg",
                    "image42": "https://www.sephora.com/productimages/sku/s1802412-main-thumb.jpg",
                    "image450": "https://www.sephora.com/productimages/sku/s1802412-main-Lhero.jpg",
                    "image62": "https://www.sephora.com/productimages/sku/s1802412-main-Lthumb.jpg",
                    "image97": "https://www.sephora.com/productimages/sku/s1802412-main-Sgrid.jpg"
                },
                "skuType": "Standard"
            },
            "displayName": "Brazilian Bum Bum Body Cream",
            "heroImage": "https://www.sephora.com/productimages/sku/s1802412-main-grid.jpg",
            "image135": "https://www.sephora.com/productimages/sku/s1802412-main-grid.jpg",
            "image250": "https://www.sephora.com/productimages/sku/s1802412-main-hero.jpg",
            "image450": "https://www.sephora.com/productimages/sku/s1802412-main-Lhero.jpg",
            "productId": "P406080",
            "rating": "4.3047",
            "reviews": "8462",
            "targetUrl": "/product/brazilian-bum-bum-cream-P406080"
        },
      
      ]
      
      
      
    
      return (
        <Box
        width="50%"
        border="1px solid"
        >
          <SliderForAll sliderimg={data}/>
    </Box>
      );
    }
    