import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch} from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import ProductComponent2 from "./ProductComponent2";

const SelectedProduct = () => {
    const query=localStorage.getItem('query');
    const number=localStorage.getItem('number');
    const intolerance=localStorage.getItem('intolerance');
    const dispatch = useDispatch();
    const fetchProducts = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_SELECTED_PRODUCTS_API_URL}?query=${query}&number=${number}&intolerances=${intolerance}&apiKey=${process.env.REACT_APP_PRODUCTS_API_KEY}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {fetchProducts();});
  return (
    <div className="ui grid container center" >
      <ProductComponent2/>
    </div>
  );
};

export default SelectedProduct;