import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Main() {
  return (
    <div>
        <Nav/>
        <Outlet/>

    </div>
  )
}
