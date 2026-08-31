import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import StartupPage from './layout/StartupPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<StartupPage />} />
      <Route path='*' element={<Navigate to="/" replace />} />
    </Routes >
  )
}

export default App