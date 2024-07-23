import React from 'react'

function HomeFeatures() {
  return (<>
    <div class="homeFeaturesSection container-fluid pt-5 px-0">
        <div class="container homeFeatureContainer">
            <h2 class="text-center pt-5 pb-4">Some <span class="text-danger">FEATURES</span> lorem ipsum ajfa</h2>
            <div class="row homeFeatureRow">
                <div class="col-md-3 homeFeatureCol">
                    <div class="feature-card " style={{backgroundImage : "url('path/to/your/image1.png');"}}>
                        <h6>Comprehensive Accounting</h6>
                        <p>Manage your business finances with features like invoicing, expense tracking, and GST filing.</p>
                        <p class="price">OT 2500 Т.</p>
                    </div>
                </div>  
                <div class="col-md-3 homeFeatureCol ">
                    <div class="feature-card " style={{backgroundImage : "url('path/to/your/image1.png');"}}>
                        <h6>Inventory Management</h6>
                        <p>Efficiently manage your stock with real-time tracking of inventory levels, automatic stock updates, and alerts for low stock</p>
                        <p class="price">OT 4000 Т.</p>
                    </div>
                </div>
                <div class="col-md-3 homeFeatureCol">
                    <div class="feature-card " style={{backgroundImage : "url('path/to/your/image1.png');"}}>
                        <h6>AI-Powered Insights</h6>
                        <p>Utilize AI-driven analytics to gain insights into your business performance. Predict sales trends,</p>
                        <p class="price">OT 4500 Т.</p>
                    </div>
                </div>
                <div class="col-md-3 homeFeatureCol">
                    <div class="feature-card " style={{backgroundImage : "url('path/to/your/image1.png');"}}>
                        <h6>Customer Relationship Management (CRM)</h6>
                        <p>Замена слюды, магнитрона, восстановление кнопок и др.</p>
                        <p class="price">OT 2500 Т.</p>
                    </div>
                </div>
                <div class="col-md-3 homeFeatureCol">
                    <div class="feature-card " style={{backgroundImage : "url('path/to/your/image1.png');"}}>
                        <h6>Chatbot Integration</h6>
                        <p>Замена слюды, магнитрона, восстановление кнопок и др.</p>
                        <p>Замена слюды, магнитрона, восстановление кнопок и др.</p>

                        <p class="price">OT 2500 Т.</p>
                    </div>
                </div>
                
                <div class="col-md-3 homeFeatureCol">
                    <div class="feature-card " style={{backgroundImage : "url('path/to/your/image1.png');"}}>
                        <h6>Comprehensive Accounting</h6>
                        <p>Manage your business finances with features like invoicing, expense tracking, and GST filing.</p>
                        <p class="price">OT 2500 Т.</p>
                    </div>
                </div> 
               
                <div class="col-md-3 homeFeatureCol">
                    <div class="feature-card " style={{backgroundImage : "url('path/to/your/image1.png');"}}>
                        <h6>Comprehensive Accounting</h6>
                        <p>Manage your business finances with features like invoicing, expense tracking, and GST filing.</p>
                        <p class="price">OT 2500 Т.</p>
                    </div>
                </div> 
                {/* <div class="col-md-3 homeFeatureCol">
                    <div class="feature-card " style={{backgroundImage : "url('path/to/your/image1.png');"}}>
                        <h6>Payment Gateway Integration</h6>
                        <p>На все запчасти и выполненные услуги</p>
                        <p class="price">БЕСПЛАТНО</p>
                    </div>
                </div> */}
                <div class="col-md-3 homeFeatureCol">
                    <div class="feature-card " style={{backgroundImage : "url('path/to/your/image1.png');"}}>
                        <h6>Comprehensive Accounting</h6>
                        <p>Manage your business finances with features like invoicing, expense tracking, and GST filing.</p>
                        <p class="price">OT 2500 Т.</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    </>)
}



export default React.memo(HomeFeatures);
