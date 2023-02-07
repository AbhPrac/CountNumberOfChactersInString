let x = [..."abhilash"]
let count = 0
let countTedNumbers = []
let completedCharacters = []
x.forEach((item, index) => {
  completedCharacters.push(item)
  if (completedCharacters.includes(item)) {
    for (let i = 0; i < x.length; i++) {
      if (item === x[i]) {
        count = count + 1
      }
    }
  }
  let value = {}
  value[item] = count
  countTedNumbers.push(value)
  count = 0
})
console.log(countTedNumbers)
