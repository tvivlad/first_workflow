function validation(value) {
  if (value < 0 || value > 100) {
    return false
  } else {
    return true
  }
}

module.exports = validation
