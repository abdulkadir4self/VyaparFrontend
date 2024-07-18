import React from 'react'
import { NavLink , Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      
      <p> 404 PageNotFound </p> 
      <Link to={'/'}>Home</Link>
    </div>
    
  )
}


export default React.memo(PageNotFound);