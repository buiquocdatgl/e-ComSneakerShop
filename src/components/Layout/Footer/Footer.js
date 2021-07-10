import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { EyeOutlined } from '@ant-design/icons';
import '../Footer/Footer.css'


function Footer() {
    return (
        <div className="frames-group-footer">
            <div className="group-footer">
                <div className="footer">
                    <div className="group-information-user">
                        <h3>HỖ TRỢ KHÁCH HÀNG</h3>
                        <ul>
                            <li>Các câu hỏi thường gặp</li>
                            <li>Gửi yêu cầu hỗ trợ</li>
                            <li>Hướng dẫn đặt hàng</li>
                            <li>Phương thức vận chuyển</li>
                            <li>Chính sách đổi trả</li>
                            <li>Hướng dẫn mua trả góp</li>
                        </ul>
                    </div>
                    <div className="group-information-website">
                        <h3>VỀ SHOP</h3>
                        <ul>
                            <li>Giới thiệu</li>
                            <li>Tuyển Dụng</li>
                            <li>Chính sách bảo mật thanh toán</li>
                            <li>Chính sách bảo mật thông tin cá nhân</li>
                            <li>Chính sách giải quyết khiếu nại</li>
                            <li>Điều khoản sử dụng</li>
                        </ul>
                    </div>
                    <div className="group-payment">
                        <h3>PHƯƠNG THỨC THANH TOÁN</h3>
                        <ul>
                            <li><img src='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fcash.jpg?alt=media&token=c16a36f6-f520-424a-8d02-d0abefdcf7a4' alt="cash" /></li>
                            <li><img src='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Finstallment.jpg?alt=media&token=7bc8b075-3918-42b3-9fbe-4a469ed9e077' alt="installment" /></li>
                            <li><img src='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Finternet_banking.jpg?alt=media&token=d16281e7-e287-4d70-bcda-228f3c4f22ba' alt="internet_banking" /></li>
                            <li><img src='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fjcb.jpg?alt=media&token=5370f567-1b87-4bbd-8e93-6d609e82a5b5' alt="jcb" /></li>
                            <li><img src='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fmastercard.jpg?alt=media&token=50c5de18-87dd-4017-a754-e643173f5cca' alt="mastercard" /></li>
                            <li><img src='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Fvisa.jpg?alt=media&token=200a4ab3-58e5-4004-86fc-5696f4dc76f9' alt="visa" /></li>
                        </ul>
                    </div>
                    <div className="group-connect-us">
                        <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
                        <ul>
                            <li>
                            <a href="https://www.facebook.com/profile.php?id=100005142878434" target="_blank" rel="noreferrer noopener"><i className="fa fa-facebook" /></a>
                            </li>
                            <li>
                            <a href="https://www.linkedin.com/in/dat-bui-quoc-587401210/" target="_blank" rel="noreferrer noopener"><i className="fa fa-linkedin" /></a>
                            </li>
                            <li>
                            <a href="https://github.com/buiquocdatgl" target="_blank" rel="noreferrer noopener"><i className="fa fa-github" /> </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/quocccbinnn/?hl=vi" target="_blank" rel="noreferrer noopener"><i className="fa fa-external-link" /></a>
                            </li>
                        </ul>
                        <div className="user-online">
                            <p> <UserOutlined /> Online 1</p>
                            <p> <EyeOutlined /> 1.694 lượt xem</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
