import React from 'react'
import PasteData from './PasteData'
import { useSelector } from 'react-redux'

function AllPastes() {
    const { searchData } = useSelector(state => state.PasteApp)
    // console.log(searchData);

    return (
        <div className='border-2 border-white w-[60%] min-h-[180px] rounded-md'>
            <h1 className='text-white p-4 text-4xl'>All Pastes</h1>
            <hr />
            {searchData && searchData.length > 0 ? (
                searchData.map((data) => {
                    return <PasteData key={data.id} pastedata={data} />
                })
            ) : (
                <h1 className='text-3xl text-center mt-6 text-[#dc8620]'>No Data Found</h1>
            )}
        </div>
    )
}

export default AllPastes