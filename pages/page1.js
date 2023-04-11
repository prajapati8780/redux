import { Child } from '@/component/child'
import Link from 'next/link'
import React from 'react'

const page1 = () => {
  return (
    <div>
    <Link href="/" className='offset-5 mt-5 pt-5 fs-5' style={{ color: 'gray' }}>back</Link>
    <Child/>
    </div>
  )
}

export default page1