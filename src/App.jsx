import React from 'react'
import './App.css'
import GetApi from './components/getApi'
import StateManage from './components/stateManage'
import Users from './components/users'

function App() {

  return (
    <>
      <StateManage />
      
      <GetApi />
      <Users />
    </>
  )
}

export default App
