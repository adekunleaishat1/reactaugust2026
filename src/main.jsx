import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import Landingpage from './Landingpage'
// import Home from './Home'
// import Variables from './Variables'
// import Todos from './Todos'
// import Sportify from './Sportify'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
  

)
