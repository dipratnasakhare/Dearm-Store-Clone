import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Th,
  Tbody,
  Tr,
  Tfoot,
  Td,
  Icon,
  Button,
  Heading,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { AuthTableData } from "../../ContextAPI/AuthTableData"
import TableRow from "./TableRow/TableRow";

export default function CartTable() {
  let [allTotal, setAllTotal] = useState(0);

  const {setTableList, tableList} = useContext(AuthTableData)


  let arr = [
    {
      brandName: "SEPHORA COLLECTION",
      currentSku: {
        biExclusiveLevel: "none",
        imageAltText: "SEPHORA COLLECTION - Wishing You Advent Calendar",
        isAppExclusive: false,
        isBI: false,
        isBest: false,
        isFirstAccess: false,
        isLimitedEdition: true,
        isLimitedTimeOffer: false,
        isNatural: false,
        isNew: true,
        isOnlineOnly: false,
        isOrganic: false,
        isSephoraExclusive: true,
        listPrice: "$45.00",
        salePrice: "",
        skuId: "2579720",
        skuImages: {
          image135:
            "https://www.sephora.com/productimages/sku/s2579720-main-grid.jpg",
          image162:
            "https://www.sephora.com/productimages/sku/s2579720-162.jpg",
          image250:
            "https://www.sephora.com/productimages/sku/s2579720-main-hero.jpg",
          image42:
            "https://www.sephora.com/productimages/sku/s2579720-main-thumb.jpg",
          image450:
            "https://www.sephora.com/productimages/sku/s2579720-main-Lhero.jpg",
          image62:
            "https://www.sephora.com/productimages/sku/s2579720-main-Lthumb.jpg",
          image97:
            "https://www.sephora.com/productimages/sku/s2579720-main-Sgrid.jpg",
        },
        skuType: "Standard",
        valuePrice: "$105.00",
      },
      displayName: "Wishing You Advent Calendar",
      heroImage:
        "https://www.sephora.com/productimages/sku/s2579720-main-grid.jpg",
      image135:
        "https://www.sephora.com/productimages/sku/s2579720-main-grid.jpg",
      image250:
        "https://www.sephora.com/productimages/sku/s2579720-main-hero.jpg",
      image450:
        "https://www.sephora.com/productimages/sku/s2579720-main-Lhero.jpg",
      productId: "P501351",
      rating: "3.5556",
      reviews: "9",
      targetUrl: "/product/wishing-you-advent-calendar-P501351",
    },
    {
      brandName: "Tatcha",
      currentSku: {
        badgeAltText: "Clean at Sephora",
        biExclusiveLevel: "none",
        imageAltText:
          "Tatcha - The Dewy Skin Cream Plumping & Hydrating Moisturizer",
        isAppExclusive: false,
        isBI: false,
        isBest: false,
        isFirstAccess: false,
        isLimitedEdition: false,
        isLimitedTimeOffer: false,
        isNatural: false,
        isNew: false,
        isOnlineOnly: false,
        isOrganic: false,
        isSephoraExclusive: true,
        listPrice: "$22.00 - $82.00",
        salePrice: "",
        skuId: "2181006",
        skuImages: {
          image135:
            "https://www.sephora.com/productimages/sku/s2181006-main-grid.jpg?pb=2020-03-sephora-clean-2019",
          image162:
            "https://www.sephora.com/productimages/sku/s2181006-162.jpg?pb=2020-03-sephora-clean-2019",
          image250:
            "https://www.sephora.com/productimages/sku/s2181006-main-hero.jpg?pb=2020-03-sephora-clean-2019",
          image42:
            "https://www.sephora.com/productimages/sku/s2181006-main-thumb.jpg?pb=2020-03-sephora-clean-2019",
          image450:
            "https://www.sephora.com/productimages/sku/s2181006-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
          image62:
            "https://www.sephora.com/productimages/sku/s2181006-main-Lthumb.jpg?pb=2020-03-sephora-clean-2019",
          image97:
            "https://www.sephora.com/productimages/sku/s2181006-main-Sgrid.jpg?pb=2020-03-sephora-clean-2019",
        },
        skuType: "Standard",
      },
      displayName: "The Dewy Skin Cream Plumping & Hydrating Moisturizer",
      heroImage:
        "https://www.sephora.com/productimages/sku/s2181006-main-grid.jpg?pb=2020-03-sephora-clean-2019",
      heroImageAltText: "Clean at Sephora",
      image135:
        "https://www.sephora.com/productimages/sku/s2181006-main-grid.jpg?pb=2020-03-sephora-clean-2019",
      image250:
        "https://www.sephora.com/productimages/sku/s2181006-main-hero.jpg?pb=2020-03-sephora-clean-2019",
      image450:
        "https://www.sephora.com/productimages/sku/s2181006-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
      productId: "P441101",
      rating: "4.1414",
      reviews: "2928",
      targetUrl: "/product/the-dewy-skin-cream-P441101",
    },
    {
      brandName: "Tatcha",
      currentSku: {
        badgeAltText: "Clean at Sephora",
        biExclusiveLevel: "none",
        imageAltText: "Tatcha - Dewy Skin Essentials Set",
        isAppExclusive: false,
        isBI: false,
        isBest: false,
        isFirstAccess: false,
        isLimitedEdition: true,
        isLimitedTimeOffer: false,
        isNatural: false,
        isNew: false,
        isOnlineOnly: false,
        isOrganic: false,
        isSephoraExclusive: true,
        listPrice: "$82.00",
        salePrice: "",
        skuId: "2618528",
        skuImages: {
          image135:
            "https://www.sephora.com/productimages/sku/s2618528-main-grid.jpg?pb=2020-03-sephora-clean-2019",
          image162:
            "https://www.sephora.com/productimages/sku/s2618528-162.jpg?pb=2020-03-sephora-clean-2019",
          image250:
            "https://www.sephora.com/productimages/sku/s2618528-main-hero.jpg?pb=2020-03-sephora-clean-2019",
          image42:
            "https://www.sephora.com/productimages/sku/s2618528-main-thumb.jpg?pb=2020-03-sephora-clean-2019",
          image450:
            "https://www.sephora.com/productimages/sku/s2618528-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
          image62:
            "https://www.sephora.com/productimages/sku/s2618528-main-Lthumb.jpg?pb=2020-03-sephora-clean-2019",
          image97:
            "https://www.sephora.com/productimages/sku/s2618528-main-Sgrid.jpg?pb=2020-03-sephora-clean-2019",
        },
        skuType: "Standard",
        valuePrice: "$117.00",
      },
      displayName: "Dewy Skin Essentials Set",
      heroImage:
        "https://www.sephora.com/productimages/sku/s2618528-main-grid.jpg?pb=2020-03-sephora-clean-2019",
      image135:
        "https://www.sephora.com/productimages/sku/s2618528-main-grid.jpg?pb=2020-03-sephora-clean-2019",
      image250:
        "https://www.sephora.com/productimages/sku/s2618528-main-hero.jpg?pb=2020-03-sephora-clean-2019",
      image450:
        "https://www.sephora.com/productimages/sku/s2618528-main-Lhero.jpg?pb=2020-03-sephora-clean-2019",
      productId: "P501290",
      rating: "4.625",
      reviews: "16",
      targetUrl: "/product/dewy-skin-essentials-set-P501290",
    },
    {
      brandName: "Dior",
      currentSku: {
        biExclusiveLevel: "none",
        imageAltText: "Dior - Lip Glow Oil",
        isAppExclusive: false,
        isBI: false,
        isBest: false,
        isFirstAccess: false,
        isLimitedEdition: false,
        isLimitedTimeOffer: false,
        isNatural: false,
        isNew: false,
        isOnlineOnly: false,
        isOrganic: false,
        isSephoraExclusive: true,
        listPrice: "$38.00",
        salePrice: "",
        skuId: "2449130",
        skuImages: {
          image135:
            "https://www.sephora.com/productimages/sku/s2449130-main-grid.jpg",
          image162:
            "https://www.sephora.com/productimages/sku/s2449130-162.jpg",
          image250:
            "https://www.sephora.com/productimages/sku/s2449130-main-hero.jpg",
          image42:
            "https://www.sephora.com/productimages/sku/s2449130-main-thumb.jpg",
          image450:
            "https://www.sephora.com/productimages/sku/s2449130-main-Lhero.jpg",
          image62:
            "https://www.sephora.com/productimages/sku/s2449130-main-Lthumb.jpg",
          image97:
            "https://www.sephora.com/productimages/sku/s2449130-main-Sgrid.jpg",
        },
        skuType: "Standard",
      },
      displayName: "Lip Glow Oil",
      heroImage:
        "https://www.sephora.com/productimages/sku/s2449130-main-grid.jpg",
      image135:
        "https://www.sephora.com/productimages/sku/s2449130-main-grid.jpg",
      image250:
        "https://www.sephora.com/productimages/sku/s2449130-main-hero.jpg",
      image450:
        "https://www.sephora.com/productimages/sku/s2449130-main-Lhero.jpg",
      moreColors: 7,
      productId: "P453814",
      rating: "4.138",
      reviews: "819",
      targetUrl: "/product/dior-lip-glow-oil-P453814",
    },
  ];

  return (
    <TableContainer>
      <Table variant="simple" mt="5rem" mb="5rem">
        <TableCaption>
          <Button borderRadius={"0px"} bg="black" _hovar={"none"} color="white">CHECKOUT SECURELY NOW</Button>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>items</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Subtotal</Th>
            <Th>Remove</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableRow allTotal={allTotal} setAllTotal={setAllTotal} arr={tableList} />
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>
              {" "}
              <Flex m="5rem">
                <Image
                  width="50px"
                  src="https://as1.ftcdn.net/v2/jpg/03/95/04/78/1000_F_395047812_kmXO1JBQKNqWeOQSCTvagAm30wnaWkz7.jpg"
                  alt="star"
                />
                <Heading as="h5" size="sm">
                  Rewards Members earn {allTotal} points on this order
                </Heading>
              </Flex>
            </Th>
            <Th isNumeric>
              {" "}
              <Heading>Total {allTotal}</Heading>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
