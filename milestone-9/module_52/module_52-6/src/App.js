import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';





// function App() {
//     const style = {
//         color: 'purple',
//         fontSize: '20px'
//     }
//     return (
//         <nav>
//             <Router>
//                 <NavLink to="/home" activeClassName="selected">Home</NavLink>
//                 <NavLink to="/friends" activeStyle={{color: 'green'}}>Friends</NavLink>
//                 <NavLink to="/about" activeStyle={style}>About</NavLink>
//                 <Switch>
//                     <Route exact path="/">
//                         <Home></Home>
//                     </Route>
//                     <Route path="/home">
//                         <Home></Home>
//                     </Route>
//                     <Route path="/friends">
//                         <Friends></Friends>
//                     </Route>
//                     <Route path="/friend/:friendId">
//                         <FriendDetail></FriendDetail>
//                     </Route>
//                     <Route path="/about">
//                         <About></About>
//                     </Route>
//                     <Route path="*">
//                         <NotFound></NotFound>
//                     </Route>
//                 </Switch>
//             </Router>
//         </nav>
//     );
// }





export default App;