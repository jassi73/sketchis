import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_user } from "../Features/App/Action";
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
import { useHistory } from "react-router-dom";

const VARIANT_COLOR = "teal";

const Signup = () => {
  return (
    <Box>
      <CSSReset />
      <SignupArea />
    </Box>
  );
};

const SignupArea = () => {
  return (
    <Flex h="470px" width="50" align="center" justifyContent="center" mt="16">
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
          <SignupHeader />
          <SignupForm />
        </Box>
      </Box>
    </Flex>
  );
};

const SignupHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>SignUp Your Account</Heading>
      <Text></Text>
    </Box>
  );
};

const SignupForm = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    let users = localStorage.getItem("users");
    console.log(users);
    if (users) {
      let parsedUsers = JSON.parse(users);
      parsedUsers.push(data);
      let stringfiedUsers = JSON.stringify(parsedUsers);
      localStorage.setItem("users", stringfiedUsers);
    } else {
      let initialUsers = [data];
      localStorage.setItem("users", JSON.stringify(initialUsers));
    }
    dispatch(create_user(data));
    history.push("/login");
  };

  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="name"
            placeholder="Enter your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <Stack isInline justifyContent="space-between" mt={4}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </Stack>
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
        </Stack>

        <Button
          variantColor={VARIANT_COLOR}
          width="full"
          mt={4}
          onClick={(e) => handleSubmit(e)}
          colorScheme="blue"
        >
          Sign Up
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

export default Signup;
