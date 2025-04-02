import Homepage from "./components/home/Homepage";
import ShopPage from "./components/shop/ShopPage";
import MainLayout from "./Layout/MainLayout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Adminpage from "./admin/Adminpage";
import RTShipPage from "./components/RTShip/RTShipPage";
import DesignSolution from "./components/DesignSolution/DesignSolution";
import BeSpokePage from "./components/Bespoke/BeSpokePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Page from "./pages/page";
import ProductDetail from "./components/product/ProductDetail";
import Wishlist from "./components/product/Wishlist";
import Category from "./components/category/Category";
import SubCategoryProducts from "./components/category/SubCategoryProducts";

function App() {
  
  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/admin" element={<Adminpage />}/>
          <Route path="/" element={<MainLayout/>} >
            <Route index element={<Homepage/>}/>
            <Route path="shop" element={<ShopPage/>}/>
            <Route path="RDship" element={<RTShipPage/>}/>
            <Route path="design_solution" element={<DesignSolution/>}/>
            <Route path="Bfurniture" element={<BeSpokePage/>}/>
            <Route path="/Category/:category" element={<Category/>}/>
            <Route path="/Subcategory" element={<SubCategoryProducts />} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/page" element={<Page/>}/>
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist/>} />
            
          </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
