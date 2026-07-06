import { Route, Routes } from 'react-router'

import './App.css'
import { HomePage } from './pages/home-page'
import { CheckoutPage } from "./pages/checkoutpage";

function App() {


  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      
      />
      <Route
        path="checkout"
        element={<CheckoutPage />}
      />

    </Routes>
  )
}

export default App
