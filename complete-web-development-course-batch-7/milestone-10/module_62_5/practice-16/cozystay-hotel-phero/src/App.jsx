import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'

function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
