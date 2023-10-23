import { Outlet } from 'react-router-dom';
import Header from './shared/Header';
import './App.css'

function App() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default App;