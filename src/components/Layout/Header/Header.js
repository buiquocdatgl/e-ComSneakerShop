import React, { useState } from 'react'
import '../Header/Header.css'
import { Form, Button, Input } from 'antd';
import 'font-awesome/css/font-awesome.min.css';
import HeaderSearch from '../Header/HeaderSearch/HeaderSearch.js'
import HeaderCart from './HeaderCart/HeaderCart.js'
import HeaderLogin from './HeaderLogin/HeaderLogin.js'

function Header() {

    const onClickOpenMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
        document.querySelector('body').classList.add('active');
    }

    return (
        <div className='header'>
            <div className='second_header'>
                <div className='main_item_logo'>
                    <a href="/">
                        <img src="https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2Flogo.png?alt=media&token=cd4f197f-f441-4cc2-aaa7-d237ce033f3d" alt="" />
                    </a>
                </div>
                <HeaderSearch />
                <div style={{ 'display': 'none' }} className="totle-menu">
                    <i className="fa fa-bars" onClick={onClickOpenMenu}     />
                </div>
                <HeaderCart />
                <HeaderLogin />
            </div>
        </div>
    )
}

export default Header
