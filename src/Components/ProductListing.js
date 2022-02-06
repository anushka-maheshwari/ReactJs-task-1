import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://api.spoonacular.com/recipes/random?apiKey=72c1f614304941ff8567b8d860bda7aa")
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