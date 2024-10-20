import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { SearchData } from '../Features/CodeBoxSlice';

function SearchQuary() {
    const [quary, setquary] = useState('')
    const { storage } = useSelector(state => state.PasteApp)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(SearchData(quary))
    }, [quary, storage])

    return (
        <div className='w-[60%] border-2 h-[40px] rounded-md flex gap-2 items-center px-2 mt-10'>
            <IoSearch color='#fff' fontSize='20px' />
            <input type="text" value={quary} onChange={(e) => setquary(e.target.value)} placeholder='Search question here...' className='h-[100%] w-[100%] bg-transparent text-white outline-none' />
        </div>
    )
}

export default SearchQuary