import React from 'react'
import "../App.css"
import Navbar from './Navbar'
import Slider from './Slider'

export default function Home() {
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
            </div>
            <Slider />
        </>
    )
}
