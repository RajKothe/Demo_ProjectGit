import React from 'react';
import StarRating from './StarRating';

const HotelCard = ({ hotel }) => {
  const imageUrl = hotel.ThumbNailURL || '/images/HotelImage.jpg';

  // this function is used to check image available
  const isImageAvailable = (url) => {
    const img = new Image();
    img.src = url;
    return img.complete || (img.width + img.height) > 0;
  };

  return (
    <div className="container pl-xl-0 pl-lg-0 pl-md-0 shadow">
      <div className="row mb-3">
       <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
          <div className="m-3">
              <img
                    src={isImageAvailable(imageUrl) ? imageUrl : '/images/HotelImage.jpg'}
                    className="img-fluid img-thumbnail card-img-top"
                    alt={hotel.HotelName}
                  />
          </div>       
       </div>
     
      <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 mb-xl-3 mb-lg-3 mb-md-3 mb-lg-0 pl-xl-0 pl-lg-0 pl-md-0 div-Responsive">
        <div className="card-body align-items-center pl-0 cardBody-Responsive">
            <h6 className="card-title mb-1">{hotel.HotelName}</h6>
            <p className="card-text text-warning mb-0"><StarRating rating={hotel.PropertyRating} /></p>
            <p className="card-text text-modify">{hotel.Address}</p>
            <p className="card-text text-modify">{hotel.ShortDescription}</p>
        </div>
      </div>

      <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12">
        <div className="align-items-center card-body justify-content-center pt-lg-4 pt-xl-4">
            <span className="text-secondary"><h6><strong>From</strong></h6></span>
            <p className="card-text"><b>AED {hotel.TotalCharges}</b></p>
            <button className="btn btn-primary btn-sm mt-4 font-weight-bold btn-Responsive">Choose Room</button>
        </div>       
      </div>  
          
      </div>
    </div>
  );
};

export default HotelCard;