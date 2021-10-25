import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoute";
import AddElements from "../Components/AddElement/AddElements";
import { useHistory } from "react-router-dom";

import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const VARIANT_COLOR = "teal";

const Login = () => {
  return (
    <Box>
      <CSSReset />
      <LoginArea />
    </Box>
  );
};

const LoginArea = () => {
  return (
    <Flex
      minHeight="60vh"
      width="70"
      align="center"
      justifyContent="center"
      mt="16"
    >
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Box p={4}>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Sign In to Your Account</Heading>
      <Text></Text>
    </Box>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [homeView, setHomeView] = useState(false);

  const loginHandler = () => {
    let users = localStorage.getItem("users");
    if (users) {
      let parsedUsers = JSON.parse(users);
      let filteredUser = parsedUsers.filter((item) => item.email == email);
      if (filteredUser.length > 0) {
        console.log(filteredUser);
        if (filteredUser[0].password == password) {
          localStorage.setItem("isAuthenticated", true);
          setTimeout(() => {
            setHomeView(true);
          }, 2000);
        } else {
          alert("please enter correct password!");
        }
      } else {
        alert("user not found in db!");
      }
    } else {
      alert("There is no any user in database!!!");
    }
  };
  return (
    <Box my={8} textAlign="left">
      {homeView ? <Redirect to="/add" /> : null}
      <form>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          <Box>
            <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
          </Box>
        </Stack>

        <Button
          variantColor={VARIANT_COLOR}
          width="full"
          mt={4}
          colorScheme="blue"
          onClick={loginHandler}
        >
          Sign In
        </Button>
        <Link to="/">
          <Button variantColor={VARIANT_COLOR} width="full" mt={4}>
            Home
          </Button>
        </Link>
      </form>
    </Box>
  );
};

export default Login;
