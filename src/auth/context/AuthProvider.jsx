/* eslint-disable react/prop-types */
import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './authReducer'
import { types } from '../types/types'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {}, init)

  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name
    }
    const action = {
      type: types.login,
      payload: user
    }
    localStorage.setItem('user', JSON.stringify(user))
    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user')
    const action = {
      type: types.logout
    }
    dispatch(action)
  }

  const value = {
    ...state,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
