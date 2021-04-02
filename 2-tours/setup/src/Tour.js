import React, { useState } from 'react';

const Tour = ({id,image,info,price,name}) => {

  const [readMore,setReadmore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          { readMore ? info : `${info.substring(0,200)}...`}
          <button onClick={()=>setReadmore(!readMore)}>
              {readMore?'Show Less':'Read More'}
            </button>
          </p>
        <button className="delete-btn">
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
