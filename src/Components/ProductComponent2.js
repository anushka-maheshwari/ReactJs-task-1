import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";

const ProductComponent2 = () => {
  const products = useSelector((state) => state.product.products);
  if(products){
    const renderList = products.results.map((product) => {
    const {id,name}=product;

    return (
      <div className="four wide column" key={id} >
          <div className="ui link cards">
            <div className="card">
              <div className="content">
                <div className="header">{name}</div>
              </div>
            </div>
          </div>
      </div>
     
    );
  });
  return <><h1 className="four wide column"><Dashboard/></h1>
  <h1></h1>
  <h6 className="four wide column">{renderList}</h6></>;
}
else{
    return (
       <><h1 className="four wide column"><Dashboard/></h1></>
    )
    
}
}
export default ProductComponent2;