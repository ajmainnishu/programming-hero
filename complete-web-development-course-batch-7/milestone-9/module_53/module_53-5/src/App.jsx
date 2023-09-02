import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-600'>hello from tailwind</h1>
      <PriceList></PriceList>
    </div>
  )
}

export default App