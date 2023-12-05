import axios from "axios"

export const getAllDish = async() => {
    const res = await axios.get("http://192.168.0.103:4000/mon-an")
    return res.data
}