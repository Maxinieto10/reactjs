import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({valor}) => {
  return (
    <div>
        <h1>RDCelulares</h1>
        <CartWidget valor = {valor}/>
    </div>
  )
}

export default NavBar