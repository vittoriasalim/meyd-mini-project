import React from 'react'
import "./home.scss"
const Home = () => {
  return (
    <section className="home section" id="home">
        <h2 className="section__title" >MEYD.IT</h2>
        <span className="section__subtitle">fashion made especially for you</span>
        <div className="home__container container grid">
          
            <img src="./asset/home-img.png" alt="" className="home__img"></img>
            <div className="home__data">
                <h2 className="home_heading" >Fashion made especially for you .</h2>
                <p className="home__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="butt-selection">
                  <div class="home__buttons">
                    <a href="/customer" className="home-button">customer</a> 
                  </div>
                  <div class="home__buttons">
                      <a href="/maker" className="home-button">maker</a>
                  </div>
                  
                </div>
            </div>

    
        </div>
        
    </section> 
  )
}

export default Home