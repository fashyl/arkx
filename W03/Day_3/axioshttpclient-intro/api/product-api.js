const express = require("express");
const axios = require("axios");

const API = axios.create({
    baseURL : 'https://fakestoreapi.com/products',
    timeout : 2000, // If not recovered in 2 seconds, throw error
    Headers : {
        'Content-Type' : 'application/json',
    }
});

exports.getAllProducts = () => { 
    return API.get('/');
}

exports.getProductById = (id) => { 
    return API.get(`/${id}`);
}