import React from 'react';
import './admin.css';

export default function admin() {
    return (
        <div className='wrap-admin'>
            <div className='sidebar-admin'>
                <h1>Admin</h1>
                <hr/>
            </div>
            <div className='content-admin'>
                <div className='infor-content'>infor</div>
                <div className='content'>
                    content
                </div>
            </div>
        </div>
    )
}
