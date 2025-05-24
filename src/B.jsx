
import { useContext } from 'react'
import { Q } from './App'                                                                                   


export const B = () => {

  let C = useContext(Q)
  return (
    <div>
      <h1>{C.name}</h1>

      <h1>{C.price}</h1>
    </div>
  )
}

export default B
