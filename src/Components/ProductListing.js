import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_RANDOM_PRODUCTS_API_URL}?apiKey=${process.env.REACT_APP_PRODUCTS_API_KEY}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {fetchProducts();});
  return (
    <div className="ui grid container center" >
      <ProductComponent />
    </div>
  );
};

export default ProductPage;