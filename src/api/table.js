import axios from "axios"

export const getAllTable = async() => {
    const res = await axios.get("http://192.168.0.103:4000/ban-an")
    return res.data
}

export const bookedApi = async(data) => {
    const res = await axios.post("http://192.168.0.103:4000/ban-duoc-dat", data)
    return res.data
}