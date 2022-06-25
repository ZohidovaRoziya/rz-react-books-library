import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext();
export const Auth = () => useContext( UserContext )

export const Context = ( { children } ) =>
{
  const [ info, setInfo ] = useState( {
    token: localStorage.getItem( "token" ),
    user: {}
  } )
  return (
    <UserContext.Provider value={ [ info, setInfo ] }>{ children }</UserContext.Provider>
  )
}


export default Context