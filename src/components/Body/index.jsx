import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { booksUrl } from "../../varables/index";
import { Container } from "./styles";

export const Body = () =>
{
  const [ category, setCategory ] = useState( [] );

  useEffect( () =>
  {
    fetch( `${ booksUrl }/user/category?page=1&limit=5` )
      .then( ( res ) => res.json() )
      .then( ( res ) => setCategory( res?.data?.data ) )
  }, [] );


  const active = ( { isActive } ) =>
  {
    return {
      color: isActive ? "white" : "pink"
    }
  }
  return <Container>
    {
      category.map( ( item ) =>
      {
        return (
          <NavLink key={ item._id } state={ active } to={ `/home/${ item?.name }` }>

            <Container.Card key={ item._id }>
              { item.name }
            </Container.Card>
          </NavLink>

        )
      } )
    }
    <Outlet />
  </Container>;
};

export default Body;
