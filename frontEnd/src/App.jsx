import s from './App.module.css'
import NavMenu from './components/NavMenu/NavMenu';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

import AllSales from './pages/AllSalesPage/AllSales';
import CartPage from './pages/CartPage/CartPage';
import Catalog from './pages/CatalogPage/Catalog';
import ProductByCategory from './pages/ProductByCategoryPage/ProductByCategory';
import SingleProduct from './pages/SingleProductPage/SingleProduct';
import AllProducts from './pages/AllProductsPage/AllProducts';
function App() {
  
  return (
    <div className={s.App} >
<NavMenu />
<Routes>
  <Route path='/catalog' element={<Catalog />}></Route>
  <Route path='/categories/:id' element={<ProductByCategory />}></Route>
  <Route path='/products/:id' element={<SingleProduct />}></Route>
  <Route path='/' element={<MainPage />}></Route>
  <Route path='/allProducts' element={<AllProducts/>}></Route>
  <Route path='/allSales' element={<AllSales />}></Route>
  <Route path='/cart' element={<CartPage />}></Route>
</Routes>
    </div>
  );
}

export default App;
