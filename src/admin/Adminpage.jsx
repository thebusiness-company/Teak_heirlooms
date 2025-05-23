import AdminTestHook from './AdminTestHook'
// import AdminTestimonials from './AdminTestimonials'
import UploadBanner from './UploadBanner'
import AdminBlog from './AdminBlog'
import LatestVideo from './LatestVideo'
import ProductAdmin from './ProductAdmin'
import ShopBannerAdmin from './ShopBannerAdmin'


const Adminpage = () => {
  return (
    <>
    <AdminBlog/>
    <UploadBanner/>
    {/* <AdminTestimonials/> */}
    <AdminTestHook/>
    <LatestVideo/>
    <ProductAdmin/>
    <ShopBannerAdmin/>
    </>
  )
}

export default Adminpage
