import React from 'react'
import { Child } from './child'
import Child2 from './child2'


const Navbar = () => {
  return (
    <>
     <div className='container offset-5'>
   <p className='fw-5 tw-bold'>Navbar</p>
    <Child></Child>
    <Child2></Child2>
   </div>
    </>
  )
}

export default Navbar
