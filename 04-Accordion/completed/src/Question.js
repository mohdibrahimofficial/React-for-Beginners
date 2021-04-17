import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({id,title,info}) => {

  const [open,setOpen] = useState(false);

  const openBtn = () =>
  {
      setOpen(!open);
  }

  return (
    <section className="info">
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={openBtn}>
          {
            open ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
          </button>
        </header>
         { open ? <p>{info}</p> : '' }
      </article>
    </section>
  );
};

export default Question;
