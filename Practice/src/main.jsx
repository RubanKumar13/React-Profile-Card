import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Form from './Form/Form'
// import UserDetail from './UseState/UserDetail'
// import Qrcode from './QrCode Genarator/Qrcode'
import Usercard from './ProfileCard/Usercard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Usercard /> 
     {/* <Qrcode /> */}
     {/* <UserDetail /> */}
     {/*  <Form /> */}
  </StrictMode>,
)
