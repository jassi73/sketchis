import { useState, useEffect } from "react";
import {
  VStack,
  Box,
  Button,
  useColorMode,
  IconButton,
  Heading,
  Divider,
  HStack,
  Input,
  useToast,
} from "@chakra-ui/react";
import {  Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import Elements from "./Elements";
import AddElement from "./AddElement";
import { ExportToCsv } from "export-to-csv";

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

  const [query, setQuery] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchElements, setSearchElements] = useState([]);

  useEffect(() => {
    localStorage.setItem("element", JSON.stringify(elements));
  }, [elements]);

  const deleteElement = (id) => {
    const updatedElement = elements.filter((element) => element.id !== id);
    setElements(updatedElement);
  };
  const csvReport = {
    fileName: "Report.csv",
    elements: elements,
  };

  const sortHanlder = () => {
    let sortedElements = elements.sort((a, b) => {
      if (a.text < b.text) {
        return -1;
      }
      if (a.text > b.text) {
        return 1;
      }
      return 0;
    });
    setElements([...sortedElements]);
  };

  console.log(elements);

  const searchHandler = () => {
    let filteredData = elements.filter((item) => item.text.includes(query));
    console.log("filteredData", filteredData);
    setSearchElements(filteredData);
    setSearchClicked(true);
  };

  useEffect(() => {
    if (query.length === 0) {
      setSearchClicked(false);
    }
  }, [query]);

  const exportHandler = () => {
    const options = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      showTitle: true,
      title: "My Awesome CSV",
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };

    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(elements);
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
        <HStack p="2">
          <Input
            variant="filled"
            placeholder="Search Elements"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button colorScheme="blue" px={7} onClick={searchHandler}>
            Search
          </Button>
        </HStack>
        <HStack p="2" justifyContent="center">
          <Button colorScheme="blue" px={8} onClick={sortHanlder}>
            Sort The Elements
          </Button>
          <Button colorScheme="blue" px={8} onClick={exportHandler}>
            Export
          </Button>
        </HStack>
        {searchClicked ? (
          <Elements elements={searchElements} deleteElement={deleteElement} />
        ) : (
          <Elements elements={elements} deleteElement={deleteElement} />
        )}
      </Box>
    </VStack>
  );
}

export default AddElements;
