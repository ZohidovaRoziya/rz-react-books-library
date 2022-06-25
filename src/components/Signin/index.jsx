import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "./styles";

export const SignIn = () =>
{

  const [ password, setPassword ] = useState();
  const navigate = useNavigate();

  const onSubmit = () =>
  {
    fetch( "https://coursesnodejs.herokuapp.com/user/sign-in", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {
        password: password,
      } ),
    } )
      .then( ( res ) => res.json() )
      .then( ( res ) =>
      {
        if ( res.statusCode === 200 )
        {
          localStorage.setItem( "token", res?.data?.token );
          navigate( "/home" );
        }
      } );
  };



  return (
    <Container>
      <Container.Title>Sign in</Container.Title>
      <Container.Password onChange={ ( e ) => setPassword( e.target.value ) } placeholder="password" type="password" />
      <br></br>
      <Container.Btn onClick={ onSubmit }>Sign in</Container.Btn>
      <br></br>
      <br></br>
      <NavLink className="regstr" to={ "/signup" }>regstir</NavLink>
    </Container>
  );
};

export default SignIn;
