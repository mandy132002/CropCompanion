import axios from 'axios';
import { async } from 'q';

const API = axios.create({baseURL: 'http://localhost:5002'});

export const signin = async (formData) => {
    const res = await API.post('/seller/signin', formData);
    localStorage.setItem("profile", JSON.stringify(res.data.token))

}

export const signup = async (formData) => {
    const res = await API.post('/seller/signup', formData);
    localStorage.setItem("profile", JSON.stringify(res.data.token))

}

export const addProduct = async (formData) => {
    console.log(formData);
    const res = await API.post('/seller/add-product', formData);
    //localStorage.setItem("profile", JSON.stringify(res.data.token))
}

// export const getProducts = async () => {
//     const res = await API.get('/seller/disp-product/');
//     console.log(res.data);
// }