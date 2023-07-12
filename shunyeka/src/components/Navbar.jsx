import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <Link to={"/add"}>Add New User</Link>
        <Link to={"/"}>All User</Link>

    </div>
  )
}
