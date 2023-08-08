import React from 'react';
import Img from '../../Assets/img-home.jpg';
import './home.css'; 


export default function Home() {
  return (
    <div className="home-container">
      <img className='img-accueil' src={Img} alt="Home" />
    </div>
  );
}
