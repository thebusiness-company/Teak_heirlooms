import Blog from './Blog'
import HomeBanner from './HomeBanner'
import HomeCategory from './HomeCategory'
import HomeCollection from './HomeCollection'
import LatestVideo from './LatestVideo'
import MarketBanner from './MarketBanner'
import Testimonial from './Testimonial'

const Homepage = () => {
  return (
    <>
    <HomeBanner/>
    <HomeCollection/>
    <MarketBanner/>
    <HomeCategory/>
    <Blog/>
    <Testimonial/>
    <LatestVideo/>
    </>
  )
}

export default Homepage
