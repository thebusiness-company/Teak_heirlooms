import { useEffect } from 'react'
import Blog from './Blog'
import HomeBanner from './HomeBanner'
import HomeCategory from './HomeCategory'
import HomeCollection from './HomeCollection'
import LatestVideo from './LatestVideo'
import MarketBanner from './MarketBanner'
import Testimonial from './Testimonial'
import { randomValue } from '../../GenerateCardCode'

const Homepage = () => {
  useEffect(() => {
    if (localStorage.getItem('cart_code') === null) {
        localStorage.setItem('cart_code', randomValue)
    } 
}
, [])
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
