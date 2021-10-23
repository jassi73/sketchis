import { Text, IconButton, HStack, StackDivider } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Element = ({ element, deleteElement }) => {
  return (
    <HStack p={2}>
      <Text w="100%" ml={4}>
        {element.text}
      </Text>
      <IconButton
        icon={<FaTrash />}
        isRound={true}
        onClick={() => deleteElement(element.id)}
      />
    </HStack>
  );
};

export default Element;
