import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound_img from '../../image/treansparent1a.png'

const PageNotFound = () => {
    return (
        <div className="center" style={{width: "100%", height: "100% " }}>
        <img src={PageNotFound_img}  />
        <p style={{textAlign:"center"}}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
}

export default PageNotFound;
