import React from 'react';
import '../css/DetailDish.css'

const DetailDish = ({ dish }) => {
    const { ten ,giaMonAn} = dish
    
    return (
        <div className={`DetailDish`}>
            <h3>Món ăn {ten}</h3>
            <p>Giá: {giaMonAn}VND</p>
        </div>
    )
}

export default DetailDish