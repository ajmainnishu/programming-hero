import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Culture from './components/Culture/Culture'
import Header from './components/Header/Header'





// function App() {
//     return (
//         <nav>
//             <Router>
//                 <Header></Header>
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
//                     <Route exact path="/about">
//                         <About></About>
//                     </Route>
//                     <Route path="/about/culture">
//                         <Culture></Culture>
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