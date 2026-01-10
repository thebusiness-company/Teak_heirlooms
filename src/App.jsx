import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import api from "./api";
import { AuthProvider } from "./context/AuthContext";
import ScrollProvider from "./context/ScrollContext";
import PageSkeleton from "./components/ui/PageSkeleton";


// Home & Shop
const Homepage = lazy(() => import("./components/home/Homepage"));
const ShopPage = lazy(() => import("./components/shop/ShopPage"));
const RTShipPage = lazy(() => import("./components/RTShip/RTShipPage"));
const DesignSolution = lazy(() => import("./components/DesignSolution/DesignSolution"));
const BeSpokePage = lazy(() => import("./components/Bespoke/BeSpokePage"));

// Product & Category
const ProductDetail = lazy(() => import("./components/product/ProductDetail"));
const Category = lazy(() => import("./components/category/Category"));
const SubCategoryProducts = lazy(() => import("./components/category/SubCategoryProducts"));

// Auth & User
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));

// Cart & Orders
const Cart = lazy(() => import("./pages/Cart"));
const OrderConfirmation = lazy(() => import("./components/order/OrderConfirmation"));
const OrderAddressPage = lazy(() => import("./components/order/OrderAddressPage"));
const OrderStatus = lazy(() => import("./pages/OrderStatus"));
const OrderDetails = lazy(() => import("./components/order/OrderDetails"));

// Collections & Rooms
const RoomPage = lazy(() => import("./components/room/RoomPage"));
const CollectionPage = lazy(() => import("./components/shop/CollectionPage"));
const ShopCollection = lazy(() => import("./components/shop/ShopCollection"));

// Content Pages
const Page = lazy(() => import("./pages/Page"));
const ContactForm = lazy(() => import("./pages/ContactForm"));
const BlogView = lazy(() => import("./components/home/BlogView"));
const ShippingandDelivery = lazy(() => import("./pages/ShippingandDelivery"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Campaign = lazy(() => import("./pages/campaign/Campaign"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

/* -------------------- App -------------------- */

function App() {
  const [numCartItems, setNumCartItems] = useState(0);
  const cart_code = localStorage.getItem("cart_code");

  useEffect(() => {
    if (!cart_code) return;

    api
      .get(`get_cart_status/?cart_code=${cart_code}`)
      .then((response) => {
        setNumCartItems(response.data.number_of_items || 0);
      })
      .catch((error) => {
        console.error("Cart status error:", error.message);
      });
  }, [cart_code]);

  return (
    <AuthProvider>
      <ScrollProvider>
        <Router>
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route
                path="/"
                element={<MainLayout numCartItems={numCartItems} />}
              >
                {/* Home */}
                <Route index element={<Homepage />} />

                {/* Shop */}
                <Route path="shop" element={<ShopPage />} />
                <Route path="RDship" element={<RTShipPage />} />
                <Route path="design_solution" element={<DesignSolution />} />
                <Route path="Bfurniture" element={<BeSpokePage />} />

                {/* Category & Product */}
                <Route path="Category/:category" element={<Category />} />
                <Route path="Subcategory" element={<SubCategoryProducts />} />
                <Route
                  path="product/:slug"
                  element={<ProductDetail setNumCartItems={setNumCartItems} />}
                />

                {/* Auth */}
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />

                {/* Protected */}
                <Route
                  path="cart"
                  element={
                    <ProtectedRoute>
                      <Cart setNumCartItems={setNumCartItems} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />

                {/* Orders */}
                <Route
                  path="order-confirmation/:orderId?"
                  element={<OrderConfirmation />}
                />
                <Route path="orderaddress" element={<OrderAddressPage />} />
                <Route path="orderstatus" element={<OrderStatus />} />
                <Route path="orderdetails" element={<OrderDetails />} />

                {/* Collections & Rooms */}
                <Route path="room" element={<RoomPage />} />
                <Route path="collect" element={<CollectionPage />} />
                <Route path="collections" element={<ShopCollection />} />

                {/* Content */}
                <Route path="page" element={<Page />} />
                <Route path="contact" element={<ContactForm />} />
                <Route path="blogs/:id" element={<BlogView />} />
                <Route path="shipping-delivery" element={<ShippingandDelivery />} />
                <Route path="terms" element={<TermsAndConditions />} />
                <Route path="campaign" element={<Campaign />} />

                {/* 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </ScrollProvider>
    </AuthProvider>
  );
}

export default App;
