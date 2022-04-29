import React from 'react';
import './Cases.css';

import { FiArrowDownRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import SKA from '../../assets/images/ska.png';
import Tintas from '../../assets/images/tintas-killing.png';
import Cargo from '../../assets/images/cargobr.png';
import Xalingo from '../../assets/images/xalingo.png';
import Aromatic from '../../assets/images/aromatic.png';


const Cases = () => {
    return(
        <section id='plan-news'>
            <div className='section-top'>
                <h1 className='section-title'>/Plan News</h1>
                <div className='section-subtitle'>
                    <h2 className='subtitle'>/Cases Games</h2>
                    <span className='cta-blog'>
                        <a href="#d">clique aqui para ver todo o blog</a>
                        <FiArrowDownRight />
                    </span>
                </div>
            </div>
            <Swiper className='content-cards'
            slidesPerView={1}
            spaceBetween={30}
            loop={false}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}>
                <SwiperSlide className='card1'>
                    <img src={SKA} alt="" />
                    <a href='#SKA' className='card-tag'>SKA</a>
                    <h2 className='card-title'>Plan cria novo site da SKA</h2>
                    <p className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quia, expedita praesentium temporibus molestias ad placeat!</p>
                    <div className='card-more-info'>
                        <h5 className='more-info'>Saiba Mais</h5>
                        <FiArrowDownRight />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='card2'>
                    <img src={Tintas} alt="" />
                    <a href='#tintas-killing' className='card-tag'>Tintas Killing</a>
                    <h2 className='card-title'>Plan cria novo site para a Tintas Killing</h2>
                    <p className='card-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga temporibus a nam necessitatibus dolorum commodi ullam .</p>
                    <div className='card-more-info'>
                        <h5 className='more-info'>Saiba Mais</h5>
                        <FiArrowDownRight />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='card3'>
                    <img src={Cargo} alt="" />
                    <a href='#cargo-br' className='card-tag'>Cargo Br</a>
                    <h2 className='card-title'>Estamos Desenvolvendo o novo site da CargoBr</h2>
                    <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga temporibus a nam necessitatibus dolorum</p>
                    <div className='card-more-info'>
                        <h5 className='more-info'>Saiba Mais</h5>
                        <FiArrowDownRight />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='card4'>
                    <img src={Xalingo} alt="" />
                    <a href='#xalingo' className='card-tag'>Xalingo</a>
                    <h2 className='card-title'>Clubinho Xalingo com novidades</h2>
                    <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rem illum repudiandae amet nostrum excepturi voluptatum praesentium.</p>
                    <div className='card-more-info'>
                        <h5 className='more-info'>Saiba Mais</h5>
                        <FiArrowDownRight />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='card5'>
                    <img src={Aromatic} alt="" />
                    <a href='#aromatic' className='card-tag'>Aromatic</a>
                    <h2 className='card-title'>Novo site da Aromatic no ar</h2>
                    <p className='card-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dolorum vero id quidem deserunt consectetur. Quasi, obcaecati facere!</p>
                    <div className='card-more-info'>
                        <h5 className='more-info'>Saiba Mais</h5>
                        <FiArrowDownRight />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Cases