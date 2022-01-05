import { useState } from "react";
import { Button, HStack, Input, useToast, Box } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const AddElement = ({ elements, setElements }) => {
  const [element, setElement] = useState("");

  const toast = useToast();

  const handleChange = (e) => {
    setElement(e.target.value);
  };

  const addElement = () => {
    if (!element) {
      toast({
        title: "No Element item to Add",
        status: "error",
        duration: "3000",
        isClosable: true,
      });
      return;
    }

    const newElement = {
      id: nanoid(),
      text: element,
    };

    setElements([...elements, newElement]);
    setElement("");
  };

  return (
    <Box>
      <HStack p="2">
        <Input
          variant="filled"
          placeholder="Add Elements"
          onChange={(e) => handleChange(e)}
          value={element}
        />
        <Button colorScheme="blue" px={9} onClick={() => addElement()}>
          Add
        </Button>
      </HStack>
    </Box>
  );
};

export default AddElement;
