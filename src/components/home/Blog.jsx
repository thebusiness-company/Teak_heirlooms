import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import api from '../../api';
import {useEffect, useState} from "react";


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        api.get('blogs/')
            .then(res => {
                console.log(res.data);
                setBlogs(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section className="py-12 px-4 text-center relative">
            <h2 className="text-3xl font-semibold text-[#3B493F] mb-8">Latest Blog</h2>
            <div className="swiper-container">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 1},
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="mySwiper"
                >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog.id}>
                            <div className="bg-[#FFF] overflow-hidden mx-auto w-11/12 sm:w-3/4 md:w-3/5 lg:w-2/3 ">
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                                <div className="p-4 text-left">
                                    <h3 className="text-lg font-semibold text-[#3B493F]">{blog.title}</h3>
                                    <p className="text-[#000] mt-2">{blog.content}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button-next hidden md:block" style={{ color: '#9C0300', fontSize: '24px' }}></div>
                <div className="swiper-button-prev hidden md:block" style={{ color: '#9C0300', fontSize: '24px' }}></div>
            </div>
        </section>
    );
};

export default Blog;
