import AdminTestHook from './AdminTestHook'
// import AdminTestimonials from './AdminTestimonials'
import UploadBanner from './UploadBanner'
import AdminBlog from './AdminBlog'
import LatestVideo from './LatestVideo'


const Adminpage = () => {
  return (
    <>
    <AdminBlog/>
    <UploadBanner/>
    {/* <AdminTestimonials/> */}
    <AdminTestHook/>
    <LatestVideo/>
    </>
  )
}

export default Adminpage
