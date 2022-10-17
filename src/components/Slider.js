import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from './Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Controller } from 'swiper';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ slides }) => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return (
        <Container>
            <div className="swipers">
                <Swiper
                    modules={[Navigation, A11y, Controller]}
                    spaceBetween={10}
                    slidesPerView={4}
                    autoHeight="true"
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper }}
                    loop="true"
                    slideToClickedSlide="true"
                    loopedSlides="4"
                    direction="vertical"
                    navigation={{
                        nextEl: '.review-swiper-button-next',
                        prevEl: '.review-swiper-button-prev',
                    }}
                >
                    {
                        slides.map((item, index) =>
                            <SwiperSlide key={index}>
                                <GatsbyImage image={getImage(item.image?.localFile)} alt="referenzen image" />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                    <button className="arrows review-swiper-button-next"><svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1666 1.125L9.99998 9L1.83331 1.125" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
                    <button className="arrows review-swiper-button-prev"><svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.625 8.875L9.5 1L17.375 8.875" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
                <Swiper
                    modules={[Navigation, A11y, Controller]}
                    spaceBetween={50}
                    slidesPerView={1}
                    touchRatio="0.2"
                    autoHeight="true"
                    loop="true"
                    loopedSlides="4"
                    centeredSlides="true"
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                >
                    {
                        slides.map((item, index) =>
                            <SwiperSlide key={index}>
                                <GatsbyImage image={getImage(item.image?.localFile)} alt="referenzen image" />
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            </div>
        </Container>
    )
}

export default Slider
