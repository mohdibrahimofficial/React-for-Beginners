import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeTour}) => {

  const [readMore,setReadmore] = useState(false);

  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="price">${price}</h4>
        </div>
        <p>
          { readMore ? info : `${info.substring(0,200)}...`}
          <button onClick={()=>setReadmore(!readMore)}>
              {readMore?'Show Less':'Read More'}
            </button>
          </p>
        <button className="btn-dlt" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
