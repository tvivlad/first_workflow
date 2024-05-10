const delay = (cb, time_ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb())
    }, time_ms)
  })
}

// delay(() => 4 + 6, 2000).then((data) => console.log('Data = ', data))

module.exports = delay
