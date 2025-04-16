import BestSeller from './BestSeller'
import MainBanner from './MainBanner'
import NewIn from './NewIn'
import SearchProduct from './SearchProduct'
import ShopByFurniture from './ShopByFurniture'
import ShopByRoom from './ShopByRoom'
import ShopCollection from './ShopCollection'
import SmallContent from './SmallContent'
const ShopPage = () => {
  return (
    <>
    <SearchProduct />
    <MainBanner />
    <ShopByFurniture/>
    <ShopByRoom/>
    <ShopCollection/>
    <NewIn/>
    <BestSeller/>
    <SmallContent/>
    </>
  )
}

export default ShopPage
