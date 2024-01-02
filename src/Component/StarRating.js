import React from "react";

const StarRating = ({ rating }) => {
    const starsTotal = 5; // Number of stars
    const filledStars = Math.round(rating * starsTotal) / starsTotal; 
  
    return (
      <div className="star-rating">
        {[...Array(starsTotal)].map((_, index) => {
          return (
            <span
              key={index}
              className={index < filledStars ? 'star-filled' : 'star-empty'}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    );
  };
  
  export default StarRating;