import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './shared/Navigation'
import Footer from './shared/Footer'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default App
