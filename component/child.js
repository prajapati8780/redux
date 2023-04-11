
import { useDispatch,useSelector } from 'react-redux'
import { add, remove } from '../reducer/slice'

export const Child = () => {
  const dispatch=useDispatch()
  const count=useSelector(state=>(state.count))
const increment=()=>{
  dispatch(add(1))
    console.log(1)
}
const decrement=()=>{
  if(count>=1){
    dispatch(remove(1))
  }
}

  return (
    <div className='container offset-4  mt-5 '>
      <div className='row col-3'>
      <p className='offset-5 text-info fs-6 mt-5'>Child1</p>
      <h1 className='offset-5 mt-3'>{count}</h1>
    <button className='btn bg-primary' onClick={increment}><span className='fs-6 fw-bold'>+</span></button>
    <h1></h1>
    <button className='btn bg-danger rounded' onClick={decrement}><span>-</span></button>
    </div>
    </div>
  )
}
