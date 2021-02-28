
let convertFahrenheitToCelsius = (fahrenheit) => {
    let celcius = (fahrenheit - 32) * (5/9)
    return celcius
}

console.log(convertFahrenheitToCelsius(33.8))
console.log(convertFahrenheitToCelsius())

// multiple arguments

let calculateTip = (total, tipPercent = 10) => {
    let tip = total * (tipPercent / 100)
    return tip
}

console.log(calculateTip(100))
console.log(calculateTip(100, 20))

let = calculateGrade = (score, totalScore) => {
    let percetage = (score / totalScore) * 100
    let grade = ''
  
    if (percetage >= 90) {
        grade = 'A'
    } else if (percetage >= 80) {
        grade = 'B'
    } else if (percetage >= 70) {
      grade = 'C'
    } else if (percetage >= 60) {
      grade = 'D'
    } else {
      grade = 'F'
    }
    
    return `You have scored ${grade} in your result`
  }
  
  console.log(calculateGrade(20, 25));