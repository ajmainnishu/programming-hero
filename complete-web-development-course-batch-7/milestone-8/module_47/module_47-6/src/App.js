// import './App.css';

// function App() {
//   return (
//     <div>
//       <Product name="laptop" price="47000"></Product>
//       <Product name="phone" price="75000"></Product>
//       <Product name="watch" price="3500"></Product>
//     </div>
//   );
// }
// function Product (props) {
//   return (
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }

// export default App;




import './App.css';

function App() {
  const products = [
    {name: 'laptop', price: 53000},
    {name: 'phone', price: 93000},
    {name: 'watch', price: 33000},
    {name: 'tablet', price: 5000}
  ]
  return (
    <div>
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="laptop" price="47000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="3500"></Product>
    </div>
  );
}
function Product (props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;