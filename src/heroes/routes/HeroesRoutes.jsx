import React from 'react'
import Navbar from '../../ui/components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import MarvelPage from '../pages/MarvelPage'
import DCPage from '../pages/DCPage'
import HeroPage from '../pages/HeroPage'
import SearchPage from '../pages/SearchPage'

const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='marvel' element={<MarvelPage/>}/>
        <Route path='dc' element={<DCPage/>}/>
        <Route path='search' element={<SearchPage/>}/>
        {/* <Route path='search' element={<DCPage/>}/> */}
        <Route path='hero/:id' element={<HeroPage/>}/>
        <Route path='/' element={<Navigate to={'/marvel'}/>}/>
      </Routes>
    </>
  )
}

export default HeroesRoutes
