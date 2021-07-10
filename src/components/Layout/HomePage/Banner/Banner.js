import React from 'react'
import Slider from "react-slick";
import '../Banner/Banner.css'
// import anh1 from "https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fanh1.jpg?alt=media&token=2a2f4b25-c302-4ca4-9414-8f01a8bee249g"
// import anh2 from "https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fanh2.jpg?alt=media&token=804f1659-4b46-48ae-93c7-d8b110f026d0"
// import anh3 from "https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fanh3.jpg?alt=media&token=87e985ad-03aa-41a0-950e-8b8c48cd92d2"
// import anh4 from "https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fanh4.jpg?alt=media&token=7eb542b8-b961-4862-a330-92cc63dbb1e6"

function Banner() {
    const photos = [
        {
          banner: "https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fanh3.jpg?alt=media&token=87e985ad-03aa-41a0-950e-8b8c48cd92d2", 
        },
        {
          banner: "https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fanh2.jpg?alt=media&token=804f1659-4b46-48ae-93c7-d8b110f026d0",
        },
        {
          banner: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fanh4.jpg?alt=media&token=7eb542b8-b961-4862-a330-92cc63dbb1e6',
        },
        {
          banner: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fanh1.jpg?alt=media&token=2a2f4b25-c302-4ca4-9414-8f01a8bee249',
        },
    ];

    const settings = {
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 550,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="ground-banner">
            <div className="list-banner">
                <Slider {...settings} className="list-item-banner">
                    {photos.map((photo ,i) =>(
                        <div className="items-banner" key ={i}>
                            <img src={photo.banner}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Banner
