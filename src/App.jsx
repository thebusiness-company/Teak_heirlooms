import Homepage from "./components/home/Homepage";
import ShopPage from "./components/shop/ShopPage";
import MainLayout from "./Layout/MainLayout"
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Adminpage from "./admin/Adminpage";
import RTShipPage from "./components/RTShip/RTShipPage";
import DesignSolution from "./components/DesignSolution/DesignSolution";
import BeSpokePage from "./components/Bespoke/BeSpokePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Page from "./pages/page";
import ProductDetail from "./components/product/ProductDetail";
import Category from "./components/category/Category";
import SubCategoryProducts from "./components/category/SubCategoryProducts";
import api from "./api";
import Cart from "./pages/Cart";
import ProdectedRoute from "./components/ui/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";
import NotFoundPage from "./pages/NotFoundPage";
import OrderConfirmation from "./components/order/OrderConfirmation";
import OrderAddressPage from "./components/order/OrderAddressPage";
import RoomPage from "./components/room/RoomPage";
import CollectionPage from "./components/shop/CollectionPage";
import ShopCollection from "./components/shop/ShopCollection";

function App() {
  const[numCartItems, setNumCartItems] = useState(0);
  const cart_code = localStorage.getItem('cart_code');

  useEffect(() => {
    console.log(cart_code,'cart_codeqqqqqqqqqqqqq');
    if (cart_code) {
      api.get(`get_cart_status?cart_code=${cart_code}`)
        .then((response) => {
          console.log(response.data);
          console.log(response.data.number_of_items,'num_cart_items');
          setNumCartItems(response.data.number_of_items);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [cart_code]);


  return (
    <>
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<ProdectedRoute><Adminpage /></ProdectedRoute>}/>
          <Route path="/" element={<MainLayout numCartItems={numCartItems}/>} >
            <Route index element={<Homepage/>}/>
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="shop" element={<ShopPage/>}/>
            <Route path="RDship" element={<RTShipPage/>}/>
            <Route path="design_solution" element={<DesignSolution/>}/>
            <Route path="Bfurniture" element={<BeSpokePage/>}/>
            <Route path="/Category/:category" element={<Category/>}/>
            <Route path="/Subcategory" element={<SubCategoryProducts />} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/page" element={<Page/>}/>
            <Route path="/product/:slug" element={<ProductDetail setNumCartItems={setNumCartItems}/>} />
            <Route path="/cart" element={<ProdectedRoute><Cart setNumCartItems={setNumCartItems}/></ProdectedRoute>} />
            <Route path="/profile" element={<ProdectedRoute><Profile/></ProdectedRoute>} />
            <Route path="/order-confirmation/:orderId?" element={<OrderConfirmation />} />
            <Route path="/orderaddress" element={<OrderAddressPage />} />
            <Route path="/room" element={<RoomPage />} />
            <Route path="/collect" element={<CollectionPage />} />
            <Route path="/collections" element={<ShopCollection />} />
            
            
          </Route>
        </Routes>
      </Router>
      </AuthProvider>
      
    </>
  )
}

export default App
