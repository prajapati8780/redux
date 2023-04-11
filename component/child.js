
import { useDispatch,useSelector } from 'react-redux'

import { add, remove } from '../reducer/slice'

export const Child = () => {
  const dispatch=useDispatch()
  const inc1=useSelector(state=>(state.inc1))
const increment=()=>{
  dispatch(add(1))
    console.log(1)
}
const decrement=()=>{
  if(inc1>=1){
    dispatch(remove(1))
    console.log(1)
  }
}

  return (
    <div className='container mt-5  '>
      <div className='row col-3'>
      <p className=' text-info fs-6 mt-5'>Child1</p>
      <h1 className=' mt-3'>{inc1}</h1>
    <button className='btn bg-primary' onClick={increment}><span className='fs-6 fw-bold'>+</span></button>
    <h1></h1>
    <button className='btn bg-danger rounded' onClick={decrement}><span>-</span></button>
    </div>
    </div>
  )
}
