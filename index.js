function studentGrade(marks){  //creates a function studentGrade and takes the marks as the argument
    if(marks > 79){ //first condition, testing if marks if greater than 79 and returns A.
        return "A";
    } else if(marks >= 60){
        return "B"
    }else if(marks >= 49){
        return "C"
    }else if(marks >= 40){
        return "D"
    }else if(marks >= 40){
        return "E"
    }
}
console.log(studentGrade(80)) // function call passing marks(integer) to the fucntion