import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

export const signin = (formData) => API.post('/seller/signin', formData)
    .then(function (response) {
        console.log(response);
        localStorage.setItem("profile", JSON.stringify(response.data.token))
    })
    .catch(function (error) {
        console.log(error);
    });

export const signup = (formData) => API.post('/seller/signup', formData)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error.response.data);
    });

export const signinCust = (formData) => API.post('/customer/signin', formData)
    .then(function (response) {
        console.log(response);
        localStorage.setItem("profile", JSON.stringify(response.data.token))
    })
    .catch(function (error) {
        console.log(error);
    });

export const signupCust = (formData) => API.post('/customer/signup', formData)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error.response.data);
    });