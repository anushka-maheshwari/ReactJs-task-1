import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  function clickHandler()
  {
      alert("Please Login First");
  }
  if(products.recipes)
  {
    const  title  = products.recipes[0].title;
    const image=products.recipes[0].image;
    return (
        <div className="four wide column">
            <Header/>
            <div className="four wide column" >
          <div className="ui link cards">
            <div className="card">
            <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                For Complete Recipe  <button className="fluid ui button blue" onClick={clickHandler}>Read More</button>
              </div>
            </div>
          </div>
      </div>
        </div>
      
    );
}else{
    return (
        <div className="four wide column" >
            <div className="ui link cards">
              <div className="card">
                <div className="content">
                  <div className="header"></div>
                </div>
              </div>
            </div>
        </div>
    )
}
  }
   
export default ProductComponent;