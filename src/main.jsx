import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import GlobalStyle from './styles/GlobalStyle'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle /> {/**global style 적용 */}
    <App />
  </StrictMode>
)
