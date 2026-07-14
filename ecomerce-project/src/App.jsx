import { Route, Routes } from 'react-router'
import { OrdersPage } from './pages/orderpages';
import './App.css'
import { HomePage } from './pages/home-page'
import { CheckoutPage } from "./pages/checkoutpage";
import { TrackingPage } from './pages/trakingpage';

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

    
     <Route
        path="orders"
        element={ <OrdersPage />} 
      />
      <Route
        path="tracking"
        element={ <TrackingPage />} 
      />



    </Routes>
  )
}

export default App
