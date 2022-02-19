import { combineReducers } from "redux";
import { productsReducer} from "./productReducer";
import { selectedProductsReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;