import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index,setIndex] = useState(0);
  const {id,name,job,image,text} = people[index];

  const checkNumber = (number)=>
  {
    if(number > people.length-1)
      return 0;
    if(number < 0)
      return people.length-1;
    return number;
  }

  const prevBtn = () => {
    setIndex((index)=>{
      let newIndex = index-1;
      return checkNumber(newIndex);
    });
  }

  const nextBtn = () => {
    setIndex((index)=>{
      let newIndex = index+1;
      return checkNumber(newIndex);
    });
  }

  const randomPerson = () => {
    setIndex(() => {
      let newIndex = Math.floor(Math.random()*people.length);
      if( newIndex === index )
          newIndex+=1;
      return checkNumber(newIndex);
    });
  }

  return ( 
    <div className="mainCont">
      <div className="imgcont">
        <img src={image} alt={name}/>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
			<p className="job">{job}</p>
      <p className="info">{text}</p>
      <div class="btn-cont">
					<button className="next-btn" onClick={prevBtn}> <FaChevronLeft /> </button>
					<button className="prev-btn" onClick={nextBtn}> <FaChevronRight /> </button>
				</div>
			<button className="random-btn" onClick={randomPerson}>Suprise Me</button>
    </div>
  );
};

export default Review;
