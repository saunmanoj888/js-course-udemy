
let convertFahrenheitToCelsius = function(fahrenheit) {
    let celcius = (fahrenheit - 32) * (5/9)
    return celcius
}

console.log(convertFahrenheitToCelsius(33.8))
console.log(convertFahrenheitToCelsius())

// multiple arguments

let calculateTip = function(total, tipPercent = 10) {
    let tip = total * (tipPercent / 100)
    return tip
}

console.log(calculateTip(100))
console.log(calculateTip(100, 20))