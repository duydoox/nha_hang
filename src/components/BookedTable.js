import React, { useState } from 'react';
import '../css/BookedTable.css'

const BookedTable = ({ table, data, setData }) => {
    const { id, tenBan, soChoNgoi, dangDat } = table

    const [check, setCheck] = useState()

    const onclick = () => {
        setCheck(id)
        setData({
            ...data,
            banAnId: id,
        })
    }

    return (
        <div
            className={`BookedTable ${dangDat ? 'red' : ''} ${check === id && !dangDat ? 'green' : ''}`}
            onClick={onclick}
        >
            <h3>Bàn số {tenBan}</h3>
            <p>Số người: {soChoNgoi}</p>
        </div>
    )
}

export default BookedTable