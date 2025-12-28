import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';



const Slider = () => {
    return (
        <div className='z-0  '>
            <Swiper loop={true} effect={'fade'} navigation={true} modules={[EffectFade, Navigation]} className="mySwiper">
                <SwiperSlide> <video
                autoPlay loop 
                    muted
                    playsInline
                    className="w-full h-[600px] lg:object-cover "
                >
                    <source src="https://v.ftcdn.net/02/41/78/80/700_F_241788038_FJ1C13iACVnXSPWnGa3jyckVEgf9WLwb_ST.mp4" type="video/mp4" />
                </video></SwiperSlide>
                <SwiperSlide> <video
                autoPlay loop 
                    muted
                    playsInline
                    className="w-full h-[600px] lg:object-cover "
                >
                    <source src="https://v.ftcdn.net/16/04/03/73/700_F_1604037327_XTKqKPGEo48L33H95n67vxEeQyHdjQFT_ST.mp4" type="video/mp4" />
                </video></SwiperSlide>
                <SwiperSlide> <video
                autoPlay loop 
                    muted
                    playsInline
                    className="w-full h-[600px] lg:object-cover "
                >
                    <source src="https://v.ftcdn.net/15/81/13/31/700_F_1581133184_ZSiRSKIbZEClvIBv6qFLP75WrYI5zOEl_ST.mp4" type="video/mp4" />
                </video></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;