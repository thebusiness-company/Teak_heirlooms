import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import BlogCard from './BlogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const BlogView = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        }, [id]);

    useEffect(() => {
        api.get(`blogs/${id}/`)
        .then((res) => {
            setBlog(res.data);
        })
        .catch((err) => {
            console.error("error fetching blog: ", err);
            
        });
        api.get('blogs/')
        .then(res => setAllBlogs(res.data));
    },[id]);

    if (!blog) return <div>Loading...</div>;
  return (
   <>
   <div className='min-h-screen'>
   <div className=' flex flex-col items-center mb-20 md:mb-28'>
    <h1 className='text-2xl md:text-3xl text-[#3B493F] font-semibold text-center my-6 md:my-10'>Our Latest Blog</h1>
    <div className='mx-4 md:mx-10'>
        
        <div className='mb-6 '>
            <img 
            src={blog.image} 
            alt={blog.title} 
            className='h-full max-h-[344px] md:max-h-[450px] w-full object-fill'/>
        </div>
        <div className='text-xl md:text-2xl text-[#9C0300] mb-6'><h1>{blog.title}</h1></div>
        <div className=''><span>{blog.content}</span></div>
    </div>
   </div>
    <Swiper
    modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={20}
      breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className='mySwiper'
    >
        <div className='flex flex-col md:flex-row'>
            {allBlogs
            .filter(b => b.id !== blog.id)
            .map(b => (
                <SwiperSlide key={b.id}>
                  <BlogCard blog={b} onClick={() => setBlog(b)} />
                </SwiperSlide>
            ))}
        </div>
        <div className="swiper-button-next hidden md:block text-[#9C0300] text-2xl"></div>
        <div className="swiper-button-prev hidden md:block text-[#9C0300] text-2xl"></div>
    </Swiper>
  
   </div>
   </>
  );
}

export default BlogView;
