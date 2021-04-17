import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            data.map((data)=>{
              return <SingleQuestion key={data.id} {...data} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
