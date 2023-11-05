import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './shared/Navigation/Navigation';
import Footer from './shared/Footer/Footer';

function App() {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
  return (
    <div>
      {noHeaderFooter || <Navigation></Navigation>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default App;