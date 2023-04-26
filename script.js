//number-task1

// let login = prompt('Enter login')
// let userLogin = login.trim() 
// let userPassword = prompt('Enter password')


// let existsUserLogin = 'the_best_user'
// let existsUserPassword = 12345678


// if(userLogin === existsUserLogin && userPassword == existsUserPassword) {
//     alert(`Welcome ${existsUserLogin}`)
// }
// else {
//     alert('Login and(or) Password entered incorrectly ')
// }



//number-task2
    // i = 0
    // do {
    //     let newStudent = prompt('Enter the name of the new student!');
    //     newStudent = newStudent.trim();
    //     alert(`Welcome ${newStudent}!`)
    //     i++
    // }
    // while(i<3) 




    //number-task3

    // let result = 0
    // for(let i=0;i<=100;i++) {
    //     result = result +i
    // }
    // console.log(result)


    //number-task4

    // let totalCorrect = 0
    // let totalIncorrect = 0
    
    // let plus = prompt('2+2')
    // if(plus == 4) {
    //     alert('Correct answer')
    //     totalCorrect++
    // }
    // else {
    //     alert('Incorrect answer')
    //     totalIncorrect++
    // }


    // let multiply = prompt('2*2')
    // if(multiply == 4) {
    //     alert('Correct answer')
    //     totalCorrect++
    // }
    // else {
    //     alert('Incorrect answer')
    //     totalIncorrect++
    // }

    // let apple = prompt('Petya had 5 apples. He ate 3 of them and gave 1 to a friend. How many apples does Peter have left?')
    // if(apple == 1) {
    //     alert('Correct answer')
    //     totalCorrect++
    // }
    // else {
    //     alert('Incorrect answer')
    //     totalIncorrect++
    // }

    // let sweet = prompt('Masha had 10 sweets. She ate 2 and gave 1 to a friend. After that, mom gave Masha 5 more sweets. How many sweets did Masha have left in the end?')
    // if(sweet == 12) {
    //     alert('Correct answer')
    //     totalCorrect++
    // }
    // else {
    //     alert('Incorrect answer')
    //     totalIncorrect++
    // }

    // let math = prompt('What is 2 + 2 * 2?')
    // if(math == 6) {
    //     alert('Correct answer')
    //     totalCorrect++
    // }
    // else {
    //     alert('Incorrect answer')
    //     totalIncorrect++
    // }

    // alert(`     End of test! First question: correct answers:4, your answer: ${plus}
    // End of test! Second question: correct answer:4, your answer: ${multiply}
    // End of test! Third question: correct answer:1, your answer: ${apple}
    // End of test! Fourth question: correct answer:12, your answer: ${sweet}
    // End of test! Fifth question: correct answer:6, your answer: ${math}
    // Total correct ${totalCorrect}, Total incorrect ${totalIncorrect}
    // `)



    //number-task5

    //  let clientName = 'Igor'
    //  let clientSpentForAllTime = 110
    //  let clientSpentToday = 25
    //  clientSpentForAllTime = clientSpentForAllTime + clientSpentToday
    //  let discount
        
     
    //  if(clientSpentForAllTime > 100 && clientSpentForAllTime< 300) {
    //     discount = 10
    //  }
    //  else if(clientSpentForAllTime > 300 && clientSpentForAllTime< 500) {
    //     discount = 20
    //  }
    //  else if(clientSpentForAllTime > 500) {
    //     discount = 30
    //  }

    //   alert(`You are given a discount in ${discount}%`)
    //    alert(`Thank you ${clientName}! Payable ${clientSpentToday}. For all the time in our restaurant you spent ${clientSpentForAllTime}.`)




    //number-task6

//       let clientName = prompt("Enter the client's name")
//       let clientSpentToday = +prompt('How much did the client spend today?')
//       let clientSpentForAllTime = +prompt('How much did the client spend all time?')

