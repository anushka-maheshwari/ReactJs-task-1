import React from "react";
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div >
      <div className=" grid container ">
        < Link to='/login'><button className="fluid ui button blue">Login</button></Link>
      </div>
      <div className="grid container ">
          <h2>Welcome To Spoonacular</h2>
      </div>
      <div className="grid container ">
      <h3>Explore all your nutritional requirements here</h3>
      </div>
      <div className="grid container">
          <h2>Recipe of the day</h2>
      </div>
    </div>
  );
};

export default Header;