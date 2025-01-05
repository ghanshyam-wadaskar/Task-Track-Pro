import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className=''>
        <h1 className='py-2 px-5 bg-violet-800 text-white font-semibold rounded-full shadow-md hover:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-200 focus:ring-opacity-75'>Hello <br /> <span className='text-3xl font-semibold'>AdminDashboard 👋</span></h1>
        <button onClick={logOutUser} className='py-2 px-5 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-200 focus:ring-opacity-75'>Log Out</button>
    </div>
    
  )
}

export default Header