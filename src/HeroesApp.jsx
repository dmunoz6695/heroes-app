import React from 'react'
import AppRouter from './router/AppRouter'
import AuthProvider from './auth/context/AuthProvider'

const HeroesApp = () => {
  return (
    <div className='bg-slate-900 h-screen w-screen text-white'>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </div>
  )
}

export default HeroesApp
