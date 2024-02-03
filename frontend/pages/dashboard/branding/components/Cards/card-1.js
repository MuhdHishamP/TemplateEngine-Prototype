import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Navigation, Pagination,]);

const CardOne = ({ key, productData, storeCurrency, dis_price, retail_price, discount, cardData }) => {


    const [isPlaying, setIsPlaying] = React.useState(true);
    const [isReady, setIsReady] = React.useState(false);
    const playerRef = React.useRef();
    const onReady = React.useCallback(() => {
        if (!isReady) {
            const timeToStart = (7 * 60) + 12.6;
            setIsReady(true);
            setIsPlaying(true)
        }
    }, [isReady]);

    const [swiper, setSwiper] = useState(null);
    const slideTo = (index) => {
        if (swiper) {
            swiper.slideTo(index);
        }
    };

    return (
        <>
            <div key={key} className={`flex flex-col justify-center md:mt-2 items-center bg-[#fafafa] dark:bg-[#1a1a1a] mt-4`}>
                <div style={{
                    "backgroundColor": cardData ? cardData[0]?.cardOne?.backgroundColor : null,
                    "borderRadius": cardData ? cardData[0]?.cardOne?.brRadius + "%" : null,
                    "padding": `${cardData ? cardData[0]?.cardOne?.boxPadding : null}%`,
                    "box-shadow": cardData ? cardData[0]?.cardOne?.boxShadow : null,
                }}
                    className={`dark:bg-[#2a2a2a] mx-2 p- shadow hover:scale-105 hover:shadow-xl duration-500 hover:opacity-70"`}>
                    <div className="block">

                        {cardData ? cardData[0]?.cardOne?.isScroll === true ? (
                            <>
                                <Swiper
                                    slidesPerView="auto"
                                    spaceBetween={10}
                                    slidesPerGroup={1}
                                    // centeredSlides={true}
                                    touchEventsTarget="container"
                                    onSwiper={(swiper) => setSwiper(swiper)}
                                    autoplay={{
                                        delay: 5000,
                                        enable: true,
                                        enableOnInteraction: true,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        576: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                    //speed={2200}
                                    style={{
                                        "--swiper-pagination-color": "#FFBA08",
                                        "--swiper-pagination-bullet-inactive-color": "#999999",
                                        "--swiper-pagination-bullet-inactive-opacity": "1",
                                        "--swiper-pagination-bullet-size": "5px",
                                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                                        "border-radius": `${cardData ? cardData[0]?.cardOne?.brRadiusImage : null}%`,
                                        "padding": `${cardData ? cardData[0]?.cardOne?.imagePadding : null}%`,
                                        "border-radius": `${cardData ? cardData[0]?.cardOne?.brRadiusImage : null}%`,
                                        "box-shadow": cardData ? cardData[0]?.cardOne?.imageShadow : null,

                                        //"box-shadow": "10px 10px #fafafa;"
                                    }}
                                    //navigation={true}
                                    effect="fade"
                                    modules={[Pagination, Navigation,]}
                                    className="block md:max-h-[220px] md:w-[200px]" >
                                    {productData?.images.map((item, index) => (
                                        <>
                                            <div key={index}>
                                                <SwiperSlide>
                                                    <img className="shadow-lg object-cover" src={item?.image}
                                                        onClick={() => slideTo(index)}
                                                        onMouseEnter={() => slideTo(index)} />
                                                </SwiperSlide>
                                            </div>
                                        </>
                                    ))}
                                </Swiper>
                            </>
                        ) : (
                            <>
                                <div className="p-2">
                                    <img style={{
                                        "padding": `${cardData ? cardData[0]?.cardOne?.imagePadding : null}%`,
                                        "border-radius": `${cardData ? cardData[0]?.cardOne?.brRadiusImage : null}%`,
                                        "box-shadow": cardData ? cardData[0]?.cardOne?.imageShadow : null
                                    }}
                                        src={productData?.images[0].image}
                                        className="object-cover h-64 w-full" />
                                </div>
                            </>
                        ) : null}
                    </div>

                    <div className="px-4 py-3 cursor-pointer">
                        <a href={'/product/' + productData?.name + "/" + productData?.id} target="_blank" rel="noopener noreferrer">
                            <span className="mr-3 md:text-sm text-2xl font-semibold"
                                style={{ "color": cardData ? cardData[0]?.cardOne?.titleColor : null }} >
                                {productData?.name.substring(0, 20)}{productData?.name?.length >= 20 && '...'}
                            </span>
                            <p className="md:text-sm text-lg text-[#5b5b5b] dark:text-[#dadada] block"
                                style={{ "color": cardData ? cardData[0]?.cardOne?.catColor : null }}>
                                {productData?.cat?.name.substring(0, 25)} {productData?.cat?.name.length >= 25 && '...'}
                            </p>
                            <div className="flex items-center">
                                {productData?.discount_price ? (
                                    <>
                                        <p style={{ "color": cardData ? cardData[0]?.cardOne?.priceColor : null }}
                                            className="md:text-sm text-xl font-semibold my-3">{storeCurrency} {dis_price}</p>
                                        <del>
                                            <p style={{ "color": cardData ? cardData[0]?.cardOne?.disDelColor : null }}
                                                className="md:text-sm text-base ml-2 text-gray-400 dark:text-gray-300">{storeCurrency} {retail_price}</p>
                                        </del>
                                    </>
                                ) : (
                                    <>
                                        <p style={{ "color": cardData ? cardData[0]?.cardOne?.priceColor : null }}
                                            className="md:text-sm text-xl font-semibold my-3 ">{storeCurrency} {retail_price}</p>
                                        <del>
                                            <p style={{ "color": cardData ? cardData[0]?.cardOne?.disDelColor : null }}
                                                className="md:text-sm text-base ml-2 text-gray-400 dark:text-gray-300">{storeCurrency} {retail_price}</p>
                                        </del>
                                    </>)}
                                {discount === "none" ? (
                                    null
                                ) : (
                                    <>
                                        <p style={{ "color": cardData ? cardData[0]?.cardOne?.disColor : null }}
                                            className="md:text-xs text-base ml-7 from-green-500 via-green-600 to-green-500 bg-gradient-to-r bg-clip-text text-transparent">{discount} % OFF</p>
                                    </>
                                )}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardOne;