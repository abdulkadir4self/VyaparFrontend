import React from 'react'

function FAQ() {


  return (<>



<div className="container-fluid faqSection py-5 ">
<div>
          <h1 className="font-weight-bold text-center text-white pt-5">FAQ's</h1>
             
            </div>

        <div className='d-flex faqDflex'>
        <div className='container faqContainer'>
    
    <div class=" faqWrapper py-5 d-block">
     
      <div id="accordion" class="accordion">
        <div class="card faqCard ">
          <div
            class="card-header collapsed  "
            data-toggle="collapse"
            href="#collapseOne"
          >
            <a class="card-title">
              What services do you offer?
            </a>
          </div>
          <div
            id="collapseOne"
            class="card-body collapse show"
            data-parent="#accordion"
          >
            <p>
            This is dependent on the water source and your usage .Changes in the water source might disrupt your maintenance schedule .Hydra offers free first year maintenance service every 3 months so as to gauge the working of the systems in your space and advise on the best maintenance schedule that will give you optimum functioning of the system .The schedules may range from every 5 months to every 3 years
            </p>
          </div>
         
          
          <div
            class="card-header bg-white collapsed"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseFour"
          >
            <a class="card-title">
              How do you  support clients
              ?
            </a>
          </div>
          <div
            id="collapseFour"
            class="collapse"
            data-parent="#accordion"
          >
            <div class="card-body">
              We offer dedicated help desk and support services to assist
              clients post-implementation. Our support team is available
              to handle inquiries, troubleshoot issues, manage refunds and
              cancellations, and ensure smooth operation of the deployed
              systems. We also provide continuous monitoring and updates
              to keep the systems running efficiently.
            </div>
          </div>
          <div
            class="card-header bg-white collapsed"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseFive"
          >
            <a class="card-title">How can I contact you?</a>
          </div>
          <div
            id="collapseFive"
            class="collapse"
            data-parent="#accordion"
          >
            <div class="card-body">
            This is dependent on the water source and your usage .Changes in the water source might disrupt your maintenance schedule .Hydra offers free first year maintenance service every 3 months so as to gauge the working of the systems in your space and advise on the best maintenance schedule that will give you optimum functioning of the system .The schedules may range from every 5 months to every 3 years
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>

 
    <div class="container faqWrapper py-5 d-block">
     
    <div
            class="card-header bg-white collapsed"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseTwo"
          >
            <a class="card-title">How can I contact you?</a>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            data-parent="#accordion"
          >
            <div class="card-body bg-white">
            This is dependent on the water source and your usage .Changes in the water source might disrupt your maintenance schedule .Hydra offers free first year maintenance service every 3 months so as to gauge the working of the systems in your space and advise on the best maintenance schedule that will give you optimum functioning of the system .The schedules may range from every 5 months to every 3 years
            </div>
          </div>

          <div
            class="card-header bg-white collapsed"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseThree"
          >
            <a class="card-title">
              How do you  support clients
              ?
            </a>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            data-parent="#accordion"
          >
            <div class="card-body bg-white">
              We offer dedicated help desk and support services to assist
              clients post-implementation. Our support team is available
              to handle inquiries, troubleshoot issues, manage refunds and
              cancellations, and ensure smooth operation of the deployed
              systems. We also provide continuous monitoring and updates
              to keep the systems running efficiently.
            </div>
          </div>
     
     
    </div>
        </div>
        </div>

  </>)
}


export default React.memo(FAQ);