import {
  TableContainer,
  Table,
  TableCaption,
  Th,
  Tr,
  Tfoot,
  Box,
  Button,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { AuthTableData } from "../../ContextAPI/AuthTableData";
import TableRow from "./TableRow/TableRow";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function CartTable() {
  let [allTotal, setAllTotal] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { tableList, setTableList, newFunRemovedata } =
    useContext(AuthTableData);

  let handeldelate = (id) => {
    newFunRemovedata(id);
  };


  
  

  return (
    <Box m="auto" mt="5rem" mb="5rem" w="90%" border={"1px solid"}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Order Is Placed</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={() => setTableList([])} variant="ghost">
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <TableContainer m="auto">
        <Table>
          <TableCaption>
            <Button
              onClick={onOpen}
              borderRadius={"0px"}
              bg="black"
              _hovar={"none"}
              color="white"
            >
              CHECKOUT SECURELY NOW
            </Button>
          </TableCaption>
          <Box as="thead" m="auto">
            <Tr>
              <Box as="th">items</Box>
              <Box as="th" m="auto">
                Price
              </Box>
              <Th>Quantity</Th>
              <Th>Subtotal</Th>
              <Th>Remove</Th>
            </Tr>
          </Box>
          <Box as="tbody">
            <TableRow
              handeldelate={handeldelate}
              allTotal={allTotal}
              setAllTotal={setAllTotal}
              arr={tableList}
            />
          </Box>

          <Tfoot border="1px solid">
            <Tr>
              <Th>
                {" "}
                {tableList.length === 0 ? (
                  ""
                ) : (
                  <Flex m="5rem" display={["none", "flex"]}>
                    <Image
                      width="15px"
                      src="https://as1.ftcdn.net/v2/jpg/03/95/04/78/1000_F_395047812_kmXO1JBQKNqWeOQSCTvagAm30wnaWkz7.jpg"
                      alt="star"
                    />
                    <Heading as="h5" size="sm">
                      Rewards Members earn {allTotal} points on this order
                    </Heading>
                  </Flex>
                )}
              </Th>
              <Th isNumeric>
                {tableList.length === 0 ? (
                  <Heading as="h2" size="xl">
                    No Product Precent In Your Cart
                  </Heading>
                ) : (
                   <Heading>Total ${allTotal}</Heading>
                )}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}
