import React,{useEffect, useState} from 'react'
import axios from "axios"
export default function Home() {
  const [message, setMessage] = useState('Please login to see message');
  
  console.log("I am first line");
  useEffect(() => {
    
    console.log("I am use effect");
    if (localStorage.getItem('access_token') === null) {
      window.location.href = '/';
    } else {
      (async () => {
      const token = localStorage.getItem('access_token');
        try {
          const response = await axios.get('http://127.0.0.1:8000/home/', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
          setMessage(response.data.message)
          //setMessage(response);
        } catch (error) {
          console.log("not auth: " + error);
        }
      })(); // Invoke the async function
    }
  },[]);

  console.log("I am second line")


  return (
    <>
    <div class="container">
      <div>Home</div>
      <p>hi {message}</p>




    </div>
 









    
    </>




    

  )
}
