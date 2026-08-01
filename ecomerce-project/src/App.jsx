import { Route, Routes } from 'react-router'
import { OrdersPage } from './pages/orders/orderpages';
import './App.css'
import { HomePage } from './pages/home/home-page'
import { CheckoutPage } from "./pages/checkout/checkoutpage";
import { TrackingPage } from './pages/trakingpage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchApp = async () => {
      const response = await axios.get('http://localhost:3000/api/cart-items?expand=product')
      setCart(response.data)
    }
    fetchApp();

  }, [])


  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage cart={cart} />}

      />

      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} />}
      />


      <Route
        path="orders"
        element={<OrdersPage cart={cart} />}
      />
      <Route
        path="tracking"
        element={<TrackingPage />}
      />



    </Routes>
  )
}

export default App
