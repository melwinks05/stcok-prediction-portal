import React, {useEffect} from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import axiosInstance from '../axiosInstance'

const Dashboard = () => {
  useEffect(()=>{
    const fetchProtectedData= async()=>{
      try{
        const response = await axiosInstance.get('/protected-view/')
        console.log("success: ", response.data)
      }
      catch(error){
        console.error('Error fetching data:', error)
      }
    }
    fetchProtectedData()
  }, [])
  return (
    <>
    </>
  )
}

export default Dashboard
