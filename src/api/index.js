import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5002'});

export const signin = async (formData) => {
    const res = await API.post('/seller/signin', formData);
    localStorage.setItem("profile", JSON.stringify(res.data.token))

}

export const signup = async (formData) => {
    const res = await API.post('/seller/signup', formData);
    localStorage.setItem("profile", JSON.stringify(res.data.token))

}

// export const signinCust = (formData) => API.post('/customer/signin', formData)
//     .then(function (response) {
//         console.log(response);
//         localStorage.setItem("profile", JSON.stringify(response.data.token))
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// export const signupCust = (formData) => API.post('/customer/signup', formData)
//     .then(function (response) {
//         console.log(response);
//         localStorage.setItem("profile", JSON.stringify(response.data.token))
//     })
//     .catch(function (error) {
//         console.log(error.response.data);
//     });