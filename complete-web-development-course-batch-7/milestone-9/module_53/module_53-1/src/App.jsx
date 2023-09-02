// import './App.css'

// function App() {
//   return (
//     <div>
//       <div>
//         <button type="button" className="btn btn-primary">Primary</button>
//         <button type="button" className="btn btn-secondary">Secondary</button>
//         <button type="button" className="btn btn-success">Success</button>
//         <button type="button" className="btn btn-danger">Danger</button>
//         <button type="button" className="btn btn-warning">Warning</button>
//         <button type="button" className="btn btn-info">Info</button>
//         <button type="button" className="btn btn-light">Light</button>
//         <button type="button" className="btn btn-dark">Dark</button>
//         <button type="button" className="btn btn-link">Link</button>
//       </div>
//       <div>
//           <div className="card-group">
//             <div className="card">
//               <img src="..." className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                 <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
//             </div>
//           </div>
//           <div className="card">
//             <img src="..." className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//               <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
//             </div>
//           </div>
//           <div className="card">
//             <img src="..." className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//               <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App




import { Button } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  return (
    <div>
      <Button variant='danger'>My RB Button</Button>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      <Button variant='warning'>My RB Button</Button>
    </div>
  )
}

export default App