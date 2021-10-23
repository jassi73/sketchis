import { Heading, IconButton, Box, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display="flex" p={8} justifyContent="center" mt="10">
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
  );
};

export default Header;
