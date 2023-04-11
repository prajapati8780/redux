import { add, remove } from '../reducer/slice'
import { useDispatch, useSelector } from 'react-redux'

const Child2 = () => {
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
      <p className='offset-5 text-info fs-6 mt-5'>Child2</p>
      <h1 className='offset-5 mt-3'>{count}</h1>
    <button className='btn bg-primary' onClick={increment}>+</button>
    <h1></h1>
    <button className='btn bg-danger rounded' onClick={decrement}>-</button>
    </div>
    </div>
  )
}

export default Child2