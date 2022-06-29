const axios = require('axios').default;

const PRODUCTS_URL = 'http://localhost:8000'
const REVIEW_URL = 'http://localhost:8001'

const getProducts = async() => {
  const res = await axios.get(PRODUCTS_URL)
  //const json = await res.json();
  console.log(res.data);
}

getProducts()