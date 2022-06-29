const { graphql } = require('graphql');
const schema = require('./schema');
//require('dotenv').config()

const query = `{ hello products { name, description } reviews { title, comment, grade, product { name, description } } }`;

graphql({
  schema: schema,
  source: query
}).then(result => {
  console.log('result', result);
  console.log('reviews', result.data.reviews);
})