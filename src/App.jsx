import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import SeenPage from './Components/SeenPage'

function App() {
  return (
    <div className='w-[100%] h-[100%]'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/homepage/:editId' element={<Homepage />} />
        <Route path='/paste/:seenId' element={<SeenPage />} />
      </Routes>
    </div>
  )
}

export default App