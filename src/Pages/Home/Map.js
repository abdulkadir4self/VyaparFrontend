import React from 'react'

function Map() {
  return (<>
            <div className='container-fluid'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.886118520883!2d82.90589327444795!3d25.375132924472346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2cb56aaaaaab%3A0x696093e56a41636e!2sCIVICCRAFT%20CRAFTING%20E-GOVERNANCE!5e0!3m2!1sen!2sin!4v1721723092520!5m2!1sen!2sin" width="100%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
  </>)
}


export default React.memo(Map);