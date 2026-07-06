import { Route, Routes } from 'react-router'

import './App.css'
import { HomePage } from './pages/home-page'

function App() {


  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      
      />
      <Route
        path="checkout"
        element={<div>hi</div>}
      />

    </Routes>
  )
}

export default App
