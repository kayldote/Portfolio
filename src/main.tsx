import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ImageViewer } from './components/ImageViewer'
import { ScrollReveals } from './components/ScrollReveals'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ImageViewer />
    <ScrollReveals />
  </React.StrictMode>,
)
