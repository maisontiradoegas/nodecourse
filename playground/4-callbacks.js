// setTimeout(()=> {
//     console.log('Two Seconds are up');
// }, 2000)

// const names = ['Macy', 'Lucy', 'Leo', 'Victor', 'Maison'];

// const ShortName = names.filter((name)=> {
//     return name <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(()=> {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data);
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


//Defining the Function
const add = (num1, num2, sum) => {
    setTimeout(()=> {
        sum(num1 + num2); 
    }, 2000)
}

//Calling the Function
add(9, 5, (sum) => {
    console.log(sum);
})
