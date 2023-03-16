import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import './Home.scss';





export default function Home() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    function get() {
            fetch('https://fakestoreapi.com/products?limit=9')
        // fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) 
        .then(data => setUser(data))
      }
      get()
  }, [])

  return (
      
    <ul className='ul'>
      {user.map(item => {
        return <div className='item'>
          <div  className='item_blok'>
                  <h1 className='id'>{item.id}   </h1>
                  <img className='foto' src={item.image} alt="1"  width='200px' height='300px' />

                  <h3 className='title'>{item.title} {item.price} $</h3>
                  <p className='description'>{item.description} </p>
                  <p className='category'>{item.category} </p>
                  
                  <button className='btn'>{item.price} $  Add to Cart</button>
          </div>
        </div> 
      })}

    </ul>
  )
}

  
    

















// import { useEffect, useState } from 'react';

// import React from 'react'

// export default function Home() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
      // const response = await fetch(`https://fakestoreapi.com/products?limit=9`);
//       const jsonData = await response.json();
//       setData(jsonData);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>

//         {data.length ? (
//         <ul>
//           {data.map(iten => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
      
//       )}

//     </div>
//   );
// }


