import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'

const NavList = [
  {
    route: 'marvel',
    name: 'Marvel'
  },
  {
    route: 'dc',
    name: 'DC'
  },
  {
    route: 'search',
    name: 'Search'
  }
]

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogout = () => {
    logout()
    navigate('/login', {
      replace: true
    })
  }

  return (
    <div className='h-[10%] w-full bg-slate-800   flex justify-between'>
      <div className='w-[25%] h-full  flex justify-evenly items-center'>
        <h1 className='text-2xl font-semibold' >Asociaciones</h1>
        {
          NavList.map(nav => (
            <NavLink key={nav.route} className={({ isActive }) => `${isActive ? 'text-gray-500' : ''} text-2xl font-semibold` } to={nav.route} >
              {nav.name}
            </NavLink>
          ))
        }

      </div>
      <div className=' w-[15%] flex justify-evenly items-center  text-2xl font-semibold'>
        <span className='text-teal-500'>{user?.name}</span>

        <button onClick={ () => onLogout()} className="= border rounded border-white w-[50%] h-[60%]">
        Logout
        </button>

      </div>

    </div>
  )
}

export default Navbar
