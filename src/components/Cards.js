
import Card from './Card';

import React from 'react'

function Cards () {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-4">

              <Card />
            </div>
        </div> 
        <div className="row">
            <div className="col-md-4">

              <Card />
            </div>
        </div> 
        <div className="row">
            <div className="col-md-4">

              <Card />
            </div>
        </div> 
         
     </div>

               
    )
}

export default Cards;
