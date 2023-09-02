import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Phonebar from './components/Phonebar/Phonebar'
import PriceList from './components/PriceList/PriceList'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-600'>hello from tailwind</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <Phonebar></Phonebar>
    </div>
  )
}

export default App