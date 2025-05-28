import React from 'react';

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-5 mt-5">
          <h1 className='p-3'>{productName}</h1>
          <p className='p-3 text-muted'>{productDesription}</p>
          <div className='p-3'>
            <a href={learnMore}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={imageURL} alt='Loading...'/>
        </div>
      </div>
    </div>
  );
}


export default RightSection;