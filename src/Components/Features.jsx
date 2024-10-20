import React, { useEffect, useRef, useState } from 'react'
import { RxCopy } from "react-icons/rx";
import { FiPlusCircle } from "react-icons/fi";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addData, UpdateData } from '../Features/CodeBoxSlice';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

function Features() {
    const [type, settype] = useState('CODE')
    const [day, setday] = useState('1 Month')
    const [title, settitle] = useState('')
    const [location, setlocation] = useState('')
    const [text, settext] = useState('')
    const { editId } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const textref = useRef()
    const { storage } = useSelector(state => state.PasteApp)


    const createPaste = () => {
        if (type !== '' && day !== '' && title !== '', location !== '', text !== '') {
            toast.success("Paste Create Sucessfully")
            dispatch(addData({ id: Date.now(), type, day, title, text }))
            setday('')
            settitle('')
            settext('')
        } else {
            toast.warn("Please fill all the fields")
        }
    }

    useEffect(() => {
        if (editId) {
            const selecteddata = storage.find((data) => data.id == editId)
            settitle(selecteddata.title)
            settext(selecteddata.text)
        }
    }, [editId])

    const editData = () => {
        dispatch(UpdateData({ id: editId, title: title, text: text }))
        settitle('')
        settext('')
        navigate('/')
    }

    const refreshpage = () => {
        settitle('')
        settext('')
        navigate('/')
    }

    const copyData = () => {
        toast.success("Copy to clipboard")
        const text = textref.current.value
        navigator.clipboard.writeText(text)
    }

    return (
        <div className='w-[60%] h-[100%] flex flex-col gap-10 justify-between mt-5'>
            <div className='w-[100%] h-[50px] flex justify-start items-center gap-5'>
                <select name="" id="" value={type} onChange={(e) => settype(e.target.value)} className='w-[190px] h-[40px] p-1 bg-[#030712] text-white bg-transparent rounded-md' style={{ border: '2px solid #0a0c12' }}>
                    <option value="CODE" className='bg-black'>Code</option>
                    <option value="TEXT" className='bg-black'>Text</option>
                    <option value="JSON" className='bg-black'>Json</option>
                </select>
                <select name="" id="" value={day} onChange={(e) => setday(e.target.value)} className='w-[190px] h-[40px] p-1 bg-[#030712] text-white bg-transparent rounded-md' style={{ border: '2px solid #0a0c12' }}>
                    <option value="1 Month" className='bg-black'>1 Month</option>
                    <option value="1 Year" className='bg-black'>1 Year</option>
                    <option value="Never" className='bg-black'>Never</option>
                </select>
                <select name="" id="" value={location} onChange={(e) => setlocation(e.target.value)} className='w-[190px] h-[40px] p-1 bg-[#030712] text-white bg-transparent rounded-md' style={{ border: '2px solid #0a0c12' }}>
                    <option value="Public" className='bg-black'>Public</option>
                    <option value="Private" className='bg-black'>Private</option>
                </select>
                {editId ? (
                    <div className='flex items-center gap-5'>
                        <button onClick={editData} className='text-white w-[150px] h-[40px] rounded-md font-semibold bg-[#6674cc]'>Update My Paste</button>
                        <FiPlusCircle onClick={() => refreshpage()} color='white' className='h-[40px] w-[40px] p-2 rounded-md bg-[#6674cc]' />
                    </div>
                ) : (
                    <button onClick={createPaste} className='text-white w-[150px] h-[40px] rounded-md font-semibold bg-[#6674cc]'>Create My Paste</button>
                )}
            </div>
            <div className='w-[100%] h-[40px] text-white rounded-md bg-transparent' style={{ border: '1px solid #f2f2f2' }}>
                <input type="text" placeholder='Title' value={title} onChange={(e) => settitle(e.target.value)} className='w-[100%] h-[100%] px-3 bg-transparent' />
            </div>
            <div className='w-[100%] h-[600px] rounded-md bg-[#333333]' style={{ border: '1px solid #fff' }}>
                <div className='w-[100%] h-[40px] flex justify-between items-center px-4'>
                    <div className='flex items-center gap-2'>
                        <div className='w-[15px] h-[15px] bg-red-500 rounded-full'></div>
                        <div className='w-[15px] h-[15px] bg-yellow-500 rounded-full'></div>
                        <div className='w-[15px] h-[15px] bg-green-500 rounded-full'></div>
                    </div>
                    <RxCopy fontSize='20px' onClick={copyData} className='text-white hover:text-green-500'/>
                </div>
                <div className='w-[100%] h-[93%] rounded-2xl overflow-hidden'>
                    <textarea name="" placeholder='Write Your Content Here...' ref={textref} value={text} onChange={(e) => settext(e.target.value)} className='editer w-[100%] h-[100%] bg-[#000] text-white outline-none p-2'></textarea>
                </div>
            </div>
        </div>
    )
}

export default Features