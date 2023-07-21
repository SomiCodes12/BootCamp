import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Browse from '../../Pages/Browse'

const LayOut = () => {
  return (
    <div>
      <Header/>
     <Outlet/>
     <Browse/>
     <Footer/>
    </div>
  )
}

export default LayOut