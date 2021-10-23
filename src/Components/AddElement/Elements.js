import { VStack, StackDivider, Text } from "@chakra-ui/react";

//components
import Element from "./Element";
import EmptyElement from "./EmptyElement";

const Elements = ({ elements, deleteElement }) => {
  return (
    <VStack
      divider={<StackDivider />}
      borderWidth={elements.length > 0 ? "1px" : "none"}
      alignItems="stretch"
      mt={8}
    >
      {elements.length > 0 ? (
        elements.map((element) => (
          <Element
            element={element}
            key={element.id}
            deleteElement={deleteElement}
          />
        ))
      ) : (
        <EmptyElement />
      )}
    </VStack>
  );
};

export default Elements;
