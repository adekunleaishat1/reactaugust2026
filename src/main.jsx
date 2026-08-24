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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
         <App/>
    </BrowserRouter>
  </StrictMode>,
  

)
