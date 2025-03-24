import React from 'react'
import {Link} from 'react-router-dom'
import NdhnHome from './NdhnHome'

export default function NdhnNarBar() {
  return (
    <nav>
      <Link to='/' >Home</Link> |
      <Link to='/ndhn-list-user' >List User</Link> |
      <Link to='/ndhn-create-user' >Create User</Link>
    </nav>
  )
}
