import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header";
import { store } from "./Features/App/Store";
import { Provider } from "react-redux";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import AddElements from "./Components/AddElement/AddElements";
import ProtectedRoute from "./Components/ProtectedRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider>
        <ColorModeScript initialColorMode="light" />
        <Router>
          {" "}
          <Route path="/" component={Header} exact />
          <Route path="/" component={App} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/login" component={Login} />
          <Route path="/add" component={AddElements} />
        </Router>
      </ChakraProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
