import React from 'react'
import {Header, HeaderName} from '@carbon/react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center
    sm:px-8 px-4 py-4 border-b-[#e6ebf4] border-b bg-blue-300">
    <div className="font-bold text-lg">
    SeaQuant
    </div>
    <div className="flex gap-3">
      <div>
      <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
      <Link to="/signup">SignUp</Link>
      </div>
      <div>
      <Link to="/login">Login</Link>
      </div>
    </div>
    </header>
  )
}

export default Navbar