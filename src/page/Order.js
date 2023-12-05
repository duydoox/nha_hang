import React from 'react';
import '../css/Order.css'

const Order = () => {
    return (
        <div className='Order'>

            <div className='header-Order'>
                <h3>Món ăn 1</h3>
                <span className='button_cancel-Order'>Thoát</span>
            </div>  

            <div className='content-Order'>
                <p>Tên món ăn: món ăn 1</p>
                <p>Giá: 20000VND</p>
                <p>Số lượng: <span>-</span> 1 <span>+</span></p>
                <br></br>
                <br></br>
                <br></br>
                <div className='button-Order'>Đặt</div>
            </div>
        </div>
    )
}

export default Order