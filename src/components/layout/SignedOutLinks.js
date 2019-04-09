import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>Cadastrar</NavLink></li>
        <li><NavLink to='/signin'>Entrar</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks