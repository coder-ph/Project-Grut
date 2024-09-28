
// function that takes speed as an argument
function speedChecker(speed){

    // initializing variables speedlimit and demeritpoints using const
    const speedLimit = 70;
    const demeritPoints = 5;

    if (speed <= speedLimit){
        console.log("OK"); //control flow **first condition**

    } else {
        const points = Math.floor((speed-speedLimit)/demeritPoints); //calcuates the points with respect to speed above 70
        if (points >= 12){ // condition
            console.log(`points : ${points}`)
            console.log("License Suspended")
        } else {
            console.log(`points : ${points}`)
        }
    }
}
console.log(speedChecker(80)) //function call.