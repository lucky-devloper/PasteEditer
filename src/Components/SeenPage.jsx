import React, { useEffect, useRef, useState } from 'react'
import { RxCopy } from "react-icons/rx";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function SeenPage() {
    const [title, settitle] = useState('')
    const [text, settext] = useState('')
    const { storage } = useSelector(state => state.PasteApp)
    const { seenId } = useParams()
    const navigate = useNavigate()
    const textref = useRef()
    // console.log(seenId, storage);

    useEffect(() => {
        if (seenId) {
            const ViewData = storage.find((data) => data.id == seenId)
            settitle(ViewData.title)
            settext(ViewData.text)
        }

    }, [seenId])

    const copyData = () => {
        const text = textref.current.value
        navigator.clipboard.writeText(text)
    }

    const sandForEdit = (editId) => {
        navigate(`/homepage/${editId}`)
    }

    return (
        <div className='w-[100%] h-[100vh] bg-[#000] text-white flex justify-center items-center'>
            <div className='w-[60%] h-[100%] flex flex-col justify-center gap-5'>
                <div className='w-[100%] flex items-center gap-5'>
                    <div className='w-[82%] h-[40px] text-white rounded-md bg-transparent' style={{ border: '1px solid #f2f2f2' }}>
                        <input type="text" value={title} readOnly placeholder='Title' className='w-[100%] h-[100%] px-3 bg-transparent' />
                    </div>
                    <button onClick={() => sandForEdit(seenId)} className='text-white w-[150px] h-[40px] rounded-md font-semibold bg-[#6674cc]'>Add To My Paste</button>
                </div>
                <div className='w-[100%] h-[600px] rounded-md bg-[#333333]' style={{ border: '1px solid #fff' }}>
                    <div className='w-[100%] h-[40px] flex justify-between items-center px-4'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[15px] h-[15px] bg-red-500 rounded-full'></div>
                            <div className='w-[15px] h-[15px] bg-yellow-500 rounded-full'></div>
                            <div className='w-[15px] h-[15px] bg-green-500 rounded-full'></div>
                        </div>
                        <RxCopy onClick={() => copyData()} fontSize='20px' className='text-white hover:text-green-500' />
                    </div>
                    <div className='w-[100%] h-[93%] rounded-2xl overflow-hidden'>
                        <textarea name="" id="" readOnly value={text} ref={textref} className='hover:cursor-not-allowed editer w-[100%] h-[100%] bg-[#212121] text-gray-600 outline-none p-2'></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeenPage