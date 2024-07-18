import React from "react";
import heroImg from "../../Assets/Group 1000004866.png";

function Hero() {
  return (
    <>
      <div className="hero container-fluid p-0">
        <div className="heroContentWrapper container">
        <div className="heroContent ">
          <div className="heroHeadingContainer">
            <h2>Unlock Your Growth</h2>
            <h2>
              <span>indesit</span> Lorem ipsum
            </h2>
          </div>

          <div className="heroParaContainer">
            <p>Your AI companion for product listing and</p>
            <p>sales on different e-commerce platform.</p>
          </div>
          <div className="heroNavigationContainer">
            <div className="heroBtnContainer">
              <button className="btn-block"> try now for free </button>
            </div>
          </div>
          <div className="CounterContainer">
          <div className="taglineContainer">
            <div className="tagline">
              <small>* kfjsjoi aokfa oka fakl alkdflk fa oakofj</small>
              <small>f ijijjuujnijm jsfsor kaj aokfopak</small>
            </div>
            <div className="taglineImgContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                viewBox="0 0 24 24"
              >
                <g 
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                >
                  <path stroke-miterlimit="10" d="M17.657 6.343L6.343 17.657" />
                  <path
                    stroke-linejoin="round"
                    d="M18.101 16.733V7.437A1.53 1.53 0 0 0 16.563 5.9H7.267"
                  />
                </g>
              </svg>
            </div>
            </div>
          <div className="counterWrapper">
          <div className="counter">
            <div className="Count"> <h1>0</h1></div>
            <div className="counterText"> <p>Lorem <br/> Ipsum</p> </div>
          </div>
          <div className="counter">
            <div className="Count"><h1>1</h1></div>
            <div className="counterText"> <p>Lorem <br/> Ipsum</p> </div>
          </div>
          <div className="counter">
            <div className="Count"> <h1>2</h1> </div>
            <div className="counterText"> <p>Lorem <br/> Ipsum</p> </div>

          </div>
          </div>
          </div>
        </div>
        </div>
        

        <div className="heroImg container">
          <img src={heroImg} />
        </div>
      </div>
    </>
  );
}

export default React.memo(Hero);
