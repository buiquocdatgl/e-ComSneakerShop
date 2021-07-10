import React from 'react'
import Banner from '../../components/Layout/HomePage/Banner/Banner'
import LatestProduct from '../../components/Layout/HomePage/LatestProduct/LatestProduct'
import ProductType from '../../components/Layout/HomePage/ProductType/ProductType'
import SliderHome from '../../components/Layout/HomePage/Slider/SliderHome'
import TradeMark from '../../components/Layout/HomePage/TradeMark/TradeMark'


function Home() {
    return (
        <div className="home">
            <Banner />
            <TradeMark />
            <ProductType />
            <SliderHome />
            <LatestProduct />
        </div>
    )
}

export default Home
