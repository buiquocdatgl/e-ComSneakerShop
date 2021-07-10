import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from 'react';
import StarRatings from "react-star-ratings";
import '../LatestProduct/LatestProduct.css'

function Card (){

    useEffect(() => {
        AOS.init({
            duration : 1100
        });
    }, []);

    const [products, setProducts] = useState([
        {
            name: 'Vans UA Classic Slip  On 98',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2FVans%20UA%20Classic%20Slip%20%20On%2098.jpg?alt=media&token=3835e4c4-9566-4fbe-85d9-02d9b0ceb6b3',
            price: '2.700.000',
        },
        {
            name: 'Vans Anaheim Factory Style 73 DX',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2FVans%20Anaheim%20Factory%20Style%2073%20DX.jpg?alt=media&token=df71af79-e3b9-4167-82f1-4e1811842f73',
            price: '2.300.000',
        },
        {
            name: 'Vans Anaheim Factor',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2FVans%20Anaheim%20Factory.jpg?alt=media&token=6e905b76-6d01-4a7f-b4b2-5b0bc96fdf36',
            price: '2.300.000',
        },
        {
            name: 'Vans Old Skool 36 Dx Anaheim Factory',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2FVans%20Old%20Skool%2036%20Dx%20Anaheim%20Factory%20-%20Vn0a38g2pxc.jpg?alt=media&token=3578fcb2-7da2-4bff-86e3-f787cde2c25e',
            price: '2.200.000',
        },
        {
            name: 'Vans Old Skool 36 Dx Anaheim Factory',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2FVans%20Old%20Skool%2036%20Dx%20Anaheim%20Factory%20-%20Vn0a38g2oak.jpg?alt=media&token=a078816c-74d2-441e-8b3e-ac07418f1d51',
            price: '2.200.000',
        },
        {
            name: 'vans slip on checkerboard 98',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2Fvans%20slip%20on%20checkerboard%2098.jpg?alt=media&token=9a78c67d-8203-4774-9288-2dc5c952d040',
            price: '1.900.000',
        },
        {
            name: 'Vans Anaheim Factory Style 73 DX',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2Fvans%20anaheim%20factory%20sid%20dx%20-%20vn0a4btxul1.jpg?alt=media&token=a3076f95-a56c-4c5b-bc83-a79ca6c512d8',
            price: '2.300.000',
        },
        {
            name: 'Vans Anaheim Factory Sid Dx',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2FVans%20Anaheim%20Factory%20Sid%20Dx%20-%20Vn0a4btxul4.jpg?alt=media&token=429ac76a-6d20-479a-9bbd-041d2adf48ac',
            price: '2.300.000',
        },
        {
            name: 'Vans Anaheim Factor',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2FVans%20Anaheim%20Factory.jpg?alt=media&token=6e905b76-6d01-4a7f-b4b2-5b0bc96fdf36',
            price: '2.300.000',
        },
        {
            name: 'Vans Anaheim Factory Style 73 DX',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2FVans%20Anaheim%20Factory%20Style%2073%20DX.jpg?alt=media&token=df71af79-e3b9-4167-82f1-4e1811842f73',
            price: '2.300.000',
        },
        {
            name: 'vans ua era 95 dx anaheim factory',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2Fvans%20ua%20era%2095%20dx%20anaheim%20factory%20-%20vn0a2rr1tio.jpg?alt=media&token=9e68e529-f5a4-4100-bfd6-458c14e3691d',
            price: '2.100.000',
        },
        {
            name: 'vans ua sk8-hi 38 dx anaheim factory',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2Fvans%20ua%20sk8-hi%2038%20dx%20anaheim%20factory%20-%20vn0a38gftio.jpg?alt=media&token=f3aef9e9-4ee0-440a-8adf-ad8516d25355',
            price: '2.400.000',
        },
        {
            name: 'vans ua sk8-hi 38 dx anaheim factory',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2Fvans%20ua%20sk8-hi%2038%20dx%20anaheim%20factory%20%20vn0a38gftip.jpg?alt=media&token=a3a2da99-8c38-49c7-849f-1a68f252a0a7',
            price: '2.200.000',
        },
        {
            name: 'vans ua old skool 36 dx anaheim factory',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2Fvans%20ua%20old%20skool%2036%20dx%20anaheim%20factory%20%20vn0a38g2mr4.jpg?alt=media&token=91c6a0b2-84c0-4de6-9210-ecd28c9878bf',
            price: '2.200.000',
        },
        {
            name: 'Vans UA Classic Slip  On 98',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2Fvans%20slip%20on%20checkerboard%2098.jpg?alt=media&token=9a78c67d-8203-4774-9288-2dc5c952d040',
            price: '2.700.000',
        },
        {
            name: 'vans ua old skool 36 dx anaheim factory skulls',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2Fvans%20ua%20old%20skool%2036%20dx%20anaheim%20factory%20skulls%20%20%20vn0a38g2x7y.jpg?alt=media&token=2d20c0ee-a867-41c2-aaa4-6d9127753ec3',
            price: '2.300.000',
        },
        {
            name: 'vans ua era 95 dx anaheim factory skulls',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2Fvans%20ua%20era%2095%20dx%20anaheim%20factory%20skulls%20%20vn0a2rr1x7.jpg?alt=media&token=1ff16520-50f3-42f3-ac21-99f171119560',
            price: '2.100.000',
        },
        {
            name: 'vans ua sk8-hi 38 dx anaheim factory',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2Fvans%20ua%20sk8-hi%2038%20dx%20anaheim%20factory%20%20vn0a38gftip.jpg?alt=media&token=a3a2da99-8c38-49c7-849f-1a68f252a0a7',
            price: '2.200.000',
        },
        {
            name: 'Vans Anaheim Factory Sid Dx',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2FVans%20Anaheim%20Factory%20Sid%20Dx%20-%20Vn0a4btxul4.jpg?alt=media&token=429ac76a-6d20-479a-9bbd-041d2adf48ac',
            price: '2.300.000',
        },
        {
            name: 'Vans Old Skool 36 Dx Anaheim Factory',
            rating: 0,
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/vans%2FVans%20Old%20Skool%2036%20Dx%20Anaheim%20Factory%20-%20Vn0a38g2pxc.jpg?alt=media&token=3578fcb2-7da2-4bff-86e3-f787cde2c25e',
            price: '2.200.000', 
        },
    ])

    return(
        <>
            {products.map((item, i) =>(
                <div className="item-products-list" data-aos={"zoom-in-up"} key = {i}>
                    <a href="#">
                        <div className="ig-products-list">
                            <img src={item.imgurl} alt="" />
                        </div>
                        <div className="name-products-list">
                            <p>{item.name}</p>
                        </div>
                        <div className="price-products-list">
                            <div className="group-price">
                                <span>{item.price} <u>đ</u> </span>
                            </div>
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
                            <p>chưa có đánh giá</p>
                        </div>
                    </a>
            </div>
            ))}
        </>
    )
}

function LatestProduct() {
    
    return (
        <div className="group-list-Products">
            <h3>SẢN PHẨM MỚI NHẤT</h3>
            <div className="list-Products">
                <Card />
            </div>
    </div>
    )
}

export default LatestProduct
