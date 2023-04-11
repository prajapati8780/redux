import Child2 from '@/component/child2'
import Link from 'next/link'
import React from 'react'

const page2 = () => {
  return (
    <div>
        <Link href="/">back</Link>
      <Child2/>
    </div>
  )
}

export default page2
