import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'


const kiki= (n:number | undefined) => {
  if (n){
    return n
  }
  return null
}
const n = kiki(undefined)
const b = n!

kiki(b)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
