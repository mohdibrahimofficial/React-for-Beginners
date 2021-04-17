import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person)=>{
          const {id,name,age,image} = person;
          return ( <div className="person">
              <img src={image} alt={name} />
              <div className="name">
                    <h4>{name}</h4>
                    <p>{age} years</p>
              </div>  
          </div>
          )
      })}
    </>
  );
}

export default List;
