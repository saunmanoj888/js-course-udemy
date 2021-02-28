let = calculateGrade = function(score, totalScore) {
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