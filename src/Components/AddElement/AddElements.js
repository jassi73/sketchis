import { useState, useEffect } from "react";
import {
  VStack,
  Box,
  Button,
  useColorMode,
  IconButton,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { withRouter, Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import Element from "./Element";
import Elements from "./Elements";
import EmptyElement from "./EmptyElement";
import AddElement from "./AddElement";

const initialElement = [
  {
    id: 1,
    text: "Hello",
  },
];
const VARIANT_COLOR = "teal";
function AddElements() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [elements, setElements] = useState(
    () => JSON.parse(localStorage.getItem("element")) || []
  ); //initialElement

  useEffect(() => {
    localStorage.setItem("element", JSON.stringify(elements));
  }, [elements]);

  const deleteElement = (id) => {
    const updatedElement = elements.filter((element) => element.id !== id);
    setElements(updatedElement);
  };

  return (
    <VStack>
      <Box
        display="flex"
        p={1}
        justifyContent="flex-end"
        w="full"
        mt="2"
        mr="8"
      >
        <Link to="/">
          <Button
            variantColor={VARIANT_COLOR}
            width="full"
            colorScheme="blue"
            rounded="full"
            size="sm"
            onClick={() => {
              localStorage.removeItem("isAuthenticated");
            }}
          >
            Logout
          </Button>
        </Link>
      </Box>
      <Box display="flex" p={3} justifyContent="center">
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound={true}
          mr={5}
          onClick={toggleColorMode}
        />
        <Heading
          bgGradient="linear(to-l, blue.500, red.200, gray.500)"
          bgClip="text"
        >
          Simple Portal
        </Heading>
      </Box>
      <Box
        w="100%"
        mt="16"
        maxW={{ base: "80vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      >
        <AddElement elements={elements} setElements={setElements} />
        <Elements elements={elements} deleteElement={deleteElement} />
      </Box>
    </VStack>
  );
}

export default withRouter(AddElements);
