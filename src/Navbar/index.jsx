import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Container, Nav, Wrapper } from './styles'

export const Navbar = () =>
{

  const active = ( { isActive } ) =>
  {
    return {
      color: isActive ? "yellow" : "white"
    }
  }
  return (
    <>
      <Nav>
        <Container>
          <Container.Item>
            <NavLink style={ active } to={ "/home" }>
              Home
            </NavLink>
          </Container.Item>
          <Container.Item>
            Aboute
          </Container.Item>
          <Container.Item>
            Info
          </Container.Item>
          <Wrapper>
            <Wrapper.Btn>
              <NavLink style={ active } to={ "/signin" }>
                Sign in
              </NavLink>
            </Wrapper.Btn>
            <Wrapper.Btn>
              <NavLink style={ active } to={ "/signup" }>
                Sign up
              </NavLink>
            </Wrapper.Btn>
          </Wrapper>
        </Container>
      </Nav>
      <Outlet />
    </>
  )
}

export default Navbar