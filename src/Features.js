import './App.css';
import * as React from "react";
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature3 from './Feature3';

function MyComponent() {
  return (
    <>
    <main className='main-feature-container'>
       <p className="features-title">Our Features</p>
        <div className='feature-container'>
         <Feature1/>
         <Feature2/>
         <Feature3/>
        </div>
    </main>    
    </>
  );

  }
 
export default MyComponent;
