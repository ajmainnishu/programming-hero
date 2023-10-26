import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './shared/Footer/Footer'
import Navigation from './shared/Navigation/Navigation'

function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
