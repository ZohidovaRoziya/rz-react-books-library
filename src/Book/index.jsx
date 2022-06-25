import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Generic from '../Generic';
import { booksUrl } from '../varables';

export const Book = () =>
{
  const [ data, setData ] = useState( null );
  const { id } = useParams();

  useEffect( () =>
  {
    fetch( `${ booksUrl }/user/category/${ id }` )
      .then( ( res ) => res.json() )
      .then( ( res ) => setData( res?.data ) )
  }, [] );
  return (
    <div>
      <h1>Selected Book - { data.name }</h1>
      <Generic value={ data } />
    </div>
  )
}

export default Book