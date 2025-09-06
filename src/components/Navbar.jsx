import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg">
      <div className="flex justify-center gap-16 font-Inter text-[16px] text-white font-semibold max-w-6xl mx-auto px-6 py-4">
        <Link>CASE STUDIES/WORKS</Link>
        <Link>QUICK CALL</Link>
      </div>
    </nav>
  )
}

export default Navbar
