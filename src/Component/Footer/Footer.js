import React from 'react';
import './Footer.css'

 function Footer() {
  return (<>
  <div className='container-fluid p-0'>
  <footer class="footer text-light py-4">
        <div class="container">
            <div class="row footerRow">
                <div class="col-md-6">
                 <h5>Vya<span>par</span> Launch<span>pad</span></h5> 
                    <ul class="list-unstyled ">
                        <li><a href="#" class="text-light">Download</a></li>
                        <li><a href="#" class="text-light">License</a></li>
                    </ul>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-light">Tentang</a></li>
                        <li><a href="#" class="text-light">Design</a></li>
                        <li><a href="#" class="text-light">Programming</a></li>
                        <li><a href="#" class="text-light">E-Books</a></li>
                        <li><a href="#" class="text-light">Video Tutorial</a></li>
                    </ul>
                    <p class="mt-3">&copy; 2024 Animesh All rights reserved</p>
                </div>
                <div class="col-md-6  downloadContainer">
                    <h5>Download</h5>
                    <a href="#"><img src="https://via.placeholder.com/150x50.png?text=App+Store" alt="Download on the App Store"/></a>
                    <a href="#"><img src="https://via.placeholder.com/150x50.png?text=Google+Play" alt="Get it on Google Play"/></a>
                </div>
            </div>
        </div>
    </footer>
  </div>
  </>)
}


export default React.memo(Footer);