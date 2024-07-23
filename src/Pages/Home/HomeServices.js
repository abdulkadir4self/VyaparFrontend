import React from 'react';
import webAppImg from '../../Assets/1 1.png';
import WhatsappBotImg from '../../Assets/Saly-24.png';
import aiModelImg from '../../Assets/Saly-8.png';
import polyLineLeftImg from '../../Assets/polyline 22 6.png';
import polyLineRightImg from '../../Assets/polyline 22 7.png';
import RoundBottomImg from '../../Assets/Group 33.png';
import dot from '../../Assets/Ellipse 13.png';



 function HomeServices(){


  return (<>
   <div className='container-fluid p-0 pt-5 '>
   <div class="header">
        <div class="title">
           <h2> Vyap<span class="highlight">par</span> Launch<span class="highlight">pad</span> : Your E-commerce Sathi </h2>
        </div>
        <div class="subtitle">
           <p> A one-stop solution that seamlessly integrates your online and physical stores.</p>
        </div>
    </div>
   <div class="container  homeServWrapper">
        <div class="row homeServRow">
            <div class="col-md-4 homeServCardWrapper homeServCardWrapper1">
                <i className='iconImg iconImg1'> <img src={polyLineLeftImg} /> </i>
                <div class="card homeServCard">
                    <h3>Web App</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <img src={webAppImg} class="icon" alt="Web App Icon"/>
                </div>
            </div>
            <div class="col-md-4 homeServCardWrapper homeServCardWrapper2">
                <div class="card homeServCard">
                    <h3>WhatsApp Bot</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <img src={WhatsappBotImg} class="icon" alt="WhatsApp Bot Icon"/>
                </div>
                    <i className='iconImg iconImg2'> <img src={RoundBottomImg} /> </i>
            </div>
            <div class="col-md-4 homeServCardWrapper homeServCardWrapper3">
                <div class="card homeServCard">
                    <h3>AI Model</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <img src={aiModelImg} class="icon" alt="AI Model Icon"/>
                </div>
                <i className='iconImg iconImg3'> <img src={polyLineRightImg} /> </i>
            </div>
        </div>
    </div>
    <div className='homeContactWrapper'>
        <div className='homeContactContent'>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ?</h6>
        <p> <img src={dot} />  Lorem ipsum dolor sit amet, consectetur adipis +91 9876543210</p>
        </div>
        <button>Submit</button>
    </div>
   </div>
   
   
   </>)
}

export default React.memo(HomeServices);
