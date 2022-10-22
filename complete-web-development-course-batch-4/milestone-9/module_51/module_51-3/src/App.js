import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './App.css';
import News from './components/News/News';





// function App() {
//   const [news, setNews] = useState([])
//   useEffect(() => {
//     fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=ef89d0a6d37c4dd6b645c9c35cdf95b6')
//       .then(res => res.json())
//       .then(data => setNews(data.articles))
//   }, [])
//   return (
//     <div>
//       <Row xs={1} md={2} className="g-4">
//         {
//           news.map(nw => <News news={nw}></News>)
//         }
//       </Row>
//     </div>
//   );
// }





export default App;