import React from 'react';
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
                    <a href=' '><img src='/images/logo.png' alt='' /></a>
                </div>
                <form className='form' action=''>
                    <label>Tên đăng nhập / Email</label>
                    <input type='text' placeholder='Tên đăng nhập' />
                    <label>Mật Khẩu</label>
                    <input type='text' placeholder='Mật khẩu' />
                    <div><a className='forgotpas' href=' '>Quên mật khẩu ?</a></div>
                    <div>
                        <a className=' ' href=' '>Đăng ký tài khoản</a><br/>
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
