import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "./styles";

export const SignUp = () =>
{

  const navigate = useNavigate();
  const [ fullname, setFullname ] = useState();
  const [ password, setPassword ] = useState();

  const onSubmit = () =>
  {
    fetch( "https://coursesnodejs.herokuapp.com/user/sign-up", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {
        fullName: fullname,
        password: password,
      } ),
    } )
      .then( ( res ) => res.json() )
      .then( ( res ) =>
      {
        navigate( "/signin" );
      } );
  };


  return (
    <Container>
      <Container.Title>Register</Container.Title>
      <Container.UserName onChange={ ( e ) => setFullname( e.target.value ) } placeholder="fullname" type="text" />
      <br></br>
      <Container.UserName onChange={ ( e ) => setPassword( e.target.value ) } placeholder="password" type="password" />
      <br></br>
      <Container.Btn onClick={ onSubmit }>Submit</Container.Btn>
      <br></br>
      <br></br>
      <NavLink className={ "regstr" } to={ "/signin" }>Login</NavLink>
    </Container>
  );
};

export default SignUp;
