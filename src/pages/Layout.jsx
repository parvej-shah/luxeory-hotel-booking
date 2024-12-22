import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Layout() {
  return (
    <div className='bg-bgEnd'>
        <Navbar/>
        <div className='container mx-auto px-2'>
        <Outlet/>
        </div>
    </div>
  )
}
