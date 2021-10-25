// import "./App.css";
import { Flex, Button, Divider } from "@chakra-ui/react";
import Header from "./Components/Header";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const VARIANT_COLOR = "teal";
  return (
    <Flex w="full" justifyContent="center" mt="8">
      <Link to="/login">
        <Button
          variantColor={VARIANT_COLOR}
          width="full"
          mt={4}
          colorScheme="blue"
        >
          Login
        </Button>
      </Link>
      <Divider orientation="vertical" />
      <Divider orientation="vertical" />
      <Divider orientation="vertical" />
      <Divider orientation="vertical" />
      <Divider orientation="vertical" />
      <Divider orientation="vertical" />
      <Divider orientation="vertical" />
      <Link to="/signup">
        <Button
          variantColor={VARIANT_COLOR}
          width="full"
          mt={4}
          colorScheme="blue"
        >
          Signup
        </Button>
      </Link>
    </Flex>
  );
}

export default App;
