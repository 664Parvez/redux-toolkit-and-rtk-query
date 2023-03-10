import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import store from './state/store'
import { Provider } from 'react-redux'
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import productApi from './state/reducers/createApi'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={productApi}>
      <Provider store={store}>
          <App />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
)
