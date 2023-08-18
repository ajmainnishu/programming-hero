// import './App.css';

// function App() {
//   return (
//     <div>
//       <Person></Person>
//       <Person></Person>
//     </div>
//   );
// }

// function Person () {
//   return <div>
//       <h1>Sakib Al Hasan</h1>
//       <p>Profession: Cricket</p>
//   </div>
// }

// export default App;




// import './App.css';

// function App() {
//   return (
//     <div>
//       <Person></Person>
//       <Person></Person>
//     </div>
//   );
// }
// function Person () {
//   return (
//     <>
//       <h1>Sakib Al Hasan</h1>
//       <p>Profession: Cricket</p>
//     </>
//   )
// }

// export default App;




import './App.css';

function App() {
  return (
    <div>
      <Person></Person>
      <Person></Person>
      <Friend></Friend>
      <h5>New Component. Yay</h5>
      <p>Rock mama, React mama.</p>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}
function Person () {
  return (
    <div className='person'>
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Cricket</p>
    </div>
  )
}
function Friend () {
  return (
    <div className='container'>
      <h3>Name: Ajay Devgun</h3>
      <p>job: maramari</p>
    </div>
  )
}

export default App;