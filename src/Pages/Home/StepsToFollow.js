import React from 'react';
import icon1st from '../../Assets/step1 1.png';
import icon2nd from '../../Assets/step2 (1) 1.png';
import icon3rd from '../../Assets/step3 1.png';
import icon4th from '../../Assets/step4 1.png';
import icon5th from '../../Assets/step5 1.png';
import icon6th from '../../Assets/step6 1.png';


function StepsToFollow() {



  return (<>
   <div class="container mt-5 stepContainer">
        <h2 class="text-center mb-5">Steps to Follow</h2>
        <div class="row mt-4 stepRow">
            <div class="col-md-4 stepCol">
                <div class="step-box">
                    <div class="step-number">1</div>
                <span> <img src={icon1st} /> </span>
                   <div className='stepContent'>
                   <h6>Create an Account</h6>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                   </div>
                </div>
            </div>
            <div class="col-md-4 stepCol">
                <div class="step-box">
                <span> <img src={icon2nd} /> </span>
                    <div class="step-number">2</div>
                    <div className='stepContent'>
                    <h6>Set Up Your Business Profile</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 stepCol">
                <div class="step-box">
                <span> <img src={icon3rd} /> </span>
                    <div class="step-number">3</div>
                    <div className='stepContent'>
                    <h6>Configure Basic Settings</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5 stepRow">
            <div class="col-md-4 stepCol">
                <div class="step-box">
                <span> <img src={icon4th} /> </span>
                    <div class="step-number">4</div>
                    <div className='stepContent'>
                    <h6>Add Products/Services</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 stepCol">
                <div class="step-box">
                <span> <img src={icon5th} /> </span>
                    <div class="step-number">5</div>
                    <div className='stepContent'>
                    <h6>Set Up Bank Accounts and Payment Methods</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 stepCol">
                <div class="step-box">
                    <span> <img src={icon6th} /> </span>
                    <div class="step-number">6</div>
                    <div className='stepContent'>
                    <h6>Start Creating Transactions</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>)
}


export default React.memo(StepsToFollow);