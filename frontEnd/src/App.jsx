import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "./requests/getAllCategories";
import { getAllProducts } from "./requests/getProducts";
import NavMenu from "./components/NavMenu/NavMenu";
import MainPage from "./pages/MainPage/MainPage";
import CartPage from "./pages/CartPage/CartPage";
import Catalog from "./pages/CatalogPage/Catalog";
import ProductByCategory from "./pages/ProductByCategoryPage/ProductByCategory";
import SingleProduct from "./pages/SingleProductPage/SingleProduct";
import AllProducts from "./pages/AllProductsPage/AllProducts";
import NotFound from "./pages/NotFoundPage/NotFound";
import Footer from "./components/Footer/Footer";
import SalePage from "./pages/SalePage/SalePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllCategories), []);
  useEffect(() => dispatch(getAllProducts), []);

  return (
    <div className="App">
      <NavMenu />

      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/categories/:id" element={<ProductByCategory />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/allProducts" element={<AllProducts />}></Route>
        <Route path="/sale" element={<SalePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/signUp" element={<SignUpPage />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

export const shuffleArray = (array) => {
  let shuffledArray = [];
  let usedIndexes = [];
  let i = 0;
  while (i < array.length) {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (!usedIndexes.includes(randomNumber)) {
      shuffledArray.push(array[randomNumber]);
      usedIndexes.push(randomNumber);
      i++;
    }
  }
  console.log(shuffledArray);
  return shuffledArray;
};

