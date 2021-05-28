import React from 'react';
import { Link } from "react-router-dom";
import './login.css';

export default function login() {



    return (
        <div className='wrap-login'>
            <div className='title-left'>
                <img src='/images/imgleft.png' alt='' />
            </div>
            <div className='wrap-form'>
                <div className='title-form'>
                    <h3>Đăng Nhập</h3>
                    <p>để truy cập <a href='login'>Offer Pro</a></p>
                </div>
                <div className='logo'>
                    <a href='/dangnhap'><img src='/images/logo.png' alt='' /></a>
                </div>
                <form className='form'>
                    <label>Tên đăng nhập / Email</label>
                    <input type='text' placeholder='Tên đăng nhập' id='username' />
                    <label>Mật Khẩu</label>
                    <input type='text' placeholder='Mật khẩu' id='password' />
                    <div><a className='forgotpas' href=' '>Quên mật khẩu ?</a></div>
                    <div>
                        <Link to='/dangky'>Đăng ký tài khoản</Link><br/>
                        <button type='submit'>Đăng nhập</button><br/>
                        <a className='loginwith' href=' '>Hoặc đăng nhập với</a>
                    </div>
                    <div className='social-form'>
                        <a href=' '><i className="fab gg fa-google-plus"></i></a>
                        <a href=' '><i className="fab fb fa-facebook"></i></a>
                    </div>
                </form>
                <div className='footer-form'>
                    <p className='detai-footer'>Powered by nature Origin</p>
                    <div className='contact-footer'>
                        <a href=' '>Trợ giúp</a>
                        <a href=' '>Chính sách bảo mật</a>
                        <a href=' '>Điều khoản sử dụng</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
