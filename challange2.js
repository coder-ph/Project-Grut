function speedChecker(speed){
    const speedLimit = 70;
    const demeritPoints = 5;

    if (speed <= speedLimit){
        console.log("OK");

    } else {
        const points = Math.floor((speed-speedLimit)/demeritPoints);
        if (points >= 12){
            console.log(`points : ${points}`)
            console.log("License Suspended")
        } else {
            console.log(`points : ${points}`)
        }
    }
}
console.log(speedChecker(80))