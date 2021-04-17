import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {AppContext,useGlobalContext} from './context'

const Home = () => {
  const {openSideBar,openModal} = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>show modal</button>
    </main>
  )
}

export default Home
