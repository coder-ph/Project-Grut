function studentGrade(marks){
    if(marks > 79){
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
console.log(studentGrade(80))