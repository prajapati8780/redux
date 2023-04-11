import React from 'react'
import { Child } from './child'
import Child2 from './child2'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
     <div className='container offset-5'>
   <p className='fw-5 tw-bold'>Navbar</p>
   <Link href="page1" className='me-5'>Child 1</Link>
   <Link href="page2">Child 2</Link>
   </div>
    </>
  )
}

export default Navbar
