import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';



function Employee(props) {
    return <div><p>Name : {props.name} </p>
      <p>Salary : {props.salary} </p></div>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Employee name="bala" salary="50000"/>);

  


