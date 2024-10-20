import React from 'react'
import Features from './Features'
import SearchQuary from './SearchQuary'
import AllPastes from './AllPastes'

function Homepage() {

    return (
        <div className='w-[100%] h-[100%] bg-[#000] flex flex-col justify-center items-center gap-5'>
            <Features />
            <SearchQuary />
            <AllPastes />
        </div>
    )
}

export default Homepage