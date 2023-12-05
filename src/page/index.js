import React, { useEffect, useState } from 'react';
import '../css/BookedTable.css'
import BookedTable from '../components/BookedTable';
import { getAllTable, bookedApi } from '../api/table';
import { useNavigate } from 'react-router-dom';

const Booked = () => {

    const [listTable, setListTable] = useState()
    const [data, setData] = useState()

    const navigate = useNavigate()


    useEffect(() => {
        (async () => {
            const res = await getAllTable()
            if (res.success) {
                setListTable(res.data)
            }
        })()
    }, [])

    const clickNavigate = async() => {
        console.log(data)
        const res = await bookedApi(data)
        if(res.success) {
            navigate('/dish')
        }
    }

    const changePrames = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    if (!listTable) return

    return (
        <div >
            <div className='info-client'>
                <span>Nhập thông tin: </span>
                <input
                    onChange={changePrames}
                    type="text"
                    name="tenKhachHang"
                    placeholder='Tên của bạn'
                />
                <input
                    onChange={changePrames}
                    type="text"
                    name="soDienThoai"
                    placeholder='Số điện thoại của bạn'
                />
                <input
                    onChange={changePrames}
                    type="text"
                    name="thoiGianDen"
                    placeholder='Thời gian đến'
                />
            </div>

            <div className='Booked'>
                {listTable.map((table, index) => {
                    return (
                        <BookedTable
                            key={index}
                            table={table}
                            data={data}
                            setData={setData}
                        />
                    )
                })}
            </div>

            <div className='button-Booked' onClick={clickNavigate}>Đặt bàn</div>
        </div>
    )
}

export default Booked