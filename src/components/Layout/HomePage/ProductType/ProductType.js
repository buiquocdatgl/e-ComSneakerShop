import React from 'react'
import { useState, useEffect } from 'react';
import StarRatings from "react-star-ratings";
    import AOS from "aos";
import "aos/dist/aos.css";
import '../ProductType/ProductType.css'

function Card(){

    useEffect(() => {
        AOS.init({
            duration : 1100
        });
    }, []);

    const [products, setProducts] = useState([
        {
            name: 'puma x first mile lqdcell shatter',
            rating: 5,
            type: 'puma rsx',
            imgurl:'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2FPuma%20Bari%20Mule%20Black.jpg?alt=media&token=fce4a698-b10a-4acc-a1c6-e053c4c60652',
            price: '3.415.000',
            estimate:'3 đánh giá'
        },
        {
            name: 'puma nova 2 plein air',
            rating: 3,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20carina%20lift.jpg?alt=media&token=18c12d78-f0a7-4615-a8ff-148534feeb8b',
            price: '2.275.000',
            estimate:'1 đánh giá'
        },
        {
            name: 'puma cell venom',
            rating: 0,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20cell%20venom.jpg?alt=media&token=c4eb7087-77b6-4d42-acbb-77ce11e0343c',
            price: '2.430.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'puma nova 2 plein air',
            rating: 0,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2FPuma%20Defy%20Mid%20Metal.jpg?alt=media&token=46eb9931-8ef9-4453-8e19-c74c429305f4',
            price: '2.989.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20mule.jpg?alt=media&token=24938949-496e-4317-a207-a81c2bed90c6',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20rs%20x3%20plas%20tech%20mist%20green.jpg?alt=media&token=83406d74-c90a-4df8-82a9-949839214c1a',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20rsx%20color%20theory.jpg?alt=media&token=cbcabdaa-fe80-4083-b3ca-f786b662f853',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20rsx%20hard%20drive.jpg?alt=media&token=2a3dd429-b22d-4872-8de0-fa3d5d2d60e1',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20rsx%20metallic.jpg?alt=media&token=80a8f7ec-a398-43b1-b598-927e2b568f49',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20rsx%20reinvention.jpg?alt=media&token=fe02cbc9-264d-4787-ab87-a5c3dc5b23c2',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20rsx%20softcase.jpg?alt=media&token=abc089d5-283e-4b41-bb0d-b1d70881bf9c',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20rsx%20winter%20glimmer.jpg?alt=media&token=7b858f15-cdb1-4269-beae-c0ad587d7f64',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20rsx3%20plas%20tech.jpg?alt=media&token=5828ee49-3f79-410e-a85e-25af8be828ec',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20skye%20stripe.jpg?alt=media&token=33daf197-69aa-44e9-8586-df2d4c33dea5',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20style%20rider%20play%20on.jpg?alt=media&token=a3c50249-8aed-4b41-95f3-1995d0c0f79a',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20thunder%20fashion%202.0.jpg?alt=media&token=2989daf4-3bc1-4954-ae8c-a4fdf31678b3',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20thunder%20spectra.jpg?alt=media&token=338f7d5b-137b-49af-9657-d5c6071cbb18',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx puzzle',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20rsx%20puzzle%202.jpg?alt=media&token=4271897a-41c9-4425-a9d4-9d4fc0e7f568',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx puzzle',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20rsx%20puzzle.jpg?alt=media&token=dd3cc7be-7e2b-4f9f-8853-fdcf96b2a61d',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx puzzle',
            imgurl: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20x%20mtv%20rsx%20tracks%20bold.jpg?alt=media&token=c40e77d0-15b5-4114-a154-b5ea40d29176',
            price: '3.415.000',
        }
    ])
    return(
        <>
            {products.map((item , i)=> (
                <div className="item-products-type" data-aos={"zoom-in-up"} key={i}>
                    <a href="#">
                        <div className="ig-products-type">
                            <img src={item.imgurl} alt="" />
                        </div>
                        <div className="name-products-type">
                            <p>{item.name}</p>
                        </div>
                    </a>
                    <div className="price-products-type">
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
                        <p>{item.estimate}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

function ProductType() {
    return (
        <>
            <div>
                <div className="group-products-type">
                    <h3> DÀNH RIÊNG CHO BẠN</h3>
                    <div className="products-type">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductType
