import React from 'react'
import "./success.scss";
const Success = () => {
  return (
    <section className="container_success">
        <h2 className="success_heading" >Job has been posted ! </h2>
        <img src="./asset/client.png" alt="" className="success__img"></img>
        <div class="success-button">
        <a href="/" className="succ-butt home-button">BACK HOME</a>
            
        </div>
    </section>
  )
}

export default Success