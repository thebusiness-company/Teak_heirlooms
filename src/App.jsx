import Homepage from "./components/home/Homepage";
import ShopPage from "./components/shop/ShopPage";
import MainLayout from "./Layout/MainLayout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Adminpage from "./admin/Adminpage";
import RTShipPage from "./components/RTShip/RTShipPage";
import DesignSolution from "./components/DesignSolution/DesignSolution";
import BeSpokePage from "./components/Bespoke/BeSpokePage";

function App() {
  const [bannerData, setBannerData] = useState({
          leftImage: null,
          rightImage: null,
          title: "Make Space for New Wall",
          subtitle: "Wall panel Starting @RS.3600",
          buttonText: "Shop Now",
        });

  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/admin" element={<Adminpage />}/>
          <Route path="/" element={<MainLayout/>} >
            <Route index element={<Homepage/>}/>
            <Route path="shop" element={<ShopPage onUpload={setBannerData} data={bannerData}/>}/>
            <Route path="RDship" element={<RTShipPage/>}/>
            <Route path="design_solution" element={<DesignSolution/>}/>
            <Route path="Bfurniture" element={<BeSpokePage/>}/>
            <Route path="collection" element={<h1>collection</h1>}/>
          </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
