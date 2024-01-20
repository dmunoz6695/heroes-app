import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const lastPath = localStorage.getItem('lastPath') || '/'
  const onLogin = () => {
    login('Diego')
    navigate(lastPath, {
      replace: true
    })
  }
  return (
    <>
      <div>
        <h1>Login</h1>
        <hr />
        <button onClick={() => onLogin()} >Login</button>
      </div>
    </>
  )
}

export default LoginPage
