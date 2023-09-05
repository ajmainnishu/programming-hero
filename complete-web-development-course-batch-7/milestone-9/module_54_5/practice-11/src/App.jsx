import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const navigation = useNavigation();
  return (
    <div>
        <Header></Header>
        {/* loading spinner */}
        <div className='text-center font-semibold py-10 text-3xl'>{navigation.state === 'loading' && 'Loading...'}</div>
        <Outlet></Outlet>
    </div>
  )
}

export default App
