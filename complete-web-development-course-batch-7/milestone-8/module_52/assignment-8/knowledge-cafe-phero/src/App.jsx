import './App.css'
import Blog from './components/Blog/Blog'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
        {/* header section */}
        <Header></Header>
        {/* main section */}
        <Blogs></Blogs>
        {/* question answer section */}
        <Blog></Blog>
    </div>
  )
}

export default App