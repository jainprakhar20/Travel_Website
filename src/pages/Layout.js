import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import OrderPopup from '../components/OrderPopup/OrderPopup'

const Layout = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Outlet />
      <Footer />
      <OrderPopup OrderPopup={OrderPopup} setOrderPopup={setOrderPopup}/>
    </>
  )
}

export default Layout;
