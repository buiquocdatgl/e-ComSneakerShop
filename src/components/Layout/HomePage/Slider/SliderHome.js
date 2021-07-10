import React from 'react'
import Slider from "react-slick";
import StarRatings from "react-star-ratings";
import { useState, useEffect } from 'react';
import {settings} from '../Slider/Style'
import AOS from "aos";
import "aos/dist/aos.css";
import "../Slider/SliderHome.css"

function SliderHome() {
    useEffect(() => {
        AOS.init({
            duration : 1100
        });
    }, []);

    const [items, setItems] = useState([
        {
            name: 'chuck 70 high top renew 2',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/converse%2Fchuck%2070%20sunflower%20high%20top.jpg?alt=media&token=2fb57eaa-3f38-4b85-999a-1f328fc1d721',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'Chuck 70 Vintage Canvas Hi',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/converse%2FChuck%2070%20Vintage%20Canvas%20Hi.jpg?alt=media&token=5a1ec781-1f44-449d-a30e-3e4c10d7aa88',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'Chuck 70 Vintage Canvas low',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/converse%2Fchuck%2070%20vintage%20canvas%20low.jpg?alt=media&token=2cc261a6-0a48-4444-969b-c991f2123d67',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'Chuck 70 Vintage Canvas low 2',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/converse%2Fchuck%2070%20vintage%20canvas%20low%202.jpg?alt=media&token=9fd4193a-5e85-4595-82f4-c867d4a4bdeb',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'chuck 70 parchment hi top',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/converse%2Fchuck%2070%20parchment%20hi%20top.jpg?alt=media&token=84ffab4d-e3dc-48c2-80b6-bb0e2313c54a',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'chuck 70 high top renew',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/converse%2Fchuck%20taylor%20all%20star%20high%20top%20renew.jpg?alt=media&token=f8644450-e69e-4459-bef0-064de28e7dc1',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'chuck 70 low top renew',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/converse%2Fchuck%2070%20low%20top%20renew%203.jpg?alt=media&token=2c1b6490-5cb4-4ad5-a43b-2783b8f44c34',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'chuck taylor all star high top renew',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/converse%2Fchuck%2070%20high%20top%20renew.jpg?alt=media&token=2e5a5c1f-42be-4d18-a12d-351a62d3aea2',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'renew chuck taylor all star high top ',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/converse%2Fchuck%2070%20high%20top%20renew%202.jpg?alt=media&token=5a2a4fbc-7adc-4c09-ad65-3bff6c355d18',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'renew chuck taylor all star high top',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/converse%2FChuck%20Yaylor%20All%20Star%20Cx%20High%20Top.jpg?alt=media&token=2e55155f-64c5-4cce-ac62-35e3cf1bd751',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
    ])  


    return (
        <div>
            <div className="group-silder">
                <h3>KHUYẾN MÃI HOT NHẤT</h3>
                <div className="silder">
                    <Slider {...settings}>
                        {items.map((item ,i) =>(
                            <div className="iteml-silder" data-aos={"zoom-in-up"} key={i}>
                                <a href="#">
                                    <div className="ig-silder">
                                        <img src={item.imgurl   } alt="" />
                                    </div>
                                    <div className="name-silder">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="price-sidler">
                                        <span> {item.price} <u>đ</u></span>
                                    </div>
                                    <div className="group-start-review">
                                        <StarRatings
                                            numberOfStars={5}
                                            rating={item.rating}
                                            name='rating'
                                            starDimension="16px"
                                            starRatedColor="#fed330"
                                            starHoverColor="#fed330"
                                            starEmptyColor="white"
                                        />
                                        <p>{item.estimate}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SliderHome
