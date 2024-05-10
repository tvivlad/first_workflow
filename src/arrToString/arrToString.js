const arrToString = (ar) => {
  return ar.filter((item) => Number.isInteger(item)).map(String)
}

module.exports = arrToString
