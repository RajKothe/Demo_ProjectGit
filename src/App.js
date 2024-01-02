import React, { useState, useEffect } from 'react';
import './App.css';
import './Common.scss';
import HotelData from './Data/Data.json';
import HotelCard from './Component/HotelCard';
import Loader from './Component/Loader';
import Pagination from './Component/Pagination';


const App = () => {
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = () => {
      setTimeout(function(){
        setHotels(HotelData.HotelList);
        setLoading(false);
      },2000)
        
        };
    
        fetchData();
      }, []);

  // this is used for get current hotels
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  // paginate function is used for Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-2 pl-xl-0 pl-lg-0 pl-md-0">
      <h4 className="mb-2 text-primary text-center">Hotel Listing</h4>
      {loading ? (
        <Loader />
      ) : (
        <>
          {currentHotels.map((hotel) => (
            <HotelCard key={hotel.HotelId} hotel={hotel} />
          ))}
          <Pagination
            hotelsPerPage={hotelsPerPage}
            totalHotels={hotels.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default App;
