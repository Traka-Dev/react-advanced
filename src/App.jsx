import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'
import { Home } from './Pages/Home'
import { Router } from '@reach/router'
import { Detail } from './Pages/Detail'
import { Navbar } from './components/Navbar'
import { Favs } from './Pages/Favs'
import { User } from './Pages/User'
import { NotRegisterUser } from './Pages/NotRegisterUser'

const isAuth = false

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth
          ? (
            <>
              <NotRegisterUser path='/favs' />
              <NotRegisterUser path='/user' />
            </>
            )
          : (
            <>
              <Favs path='/favs' />
              <User path='/user' />
            </>
            )}
      </Router>
      <Navbar />
    </>
  )
}
