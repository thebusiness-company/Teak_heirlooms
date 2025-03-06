import BestSeller from './BestSeller'
import MainBanner from './MainBanner'
import NewIn from './NewIn'
import SearchBar from './SearchBar'
import ShopByFurniture from './ShopByFurniture'
import ShopByRoom from './ShopByRoom'
import ShopCollection from './ShopCollection'
import SmallContent from './SmallContent'
const ShopPage = () => {
  return (
    <>
    <SearchBar />
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
