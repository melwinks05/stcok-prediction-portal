import React from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useContext } from 'react'

const Header = () => {
    const {isLoggedin, setIsLoggedIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const hanldeLogout=()=>{
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      setIsLoggedIn(false)
      navigate('/login')
    }
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
      <Link className='navbar-brand text-light' to='/'>Stock Prediction Portal</Link>

      <div>
        {isLoggedin ?(
          <button className='btn btn-outline-danger' onClick={hanldeLogout}>Logout</button>):
          (
            <>
            <Button text='login' class='btn-outline-info' url='/login'/>
          &nbsp;
          <Button text='Register' url="/register" class='btn-info'/>
            </>
          )
        }
      </div>
    </nav>
    </>
  )
}

export default Header
