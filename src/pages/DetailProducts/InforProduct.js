import React, {useState, useEffect} from 'react'
import Slider from 'react-slick';
import StarRatings from "react-star-ratings";
import AOS from "aos";
import "aos/dist/aos.css";
import { Select, Form, Button, Image } from "antd";

const { Option } = Select;

function capitalizeFirstChar (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function InforProduct() {
    const [count, setCount] = useState(1)
    const [size, setSize] = useState('')
    
    useEffect(() => {
        AOS.init({
            duration : 1100
        });
        
    }, []);

    const availableSize = [35,36,37,38,39,40,41,42]

    const currentProduct = {
        id: 'puma-1',
        name: 'Puma Defy Mid Metal',
        price: 3415000,
        pictures: [
            {
                item: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2Fpuma%20rs%20x3%20plas%20tech%20mist%20green.jpg?alt=media&token=83406d74-c90a-4df8-82a9-949839214c1a',
            },
            {
                item: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2F3.jpg?alt=media&token=6f04c629-2421-4064-ad62-c545da480728',
            },
            {
                item: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2F2.jpg?alt=media&token=217fb255-c58d-4079-a5c7-1d17b98a4c9b',
            },
            {
                item: 'https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/puma%2F1.jpg?alt=media&token=dae22ae1-86b5-4831-957b-1fe461f65344',
            },
        ]
    }
    const settings = {
        customPaging: function (i) {
          return (
              <a href="">
                  <img src={currentProduct.pictures[i].item} alt="" />
              </a>
          )
        },
        dots: true,
        dotsClass: "group-array-image",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplaySpeed: 3000,
        nextArrow: (
          <div>
            <i class="fa fa-angle-right right"></i>
          </div>
        ),
        prevArrow: (
          <div>
            <i class="fa fa-angle-left left"></i>
          </div>
        ),
    };
    return (
        <div className="group-detail-products">
            <div className="group-detail">
                <div className="group-image-detail">
                    <Slider {...settings}>
                        {currentProduct.pictures.map((photo) =>(
                            <div className="image-array-slider">
                                <Image src={photo.item} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="group-information-detail">
                    <div className="information-detail">
                        <div className="name-detail">
                            <h3>Puma Rs X3 Plas Tech Mist Green</h3>
                        </div>
                        <div className="group-description-more">
                            <div className="description-more-info">
                                <div className="group-rate-Review">
                                    <div className="review-products">
                                        <div className="start-review">
                                            <StarRatings
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="22px"
                                            starRatedColor="#fed330"
                                            starHoverColor="#fed330"
                                            starEmptyColor="white"
                                            />
                                        </div>
                                        <p>Chưa Có Đánh Giá</p>
                                    </div>
                                </div>
                                <p>
                                    Mã sản phẩm: <span>607f098ec0132372d7309bce</span>
                                </p>
                                <p>
                                    Nhà xản xuất:  <span>Puma</span>
                                </p>
                                <p>
                                    Bộ sưu tập: <span>Puma Defy Mid Metal</span>
                                </p>
                                <p>
                                    Loại sản phẩm: <span>Puma Defy Mid Metal</span>
                                </p>
                                <p>
                                    Dòng sản phẩm: <span>Puma Rsx</span>
                                </p>
                                <p>
                                    Màu sắc: <span>Đen</span>
                                </p>
                                <p>
                                    Giới tính: <span> Nữ</span>
                                </p>
                            </div>
                        </div>
                        <div className="group-free-detail">
                            <div className="img-free-detail">
                                <img src='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Ffreeship.png?alt=media&token=ed754cad-8f5c-4903-8322-665ab152bcea' alt="free-ship" />
                            </div>
                            <p>
                                Miễn phí giao hàng (tối đa 30k) cho đơn hàng từ 900k Xem chi
                                tiết
						    </p>
                        </div>
                                                <Form>
                            <div className="group-buys-detail">
                                <div className="group-quantity-number">
                                    <span>số lượng</span>
                                    <div className="quantity-number">
                                        <div 
                                            className="click-left" 
                                            onClick={() => {
                                                if (count > 1) {
                                                    setCount(count - 1)
                                                } 
                                                else {
                                                    setCount(1)
                                                }
                                            }}>
                                        -
                                        </div>
                                        <p>{count}</p>
                                        <div 
                                            className="click-right" 
                                            onClick={() =>{
                                            setCount(count + 1)
                                        }}>
                                        +
                                        </div>
                                    </div>
                                </div>
                                <div className="buys-detail">
                                    <Button
                                        type="primary"
                                        htmlType="submit">
                                        <i className="fa fa-shopping-cart" />
                                        Chọn mua hàng
									</Button>
..                                </div>
                            </div>
                            <div className="group-price-size">
                                <div className="group-price">
                                    <span>
                                        2.445.000 <u>đ</u>
                                    </span>
                                </div>
                                <div className="group-size">
                                    <Form.Item
                                        name="size"
                                        label="Chọn kích cỡ"
                                        rules={[
                                        {
                                            required: true,
                                            message: false,
                                        },
                                        ]}
                                    >
                                        <Select onChange={(e)=> setSize(e)} placeholder="size" style={{ width: "100%" }}>
                                            {availableSize.map(num => (
                                                <Option value={num}>{num}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="group-description" data-aos={"fade-down"}>
                <h2>Mô tả Sản phẩm</h2>
                <div className="group-description-text">
                    <p>Sở hữu kiểu dáng siêu phong cách, hiện đại với khả năng sáng tạo màu sắc các lớp TPU vô cùng nổi bật, 
                    giày PUMA x MTV RS-X Tracks Bold sẽ là mẫu giày mang đến cái nhìn mới mẽ trong phong cách thời trang của bạn</p>
                </div>
            </div>
        </div>
    )
}

export default InforProduct
