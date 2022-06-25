import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Body from "../components/Body";
import Generic from "../Generic/index";
import SignIn from "../components/Signin";
import SignUp from "../components/Signup";
import Navbar from "../Navbar/index";

export const Root = () =>
{
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Navbar /> }>
          <Route path={ "/" } element={ <Navigate to={ "/home" } /> } />
          <Route path={ "/home" } element={ <Body /> } />
          <Route path="/home/:id" element={ <Generic /> } />
          <Route path={ "/signup" } element={ <SignUp /> } />
          <Route path={ "/signin" } element={ <SignIn /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
