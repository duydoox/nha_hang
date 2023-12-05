import React, { useEffect, useState } from 'react';
import '../css/DetailDish.css'
import DetailDish from '../components/DetailDish';
import { getAllDish } from '../api/dish';

const Dish = () => {

    const [listDish, setListDish] = useState([1])

    useEffect(() => {
        (async () => {
            const res = await getAllDish()
            if (res.success) {
                setListDish(res.data)
            }
        })()
    }, [])

    if (!listDish) return

    return (
        <div className='Dish'>
            {listDish.map((dish, index) => {
                return (
                    <DetailDish
                        key={index}
                        dish={dish}
                    />
                )
            })}

            <div className='info-Dish'>
                <div>
                    <span>Đã chọn: 2 </span>
                    <span>Tổng: 50000VND</span>
                </div>
                <div className='button-Dish'>Đặt món</div>
            </div>
        </div>
    )
}

export default Dish