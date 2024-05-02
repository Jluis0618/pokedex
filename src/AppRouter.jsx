import React from 'react'

import { HomePage, PokemonPage, SearchPage } from './pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navigation } from './components'

export const AppRouter = () => {
  return <Routes>
    <Route path='/' element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path='pokemon/:id' element={<PokemonPage />}/>
        <Route path='search' element={<SearchPage/>}/>
    </Route>

    <Route path='*' element={<Navigate to='/'/>} />
  </Routes>
}
