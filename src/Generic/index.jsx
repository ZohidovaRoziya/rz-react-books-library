import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { booksUrl } from '../varables/index';
import { UserContext } from '../context';
import { BookCon, Container } from './style';
import Book from '../Book';

const Generic = ( { value } ) =>
{
  const [ category, setCategory ] = useState( [] );
  let { id } = useParams();
  const navigate = useNavigate();
  const [ user ] = useContext( UserContext );

  useEffect( () =>
  {
    fetch( `${ booksUrl }/user/category?page=1&limit=5` )
      .then( ( res ) => res.json() )
      .then( ( res ) =>
      {
        console.log( res, "res" );
        setCategory( res?.data?.data )
      }
      )
  }, [] );
  console.log( "generik" );
  return (
    <Container>
      { category && category.filter( ( item ) => item.name === id )?.map( ( value ) => (
        value?.books.map( ( item ) => (
          <BookCon onClick={ () => navigate( user?.token ? `/home/${ item?._id }` : `/signin` ) } key={ item._id }>
            <BookCon.Img src={ `${ booksUrl }/${ item.imgUrl }` } />
            <BookCon.Title>{ item.name }</BookCon.Title>
            <BookCon.Btn>
              <NavLink to={ <Book /> }>
                More
              </NavLink>
            </BookCon.Btn>
          </BookCon>
        ) )
      ) ) }
    </Container>
  )
}

export default Generic