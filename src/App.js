import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Component/Menubar/Menubar';
import { useState } from 'react';
import data from './Data/Data.json';
import { useEffect } from 'react';
import Course from './Component/Course/Course';
import Cart from './Component/Cart/Cart';


function App() {
  const [course, setCourse] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCourse(data);
  }, [])

  const enrollButtonHandler = (course) =>{
      const newCart = [...cart, course];
      setCart(newCart);
    }

  return (
    <div className="App">
      <h1>Learn with Ikram</h1>
      <Menubar></Menubar>
      <div className="container d-flex">
        <div>
          {course.map(data => <Course course={data} buttonHandler={enrollButtonHandler} key={data.id}></Course>)}
        </div>
        <div>
          <Cart data={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
