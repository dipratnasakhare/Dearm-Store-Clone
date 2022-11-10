import { Heading, Box } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderForAll from "../Page/SliderForall";

export default function BestsellersSlider() {
  

  let sliderimg = [
    {
        "brandName": "Augustinus Bader",
        "currentSku": {
            "biExclusiveLevel": "none",
            "imageAltText": "Augustinus Bader - The Daily Essential Duo The Cream",
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
            "listPrice": "$295.00",
            "salePrice": "",
            "skuId": "2623585",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s2623585-main-grid.jpg",
                "image162": "https://www.sephora.com/productimages/sku/s2623585-162.jpg",
                "image250": "https://www.sephora.com/productimages/sku/s2623585-main-hero.jpg",
                "image42": "https://www.sephora.com/productimages/sku/s2623585-main-thumb.jpg",
                "image450": "https://www.sephora.com/productimages/sku/s2623585-main-Lhero.jpg",
                "image62": "https://www.sephora.com/productimages/sku/s2623585-main-Lthumb.jpg",
                "image97": "https://www.sephora.com/productimages/sku/s2623585-main-Sgrid.jpg"
            },
            "skuType": "Standard",
            "valuePrice": "$350.00"
        },
        "displayName": "The Daily Essential Duo The Cream",
        "heroImage": "https://www.sephora.com/productimages/sku/s2623585-main-grid.jpg",
        "image135": "https://www.sephora.com/productimages/sku/s2623585-main-grid.jpg",
        "image250": "https://www.sephora.com/productimages/sku/s2623585-main-hero.jpg",
        "image450": "https://www.sephora.com/productimages/sku/s2623585-main-Lhero.jpg",
        "productId": "P502235",
        "rating": "5.0",
        "reviews": "1",
        "targetUrl": "/product/the-daily-essential-duo-cream-P502235"
    },
    {
        "brandName": "The Ordinary",
        "currentSku": {
            "biExclusiveLevel": "none",
            "imageAltText": "The Ordinary - Multi-Peptide Serum for Hair Density",
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
            "isSephoraExclusive": false,
            "listPrice": "$13.00 - $17.90",
            "salePrice": "",
            "skuId": "2210722",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s2210722-main-grid.jpg",
                "image162": "https://www.sephora.com/productimages/sku/s2210722-162.jpg",
                "image250": "https://www.sephora.com/productimages/sku/s2210722-main-hero.jpg",
                "image42": "https://www.sephora.com/productimages/sku/s2210722-main-thumb.jpg",
                "image450": "https://www.sephora.com/productimages/sku/s2210722-main-Lhero.jpg",
                "image62": "https://www.sephora.com/productimages/sku/s2210722-main-Lthumb.jpg",
                "image97": "https://www.sephora.com/productimages/sku/s2210722-main-Sgrid.jpg"
            },
            "skuType": "Standard"
        },
        "displayName": "Multi-Peptide Serum for Hair Density",
        "heroImage": "https://www.sephora.com/productimages/sku/s2210722-main-grid.jpg",
        "image135": "https://www.sephora.com/productimages/sku/s2210722-main-grid.jpg",
        "image250": "https://www.sephora.com/productimages/sku/s2210722-main-hero.jpg",
        "image450": "https://www.sephora.com/productimages/sku/s2210722-main-Lhero.jpg",
        "productId": "P442831",
        "rating": "3.8972",
        "reviews": "1099",
        "targetUrl": "/product/multi-peptide-serum-for-hair-density-P442831?skuId=2210722"
    },
    {
        "brandName": "CLINIQUE",
        "currentSku": {
            "biExclusiveLevel": "none",
            "imageAltText": "CLINIQUE - Moisture Surge™ 100H Auto-Replenishing Hydrator Moisturizer",
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
            "isSephoraExclusive": false,
            "listPrice": "$15.00 - $82.00",
            "salePrice": "",
            "skuId": "2421709",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s2421709-main-grid.jpg",
                "image162": "https://www.sephora.com/productimages/sku/s2421709-162.jpg",
                "image250": "https://www.sephora.com/productimages/sku/s2421709-main-hero.jpg",
                "image42": "https://www.sephora.com/productimages/sku/s2421709-main-thumb.jpg",
                "image450": "https://www.sephora.com/productimages/sku/s2421709-main-Lhero.jpg",
                "image62": "https://www.sephora.com/productimages/sku/s2421709-main-Lthumb.jpg",
                "image97": "https://www.sephora.com/productimages/sku/s2421709-main-Sgrid.jpg"
            },
            "skuType": "Standard"
        },
        "displayName": "Moisture Surge™ 100H Auto-Replenishing Hydrator Moisturizer",
        "heroImage": "https://www.sephora.com/productimages/sku/s2421709-main-grid.jpg",
        "image135": "https://www.sephora.com/productimages/sku/s2421709-main-grid.jpg",
        "image250": "https://www.sephora.com/productimages/sku/s2421709-main-hero.jpg",
        "image450": "https://www.sephora.com/productimages/sku/s2421709-main-Lhero.jpg",
        "productId": "P468351",
        "rating": "4.2513",
        "reviews": "1695",
        "targetUrl": "/product/clinique-moisture-surge-trade-100-hour-auto-replenishing-hydrator-P468351?skuId=2421709"
    },
    {
        "brandName": "Shiseido",
        "currentSku": {
            "biExclusiveLevel": "none",
            "imageAltText": "Shiseido - Benefiance Wrinkle Smoothing Eye Cream",
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
            "isSephoraExclusive": false,
            "listPrice": "$64.00",
            "salePrice": "",
            "skuId": "2246650",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s2246650-main-grid.jpg",
                "image162": "https://www.sephora.com/productimages/sku/s2246650-162.jpg",
                "image250": "https://www.sephora.com/productimages/sku/s2246650-main-hero.jpg",
                "image42": "https://www.sephora.com/productimages/sku/s2246650-main-thumb.jpg",
                "image450": "https://www.sephora.com/productimages/sku/s2246650-main-Lhero.jpg",
                "image62": "https://www.sephora.com/productimages/sku/s2246650-main-Lthumb.jpg",
                "image97": "https://www.sephora.com/productimages/sku/s2246650-main-Sgrid.jpg"
            },
            "skuType": "Standard"
        },
        "displayName": "Benefiance Wrinkle Smoothing Eye Cream",
        "heroImage": "https://www.sephora.com/productimages/sku/s2246650-main-grid.jpg",
        "image135": "https://www.sephora.com/productimages/sku/s2246650-main-grid.jpg",
        "image250": "https://www.sephora.com/productimages/sku/s2246650-main-hero.jpg",
        "image450": "https://www.sephora.com/productimages/sku/s2246650-main-Lhero.jpg",
        "productId": "P448203",
        "rating": "4.3348",
        "reviews": "1410",
        "targetUrl": "/product/benefiance-wrinkle-smoothing-eye-cream-P448203"
    },
    {
        "brandName": "HAUS LABS BY LADY GAGA",
        "currentSku": {
            "badgeAltText": "Clean at Sephora",
            "biExclusiveLevel": "none",
            "imageAltText": "HAUS LABS BY LADY GAGA - PhD Hybrid Lip Oil",
            "isAppExclusive": false,
            "isBI": false,
            "isBest": false,
            "isFirstAccess": false,
            "isLimitedEdition": false,
            "isLimitedTimeOffer": false,
            "isNatural": false,
            "isNew": true,
            "isOnlineOnly": false,
            "isOrganic": false,
            "isSephoraExclusive": true,
            "listPrice": "$24.00",
            "salePrice": "",
            "skuId": "2571941",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s2571941-main-grid.jpg?pb=2020-03-sephora-clean-2019",
                "image162": "https://www.sephora.com/productimages/sku/s2571941-162.jpg?pb=2020-03-sephora-clean-2019",
                "image250": "https://www.sephora.com/productimages/sku/s2571941-main-hero.jpg?pb=2020-03-sephora-clean-2019",
                "image42": "https://www.sephora.com/productimages/sku/s2571941-main-thumb.jpg?pb=2020-03-sephora-clean-2019",
                "image450": "https://www.sephora.com/productimages/sku/s2571941-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
                "image62": "https://www.sephora.com/productimages/sku/s2571941-main-Lthumb.jpg?pb=2020-03-sephora-clean-2019",
                "image97": "https://www.sephora.com/productimages/sku/s2571941-main-Sgrid.jpg?pb=2020-03-sephora-clean-2019"
            },
            "skuType": "Standard"
        },
        "displayName": "PhD Hybrid Lip Oil",
        "heroImage": "https://www.sephora.com/productimages/sku/s2571941-main-grid.jpg?pb=2020-03-sephora-clean-2019",
        "image135": "https://www.sephora.com/productimages/sku/s2571941-main-grid.jpg?pb=2020-03-sephora-clean-2019",
        "image250": "https://www.sephora.com/productimages/sku/s2571941-main-hero.jpg?pb=2020-03-sephora-clean-2019",
        "image450": "https://www.sephora.com/productimages/sku/s2571941-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
        "moreColors": 4,
        "productId": "P500283",
        "rating": "4.4339",
        "reviews": "514",
        "targetUrl": "/product/phd-hybrid-lip-oil-P500283"
    },
    {
        "brandName": "Shiseido",
        "currentSku": {
            "biExclusiveLevel": "none",
            "imageAltText": "Shiseido - Ultimune Power Infusing Anti-Aging Serum",
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
            "isSephoraExclusive": false,
            "listPrice": "$75.00 - $140.00",
            "salePrice": "",
            "skuId": "2498640",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s2498640-main-grid.jpg",
                "image162": "https://www.sephora.com/productimages/sku/s2498640-162.jpg",
                "image250": "https://www.sephora.com/productimages/sku/s2498640-main-hero.jpg",
                "image42": "https://www.sephora.com/productimages/sku/s2498640-main-thumb.jpg",
                "image450": "https://www.sephora.com/productimages/sku/s2498640-main-Lhero.jpg",
                "image62": "https://www.sephora.com/productimages/sku/s2498640-main-Lthumb.jpg",
                "image97": "https://www.sephora.com/productimages/sku/s2498640-main-Sgrid.jpg"
            },
            "skuType": "Standard"
        },
        "displayName": "Ultimune Power Infusing Anti-Aging Serum",
        "heroImage": "https://www.sephora.com/productimages/sku/s2498640-main-grid.jpg",
        "image135": "https://www.sephora.com/productimages/sku/s2498640-main-grid.jpg",
        "image250": "https://www.sephora.com/productimages/sku/s2498640-main-hero.jpg",
        "image450": "https://www.sephora.com/productimages/sku/s2498640-main-Lhero.jpg",
        "productId": "P481161",
        "rating": "4.5561",
        "reviews": "865",
        "targetUrl": "/product/shiseido-ultimune-power-infusing-anti-aging-serum-P481161"
    },
    {
        "brandName": "L'Occitane",
        "currentSku": {
            "biExclusiveLevel": "none",
            "imageAltText": "L'Occitane - Best of L’Occitane Skincare Advent Calendar",
            "isAppExclusive": false,
            "isBI": false,
            "isBest": false,
            "isFirstAccess": false,
            "isLimitedEdition": true,
            "isLimitedTimeOffer": false,
            "isNatural": false,
            "isNew": true,
            "isOnlineOnly": true,
            "isOrganic": false,
            "isSephoraExclusive": false,
            "listPrice": "$80.00",
            "salePrice": "",
            "skuId": "2624229",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s2624229-main-grid.jpg",
                "image162": "https://www.sephora.com/productimages/sku/s2624229-162.jpg",
                "image250": "https://www.sephora.com/productimages/sku/s2624229-main-hero.jpg",
                "image42": "https://www.sephora.com/productimages/sku/s2624229-main-thumb.jpg",
                "image450": "https://www.sephora.com/productimages/sku/s2624229-main-Lhero.jpg",
                "image62": "https://www.sephora.com/productimages/sku/s2624229-main-Lthumb.jpg",
                "image97": "https://www.sephora.com/productimages/sku/s2624229-main-Sgrid.jpg"
            },
            "skuType": "Standard",
            "valuePrice": "$115.00"
        },
        "displayName": "Best of L’Occitane Skincare Advent Calendar",
        "heroImage": "https://www.sephora.com/productimages/sku/s2624229-main-grid.jpg",
        "image135": "https://www.sephora.com/productimages/sku/s2624229-main-grid.jpg",
        "image250": "https://www.sephora.com/productimages/sku/s2624229-main-hero.jpg",
        "image450": "https://www.sephora.com/productimages/sku/s2624229-main-Lhero.jpg",
        "productId": "P502735",
        "rating": "3.5",
        "reviews": "2",
        "targetUrl": "/product/l-occitane-advent-calendar-P502735"
    },
    {
        "brandName": "Dr. Dennis Gross Skincare",
        "currentSku": {
            "badgeAltText": "Clean at Sephora",
            "biExclusiveLevel": "none",
            "imageAltText": "Dr. Dennis Gross Skincare - Advanced Retinol + Ferulic Triple Correction Eye Serum",
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
            "isSephoraExclusive": false,
            "listPrice": "$69.00",
            "salePrice": "",
            "skuId": "2496420",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s2496420-main-grid.jpg?pb=2020-03-sephora-clean-2019",
                "image162": "https://www.sephora.com/productimages/sku/s2496420-162.jpg?pb=2020-03-sephora-clean-2019",
                "image250": "https://www.sephora.com/productimages/sku/s2496420-main-hero.jpg?pb=2020-03-sephora-clean-2019",
                "image42": "https://www.sephora.com/productimages/sku/s2496420-main-thumb.jpg?pb=2020-03-sephora-clean-2019",
                "image450": "https://www.sephora.com/productimages/sku/s2496420-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
                "image62": "https://www.sephora.com/productimages/sku/s2496420-main-Lthumb.jpg?pb=2020-03-sephora-clean-2019",
                "image97": "https://www.sephora.com/productimages/sku/s2496420-main-Sgrid.jpg?pb=2020-03-sephora-clean-2019"
            },
            "skuType": "Standard"
        },
        "displayName": "Advanced Retinol + Ferulic Triple Correction Eye Serum",
        "heroImage": "https://www.sephora.com/productimages/sku/s2496420-main-grid.jpg?pb=2020-03-sephora-clean-2019",
        "image135": "https://www.sephora.com/productimages/sku/s2496420-main-grid.jpg?pb=2020-03-sephora-clean-2019",
        "image250": "https://www.sephora.com/productimages/sku/s2496420-main-hero.jpg?pb=2020-03-sephora-clean-2019",
        "image450": "https://www.sephora.com/productimages/sku/s2496420-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
        "productId": "P474825",
        "rating": "4.5356",
        "reviews": "295",
        "targetUrl": "/product/dr-dennis-gross-skincare-advanced-retinol-ferulic-triple-correction-eye-serum-P474825"
    },
    {
        "brandName": "Paula's Choice",
        "currentSku": {
            "biExclusiveLevel": "none",
            "imageAltText": "Paula's Choice - C5 Super Boost Vitamin C Eye Cream",
            "isAppExclusive": false,
            "isBI": false,
            "isBest": false,
            "isFirstAccess": false,
            "isLimitedEdition": false,
            "isLimitedTimeOffer": false,
            "isNatural": false,
            "isNew": true,
            "isOnlineOnly": false,
            "isOrganic": false,
            "isSephoraExclusive": true,
            "listPrice": "$39.00",
            "salePrice": "",
            "skuId": "2574820",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s2574820-main-grid.jpg",
                "image162": "https://www.sephora.com/productimages/sku/s2574820-162.jpg",
                "image250": "https://www.sephora.com/productimages/sku/s2574820-main-hero.jpg",
                "image42": "https://www.sephora.com/productimages/sku/s2574820-main-thumb.jpg",
                "image450": "https://www.sephora.com/productimages/sku/s2574820-main-Lhero.jpg",
                "image62": "https://www.sephora.com/productimages/sku/s2574820-main-Lthumb.jpg",
                "image97": "https://www.sephora.com/productimages/sku/s2574820-main-Sgrid.jpg"
            },
            "skuType": "Standard"
        },
        "displayName": "C5 Super Boost Vitamin C Eye Cream",
        "heroImage": "https://www.sephora.com/productimages/sku/s2574820-main-grid.jpg",
        "image135": "https://www.sephora.com/productimages/sku/s2574820-main-grid.jpg",
        "image250": "https://www.sephora.com/productimages/sku/s2574820-main-hero.jpg",
        "image450": "https://www.sephora.com/productimages/sku/s2574820-main-Lhero.jpg",
        "productId": "P501288",
        "rating": "4.6968",
        "reviews": "310",
        "targetUrl": "/product/c5-super-boost-vitamin-c-eye-cream-P501288"
    },
    {
        "brandName": "Biossance",
        "currentSku": {
            "badgeAltText": "Clean plus planet positive",
            "biExclusiveLevel": "none",
            "imageAltText": "Biossance - Rapid Radiance Set",
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
            "listPrice": "$35.00",
            "salePrice": "",
            "skuId": "2555084",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s2555084-main-grid.jpg?pb=clean-planet-positive-badge-2021",
                "image162": "https://www.sephora.com/productimages/sku/s2555084-162.jpg?pb=clean-planet-positive-badge-2021",
                "image250": "https://www.sephora.com/productimages/sku/s2555084-main-hero.jpg?pb=clean-planet-positive-badge-2021",
                "image42": "https://www.sephora.com/productimages/sku/s2555084-main-thumb.jpg?pb=clean-planet-positive-badge-2021",
                "image450": "https://www.sephora.com/productimages/sku/s2555084-main-Lhero.jpg?pb=clean-planet-positive-badge-2021",
                "image62": "https://www.sephora.com/productimages/sku/s2555084-main-Lthumb.jpg?pb=clean-planet-positive-badge-2021",
                "image97": "https://www.sephora.com/productimages/sku/s2555084-main-Sgrid.jpg?pb=clean-planet-positive-badge-2021"
            },
            "skuType": "Standard",
            "valuePrice": "$85.00"
        },
        "displayName": "Rapid Radiance Set",
        "heroImage": "https://www.sephora.com/productimages/sku/s2555084-main-grid.jpg?pb=clean-planet-positive-badge-2021",
        "image135": "https://www.sephora.com/productimages/sku/s2555084-main-grid.jpg?pb=clean-planet-positive-badge-2021",
        "image250": "https://www.sephora.com/productimages/sku/s2555084-main-hero.jpg?pb=clean-planet-positive-badge-2021",
        "image450": "https://www.sephora.com/productimages/sku/s2555084-main-Lhero.jpg?pb=clean-planet-positive-badge-2021",
        "productId": "P480278",
        "rating": "4.3",
        "reviews": "100",
        "targetUrl": "/product/biossance-rapid-radiance-set-P480278"
    },
    {
        "brandName": "Kiehl's Since 1851",
        "currentSku": {
            "badgeAltText": "Clean at Sephora",
            "biExclusiveLevel": "none",
            "imageAltText": "Kiehl's Since 1851 - Creamy Eye Treatment with Avocado",
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
            "isSephoraExclusive": false,
            "listPrice": "$34.00 - $68.00",
            "salePrice": "",
            "skuId": "1988815",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s1988815-main-grid.jpg?pb=2020-03-sephora-clean-2019",
                "image162": "https://www.sephora.com/productimages/sku/s1988815-162.jpg?pb=2020-03-sephora-clean-2019",
                "image250": "https://www.sephora.com/productimages/sku/s1988815-main-hero.jpg?pb=2020-03-sephora-clean-2019",
                "image42": "https://www.sephora.com/productimages/sku/s1988815-main-thumb.jpg?pb=2020-03-sephora-clean-2019",
                "image450": "https://www.sephora.com/productimages/sku/s1988815-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
                "image62": "https://www.sephora.com/productimages/sku/s1988815-main-Lthumb.jpg?pb=2020-03-sephora-clean-2019",
                "image97": "https://www.sephora.com/productimages/sku/s1988815-main-Sgrid.jpg?pb=2020-03-sephora-clean-2019"
            },
            "skuType": "Standard"
        },
        "displayName": "Creamy Eye Treatment with Avocado",
        "heroImage": "https://www.sephora.com/productimages/sku/s1988815-main-grid.jpg?pb=2020-03-sephora-clean-2019",
        "image135": "https://www.sephora.com/productimages/sku/s1988815-main-grid.jpg?pb=2020-03-sephora-clean-2019",
        "image250": "https://www.sephora.com/productimages/sku/s1988815-main-hero.jpg?pb=2020-03-sephora-clean-2019",
        "image450": "https://www.sephora.com/productimages/sku/s1988815-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
        "productId": "P422000",
        "rating": "4.0142",
        "reviews": "1195",
        "targetUrl": "/product/creamy-eye-treatment-with-avocado-P422000"
    },
    {
        "brandName": "La Mer",
        "currentSku": {
            "biExclusiveLevel": "none",
            "imageAltText": "La Mer - The Renewal Oil",
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
            "isSephoraExclusive": false,
            "listPrice": "$145.00 - $270.00",
            "salePrice": "",
            "skuId": "1932649",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s1932649-main-grid.jpg",
                "image162": "https://www.sephora.com/productimages/sku/s1932649-162.jpg",
                "image250": "https://www.sephora.com/productimages/sku/s1932649-main-hero.jpg",
                "image42": "https://www.sephora.com/productimages/sku/s1932649-main-thumb.jpg",
                "image450": "https://www.sephora.com/productimages/sku/s1932649-main-Lhero.jpg",
                "image62": "https://www.sephora.com/productimages/sku/s1932649-main-Lthumb.jpg",
                "image97": "https://www.sephora.com/productimages/sku/s1932649-main-Sgrid.jpg"
            },
            "skuType": "Standard"
        },
        "displayName": "The Renewal Oil",
        "heroImage": "https://www.sephora.com/productimages/sku/s1932649-main-grid.jpg",
        "image135": "https://www.sephora.com/productimages/sku/s1932649-main-grid.jpg",
        "image250": "https://www.sephora.com/productimages/sku/s1932649-main-hero.jpg",
        "image450": "https://www.sephora.com/productimages/sku/s1932649-main-Lhero.jpg",
        "productId": "P417241",
        "rating": "4.1471",
        "reviews": "68",
        "targetUrl": "/product/the-renewal-oil-P417241"
    },
    {
        "brandName": "Paula's Choice",
        "currentSku": {
            "biExclusiveLevel": "none",
            "imageAltText": "Paula's Choice - Mini Skin Perfecting 2% BHA Liquid Exfoliant",
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
            "isSephoraExclusive": false,
            "listPrice": "$13.00",
            "salePrice": "",
            "skuId": "2421394",
            "skuImages": {
                "image135": "https://www.sephora.com/productimages/sku/s2421394-main-grid.jpg",
                "image162": "https://www.sephora.com/productimages/sku/s2421394-162.jpg",
                "image250": "https://www.sephora.com/productimages/sku/s2421394-main-hero.jpg",
                "image42": "https://www.sephora.com/productimages/sku/s2421394-main-thumb.jpg",
                "image450": "https://www.sephora.com/productimages/sku/s2421394-main-Lhero.jpg",
                "image62": "https://www.sephora.com/productimages/sku/s2421394-main-Lthumb.jpg",
                "image97": "https://www.sephora.com/productimages/sku/s2421394-main-Sgrid.jpg"
            },
            "skuType": "Standard"
        },
        "displayName": "Mini Skin Perfecting 2% BHA Liquid Exfoliant",
        "heroImage": "https://www.sephora.com/productimages/sku/s2421394-main-grid.jpg",
        "image135": "https://www.sephora.com/productimages/sku/s2421394-main-grid.jpg",
        "image250": "https://www.sephora.com/productimages/sku/s2421394-main-hero.jpg",
        "image450": "https://www.sephora.com/productimages/sku/s2421394-main-Lhero.jpg",
        "productId": "P469503",
        "rating": "4.3225",
        "reviews": "338",
        "targetUrl": "/product/paula-s-choice-mini-skin-perfecting-2-bha-liquid-exfoliant-P469503"
    },
  ]
  return (
    <>
    <SliderForAll sliderimg={sliderimg} size={4}/>


    




</>












  );
}
