
import { useSelector } from "react-redux"
import Navbar from "../component/navbar"

export default function Home() {
  const count=useSelector(state=>(state.count))
  return (
    <>
    <Navbar/>
    <h1 className="offset-5 mt-5">main Screen</h1>
    <p className="offset-5 mt-5">{count}</p>
    </>
  )
}
