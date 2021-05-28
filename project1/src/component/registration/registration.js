/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './registration.css';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



export default function registration() {

    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState({
        displayname: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        checkedA: false,
        checkedB: false,
        checkedF: true,
        checkedG: true,
    });


    const handleSubmit = (e)=> {
        e.preventDefault();

        const displayname = document.getElementById('ten');
        const username = document.getElementById('nameuser');
        const password = document.getElementById('password');
        const email = document.getElementById('email');
        const phone = document.getElementById('sodienthoai');
        const user = [
            displayname.value,
            username.value,
            password.value,
            email.value,
            phone.value
        ]
        
        axios.post(`http://api.oceantech.vn/intern/oauth/signup`, {user})
        .then(response => {
            console.log(response);
            console.log(response.data);
        });
        if(username.value !== '' && password.value !== '' ){
            window.location.href = 'http://localhost:3000/dangnhap';
        }
        
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const background = {
    backgroundImage: 'url("/images/backgroundrs.png")'
    };

    return (
        <div className='wrap-registration' style={background}>
            <form onSubmit={handleSubmit} >
                <Link to='/login'><img src='/images/logo.png' alt='' /></Link>
                <div className='wrap-userdetail'>
                    <div className='hoten'>
                        <div>
                            <label>Họ <span className='error'>*</span></label> <br/>
                            <input type='text' id='ho'/>
                        </div>
                        <div>
                            <label>Tên <span className='error'>*</span></label> <br/>
                            <input type='text' id='ten'/>
                        </div>
                    </div>
                    <div className='phone'>
                        <label>Số điện thoại <span className='error'>*</span></label> <br/>
                        <div>
                            <select>
                                <option>Viet Nam (+84)</option>
                                <option>Nhat Ban (+81)</option>
                                <option>Trung Quoc (+86)</option>
                                <option>Han Quoc (+82)</option>
                            </select>
                            <input type='text' id='sodienthoai'/>
                        </div>
                        
                    </div>
                    <label>Email <span className='error'>*</span></label> <br/>
                    <input type='email' id='email'/>

                    <label>Tên đăng nhập <span className='error'>*</span></label> <br/>
                    <input type='text' id='nameuser'/>
                    <span className='error'>Tên đăng nhập không được để trống</span>
                    <div className='wrap-pas'>
                        <div>
                            <label>Mật khẩu <span className='error'>*</span></label> <br/>
                            <input type='password' id='password'/>
                            <span className='error'>Password không được để trống</span>
                        </div>
                        <div>
                            <label>Nhập lại mật khẩu</label>
                            <input type='password' id='exacpas'/> <br/>
                        </div>
                        </div>
                    </div>
                    <FormGroup row>
                        <div>
                            <FormControlLabel
                                control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                label="Đồng ý với"
                            /><p>Các điều khoản cho đối tác.</p>
                        </div>
                        
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                            />
                            }
                            label="Đồng ý đăng ký nhận thông tin từ OPFFER PRO"
                        />
                    </FormGroup>
                    <p className='rules'>Khi đăng ký tài khoản, bạn đông ý với chính sách quyền riêng tư, các điều khoản của OFFER PRO Việt Nam.</p>
                    
                    <div className="g-recaptcha" data-sitekey="6Lf1r_AaAAAAALiqUcFO5ehuwa4Z2SRNHtfU3ril"></div>
                    
                    <button>Đăng ký</button>
                    <section><span>Bạn đã có tài khoản ? <a href=' '>Đăng Nhập</a></span></section>
                    <select className='language'>
                        <option>Tiếng Việt</option>
                    </select>
                    <i className=" star fas fa-star"></i>
                    
            </form>
        </div>
    )
}
