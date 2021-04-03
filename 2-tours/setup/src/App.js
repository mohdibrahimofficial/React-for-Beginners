import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id );
    setTours(newTour);
  };

  const fetchTours = async () => {
    setLoading(true);

    try{
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch(error)
    {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchTours();
  },[])
  
  if(loading)
  {
    return (
      <>
        <Loading />
      </>
    )
  }

  if(tours.length === 0)
  {
    return (
      <main>
        <section>
          <div className="title">
            <h2>No tour left...</h2>
            <button className="btn" onClick={fetchTours}>Refresh</button>
          </div>
        </section>
      </main>
    )
  }

  return (
  <>
    <Tours tour={tours} removeTour={removeTour} />
  </>
    )
};

export default App
