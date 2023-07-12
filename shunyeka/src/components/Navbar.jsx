import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      
        <Link to={"/add"}><button>Add New User</button></Link>
        <Link to={"/"}><button>All Users</button></Link>

    </div>
  )
}
