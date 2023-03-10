import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Inc, Dec } from "../state/reducers/createState"

const stateManage = () => {

  const currentState = useSelector((state) => {
    return state.number
  })

  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(Inc())}>+</button>
      <h1>State Manage {currentState}</h1>
      <button onClick={() => dispatch(Dec()) }>-</button>
    </>
  )
}

export default stateManage