import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import {teamSliderData} from './TeamSliderData';
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons/faAnglesRight";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons/faAnglesLeft";
import Home from "./Home.css";


function TeamSlider() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (<>
    <div className="container py-5 sliderSection ">
      <h2 className="">The Team</h2>
      <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
      {teamSliderData.map((data , index) => {
        return(
       <div key={index} className="sliderCardWrapper ">
       <div className="sliderCard  mt-5">
            <img src={data.teamImg} />
            <div className="d-flex justify-content-start">
            <button className="btn p-0" onClick={previous}> <FontAwesomeIcon size="2xl" style={{color: 'lightblue'}} icon={faAnglesLeft} /> </button>
            </div>
            <div className="sliderContent">
            <h6> {data.name} </h6>
            <p> {data.words} </p>
            </div>
            <div className="d-flex justify-content-end"><button className="btn p-0" onClick={next}><FontAwesomeIcon size="2xl" style={{color: 'lightblue'}} icon={faAnglesRight} /> </button></div>
        </div>
       </div>
       )
      })}
      </Slider>
    </div>
    </>);
}

export default React.memo(TeamSlider);
