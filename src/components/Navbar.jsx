import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/react.svg"

export default function Navbar() {
    return (
        <div className='bg-[#242424] text-gray-400 font-medium h-[60px] sticky'>
            <div className='h-full flex items-center justify-between py-3 px-4'>
                <img src={logo} alt={logo} />
                <nav className='flex items-center h-full gap-10 '>
                    <Link to="/" className='hover:underline-offset-8 hover:underline decoration-amber-600 decoration-2'>Home</Link>
                    <Link to="/about" className='hover:underline-offset-8 hover:underline decoration-amber-600 decoration-2' >About</Link>
                    <Link to="/contact" className='hover:underline-offset-8 hover:underline decoration-amber-600 decoration-2'>Contact</Link>
                </nav>
            </div>
        </div>
    )
}
