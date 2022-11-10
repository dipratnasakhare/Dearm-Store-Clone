import { MenuButton, Menu, MenuList, MenuItem, Box, Text } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";

export default function MenuButtondata(menu) {


let ShopByPrice = ['Gift Under $50','Gift Under $100','Gift Under $200','Luxury Gift Over $100']

  let ShopByCategory = ['Dermstore Exclusives','BeautyFIX', 'Skin Care Gifts','Hair Care Gifts','Tools & Devices Gifts','Clearance']


  let PopularBrand = ["New Arrivals","Bestsellers", "Kits & Sets","Men's Body Care","Top Rated","Sale"]
  return (
    <Box>
      <Menu position="s">
        <MenuButton position="s">
          {menu}
          {/* <ChevronDownIcon /> */}
        </MenuButton>
        <MenuList color="black">
          <Box eight="5rem"  display="flex">

            <Box>
              <MenuItem>
              <Text as='b'> </Text>
             </MenuItem>
             {ShopByPrice.map((ele)=>{
                return( <MenuItem>{ele}</MenuItem>)
              })}
            </Box>

            <Box>
              <MenuItem>
              <Text as="b">Shop By Category</Text>
              </MenuItem>
              {ShopByCategory.map((ele)=>{
                return( <MenuItem>{ele}</MenuItem>)
              })}
           </Box>

            <Box>
              <MenuItem>
              <Text as="b">Popular Brand</Text>
              </MenuItem>
              {PopularBrand.map((ele)=>{
                return(<MenuItem>{ele}</MenuItem>)
              })}
            </Box>
            
          </Box>
        </MenuList>
      </Menu>
    </Box>
  );
}
