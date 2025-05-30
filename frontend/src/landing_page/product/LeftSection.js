import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                <img src={imageURL} alt='Loading...'/>
                </div>
                <div className="col-1"></div>
                <div className="col-5 p-5 ">
                <h1 className='p-3'>{productName}</h1>
                <p className='text-muted p-3'>{productDesription}</p>
                <div className='p-3'>
                    <a href={tryDemo}>
                    Try Demo
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <a href={learnMore} style={{ marginLeft: "50px" }}>
                    Learn More
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="mt-1 p-3">
                    <a href={googlePlay}>
                    <img src="media/googlePlayBadge.svg" alt='Play Store img'/>
                    </a>
                    <a href={appStore}>
                    <img
                        src="media/appstoreBadge.svg"
                        style={{ marginLeft: "50px" }}
                        alt='App Store img'
                    />
                    </a>
                </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;