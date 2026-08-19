import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Landingpage from './Landingpage'
import Home from './Home'
import Variables from './Variables'
import Todos from './Todos'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 {/* <App/> */}
 {/* <Home/> */}
{/* <Landingpage/> */}
 <Todos/>
{/* <Variables/> */}
  </StrictMode>,
  

)
