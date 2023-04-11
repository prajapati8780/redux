

import { useDispatch, useSelector } from 'react-redux'
import { inc, dec } from '../reducer/slice2'

const Child2 = () => {
  const dispatch=useDispatch()
  const count=useSelector(state=>(state.count))
const increment=()=>{
  dispatch(inc(1))
    console.log(1)
}
const decrement=()=>{
  if(count>=1){
    dispatch(dec(1))
    console.log(1)
  }
}
  return (
    <div className='container   mt-5 '>
       <div className='row col-3'>
      <p className='text-info fs-6 mt-5'>Child2</p>
      <h1 className=' mt-3'>{count}</h1>
    <button className='btn bg-primary' onClick={increment}><span>+</span></button>
    <h1></h1>
    <button className='btn bg-danger rounded' onClick={decrement}><span>-</span></button>
    </div>
    </div>
  )
}

export default Child2