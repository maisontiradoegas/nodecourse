// const square = function(x) {
//     return x * x 
// }

//Long form version used for multiple lines. 
// const square = (x) => {
//     return x * x 
// }

//Short form version with one line. 
// const square = (x) => x * x; 

// console.log(square(6));

const event = {
    name: "Lucy's Birthday",
    guestList: ["Maison", "Macy", "Lucy" , "Leo"],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name);
        })
    }
}

event.printGuestList();