//         clientSpentForAllTime = clientSpentForAllTime + clientSpentToday
//         let discount
        
     
//      if(clientSpentForAllTime > 100 && clientSpentForAllTime< 300) {
//         discount = 10
//      }
//      else if(clientSpentForAllTime > 300 && clientSpentForAllTime< 500) {
//         discount = 20
//      }
//      else if(clientSpentForAllTime > 500) {
//         discount = 30
//      }

//      const isInteger = /^(\d)+$/g;
//      if(isInteger.test(clientSpentToday)) {
//         alert(`You are given a discount in ${discount}%`)
//         alert(`Thank you ${clientName}! Payable ${clientSpentToday}. For all the time in our restaurant you spent ${clientSpentForAllTime}.`)
// }
//      else {
//     alert('The amount that the client spent all time and spent today must be a number! Please reload the page to try again.')
// }

      

//array-task1

// function getSumOfSequence(number) {
// let myarr = []
// for(let i=1;i<=number;i++) {
//     myarr.push(i)
// }
// console.log(myarr)
// }

// getSumOfSequence(7)
     

//array-task2

// let peopleWaiting = ['Kristina','Oleg','Kirill','Maria','Svetlana','Artem','Greb']

// function giveParcel() {
// alert(`${peopleWaiting[0]} received the package. There are ${peopleWaiting.length-1} people left in the queue`)
// peopleWaiting.shift()
// }

// function queueWithoutParcel() {
//     alert(`${peopleWaiting[0]} did not receive the package and left the queue`)
//     peopleWaiting.shift()
//     }

// giveParcel()
// giveParcel()
// giveParcel()
// queueWithoutParcel()
// peopleWaiting = []



//array-task3

// const numbers = [10, 4, 100, -5, 54, 2];
// let total = 0
// for(let i=0;i<numbers.length;i++) {
//      total += numbers[i] * numbers[i] * numbers[i]
// }
// console.log(total)


// const numbers = [10, 4, 100, -5, 54, 2];
// let total = 0
// for(let item of numbers) {
//      total += item * item * item
// }
// console.log(total)



// const numbers = [10, 4, 100, -5, 54, 2];
// let total = 0
// numbers.forEach(item => total += item * item * item)
// console.log(total)


// const numbers = [10, 4, 100, -5, 54, 2];

// let sum = numbers.reduce((total,item) => {
//   return total + item * item * item
// },0)

// console.log(sum)





//array-task4


// const coffees = ['Latte','Cappucino','Americano'];
// let coffeesLowerLetters = []

// for(let item of coffees) {
//    let item2 =  item.toLowerCase()
//      coffeesLowerLetters.push(item2)
// }




// let coffeeName = prompt('Search coffee by name:')
// let coffeeNameLowerLetters = coffeeName.toLowerCase()
// let exist = false
// let index = 0


// for(let item of coffeesLowerLetters) {
//     if(item == coffeeNameLowerLetters) {
//          exist = true
//         index =  coffeesLowerLetters.indexOf(item) + 1
//     }
// }

// if(exist == true) {
//     alert(`Keep your favorite coffee coffee. It is ${index}-th most popular in our coffee shop.`)
// }

// else {
//     alert('Unfortunately, this type of coffee is not available.')
// }




//array-task5


// const coffees = ['Latte','Cappucino','Americano'];
// const prices = [1.5, 1, 2];



// let updatedPrice = prices.map(item => {
//     return item + 0.5
// })


// coffees.forEach(item => {
//     let index = coffees.indexOf(item)
//     alert(`${item} is now ${updatedPrice[index]} euro`)
// })



//array-task6

// let clientsEstimations = [1,2,3,4]

// function askClientToGiveEstimation() {
//    let rating = +prompt('How do you rate our coffee shop from 1 to 10?')

//    if(rating >= 1 && rating < 10 && Number.isInteger(Number(rating))) {
//     clientsEstimations.push(rating)
//     console.log(clientsEstimations)
//    }
//     else {
//         alert('Please only write between 1-10')
//     }
// }



// for(let i=0;i<5;i++) {
// askClientToGiveEstimation()
// }


// let positive = 0
// let negative = 0

// for(let item of clientsEstimations) {
//     if(item>=5) {
//         positive++
//     }
//     else {
//         negative++
//     }
// }

