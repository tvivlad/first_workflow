const axios = require('axios')
const arrToString = require('../arrToString/arrToString')

const getData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  const userIds = response.data.map((user) => user.id)
  return arrToString(userIds)
}

module.exports = getData
