import React, { useRef } from 'react'
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiShare } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { IoCopyOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { removeData } from '../Features/CodeBoxSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function PasteData({ pastedata }) {
    const saveDate = pastedata.id
    const newdate = new Date(saveDate)
    const Year = newdate.toLocaleDateString('en-us', { day: 'numeric', month: 'long', year: 'numeric' })
    const dispatch = useDispatch()
    const textref = useRef()
    const navigate = useNavigate()

    const copydata = () => {
        toast.success("Copy to clipboard")
        const text = textref.current.innerText
        navigator.clipboard.writeText(text)
    }
    const EditData = (editId) => {
        // console.log("editedDataId:", id);
        navigate(`/homepage/${editId}`)
    }

    const DeleteData = (id) => {
        toast.success("Paste Delete Sucessfully")
        dispatch(removeData(id))
    }

    const ShowData = (seenId) => {
        navigate(`/paste/${seenId}`)
    }

    return (
        <div className='h-[180px] m-4 rounded-md p-3' style={{ border: '1px solid #fff' }}>
            <div className='text-white flex items-center justify-between'>
                <h1 className='text-4xl'>{pastedata.title}</h1>
                <div className='flex gap-4 items-center'>
                    <FiEdit3 onClick={() => EditData(pastedata.id)} className='hover:text-blue-700 border-2 h-[40px] w-[40px] p-2 rounded-md' />
                    <RiDeleteBin6Line onClick={() => DeleteData(pastedata.id)} className='hover:text-red-700 border-2 h-[40px] w-[40px] p-2 rounded-md' />
                    <FiShare className='hover:text-orange-400 border-2 h-[40px] w-[40px] p-2 rounded-md' />
                    <LuEye onClick={() => ShowData(pastedata.id)} className='hover:text-blue-500 border-2 h-[40px] w-[40px] p-2 rounded-md' />
                    <IoCopyOutline onClick={copydata} className='hover:text-green-600 border-2 h-[40px] w-[40px] p-2 rounded-md' />
                </div>
            </div>
            <div className='mt-4 h-[100px] text-white flex justify-between'>
                <div className='w-[70%] h-[100%] overflow-hidden'>
                    <p ref={textref}>{pastedata.text}</p>
                </div>
                <div className='flex flex-col items-end gap-10'>
                    <p className='text-xl font-semibold'>{Year}</p>
                    <p className='w-[55px] text-xl text-center rounded-md font-semibold text-green-600'>{pastedata.type}</p>
                </div>
            </div>
        </div>
    )
}

export default PasteData