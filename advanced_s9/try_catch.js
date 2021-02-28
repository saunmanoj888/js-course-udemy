let = calculateGrade = function(score, totalScore) {
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Please enter correct type for parameters')
    }
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
 
try {
    console.log(calculateGrade("20fgdfg", 25))
} catch(e) {
    console.log(e.message)
}
