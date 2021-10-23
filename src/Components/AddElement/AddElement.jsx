import { useState } from "react";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
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
    console.log(element);

    setElements([...elements, newElement]);
    setElement("");
  };

  return (
    <HStack>
      <Input
        variant="filled"
        placeholder="Add Element.."
        onChange={(e) => handleChange(e)}
        value={element}
      />
      <Button colorScheme="blue" px={8} onClick={() => addElement()}>
        Add element
      </Button>
    </HStack>
  );
};

export default AddElement;
