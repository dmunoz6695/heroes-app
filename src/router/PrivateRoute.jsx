/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext)

  const { pathname, search } = useLocation()

  const lastpath = pathname + search
  localStorage.setItem('lastPath', lastpath)

  return (logged)
    ? children
    : <Navigate to={'/login'} />
}

export default PrivateRoute
