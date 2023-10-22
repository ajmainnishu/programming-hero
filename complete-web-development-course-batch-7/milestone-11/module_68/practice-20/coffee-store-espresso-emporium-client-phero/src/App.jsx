import { Outlet } from 'react-router-dom';
import './App.css'
import Logo from './shared/Logo';
import Footer from './shared/Footer/Footer';

function App() {
  return (
    <div>
      <Logo></Logo>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App;