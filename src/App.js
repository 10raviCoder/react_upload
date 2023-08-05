import React from 'react';
import Home from './components/Home';
import "./styles/home.scss";
import Place from './components/Place';
import "./styles/place.scss"
import "./styles/queries.scss"


const App = () => {
  
  return (
   <div className='paramount'>
    {/* <Home/> */}
    <Place/>
   
   </div>
  );
};

export default App; 