// alert(`Total positive estimates: ${positive}; Total negative ratings: ${negative}`)




//array-task7


// const goals = [8,1,1,3,9,-1,5]
// const goals2 = [...goals]


// goals.sort(function(a,b) {
//    return b - a
// })

// let mostGoals = goals[0]
// let mostGoalsMatch = goals2.indexOf(mostGoals) + 1

// alert(`The most scoring match was at ${mostGoalsMatch}. There were ${mostGoals} scored in it.`)



// const goals3 = [...goals]

// goals.sort(function(a,b) {
//    return a - b
// })

// let lessGoals = []
// for(let item of goals) {
//     if(item > 0) {
//         lessGoals.push(item)
//     }
// }



// let matchs = []
// let GameNumber = goals3.filter((item,index) => {
//    if(item == lessGoals[0]) {
//     matchs.push(index)
//    }

// })

// let result = ''
// for(let item of matchs) {
//    result += item + ' '
// }


// alert(`The less scoring match was at ${result}. There were ${lessGoals[0]} scored in it.`)






// let numberOfGoals = 0
// for(let item of goals) {
//   numberOfGoals += item
// }


// alert(`The total number of goals for the season is equal to ${numberOfGoals}`)





// let defeat = false
// for(item of goals) {
//     if(item < 0) {
//          defeat == true;
//          break;
//     }
// }

// if(defeat == true) {
//     alert('There were automatic defeats: yes')
// }
// else {
//     alert('There were automatic defeats: no')
// }



// let numbers = goals.length
// let total = 0
// for(let item of goals) { 
//     total += item
// }
// let average = total / numbers

// alert(`The average number of goals permatch is equal to ${average}`)





// let goals4 = [...goals]

// goals4.sort(function(a,b) {
//    return a - b
// })
// let total2 = ''
// for(let item of goals4) {
//     total2 += item + ','
// }

// alert(total2)





















//function-task1


// function getName1(name) {
//    return `Name equals ${name}`
// }

// let getName2 = function(name) {
//     return `Name equals ${name}`
// }

// let getName3 = (name) => {
//     return `Name equals ${name}`
// }


// console.log(getName1('Sahil'))
// console.log(getName2('Sahil'))
// console.log(getName3('Sahil'))




//function-task2

// function getSumOfNumbers(number,type) {
//     let total = 0
//    if(type =='') {
//     for(let i=0;i<=number;i++) {
//     total += i
//     }
//     return total
//    }

//    if(type == 'odd') {
//     console.log('odd')
//     for(let i=0;i<number;i++) {
//     if(i % 2 == 1) {
//      total += i
//     }
//     }
//     return total
//    }

//    if(type == 'even') {
//     console.log('even')
//     for(let i=0;i<number;i++) {
//     if(i % 2 == 0) {
//      total += i
//     }
//     }
//     return total
//    }
// }

// console.log(getSumOfNumbers(9,''))


//function-task3

// function getDivisors(number) {
//     let total = ''
//     for(let i=1;i<=number;i++) {
//         if(number % i == 0 ) {
//             total+= i + ','
//             console.log(i)
//         }
//     }
//     console.log(total)
//     let total2 =  total.substring(0,total.length-1)
//     console.log(total2)
// }

// getDivisors(45)



//function-task4


// function checkQuestionAnswer(question,correctAnswer) {
//   let answer = prompt(question)
//   let answer2 = answer.replace(/ /g,'')
//   let answer3 = answer2.toLowerCase()
//   let correctAnswer2 = correctAnswer.replace(/ /g,'')
//   let correctAnswer3 = correctAnswer2.toLowerCase()
   
 
//   if(answer3 == correctAnswer3) {
//     alert('Correct answer')
//   }
//   else {
//     alert('Incorrect answer')
//   }
// }


// checkQuestionAnswer('Is the watermelon a fruit or a berry?', 'A berry');
// checkQuestionAnswer('How many teeth does an average adult have?',32);
// checkQuestionAnswer('What is the name of the smallest bird in the world?','Hummingbird');





















       









