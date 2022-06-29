const axios = require('axios').default;

const PRODUCTS_URL = 'http://localhost:8000'
const REVIEW_URL = 'http://localhost:8001'

const getProducts = async() => {
  const res = await axios.get(PRODUCTS_URL)
  //const json = await res.json();
  return res.data;
}

const getProduct = async(product) => {
  const products = await getProducts()
  return products.find(p => p.id == product);
} 

const getReviews = async() => {
  const res = await axios.get(REVIEW_URL)
  //const json = await res.json();
  return res.data;
}

module.exports = {
  getProducts,
  getReviews,
  getProduct
}
