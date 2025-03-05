// Code your solution in this file!


function distanceFromHqInBlocks(location){
    const street = 42

    if (location > 42){

        return location - street

    }
    else{
         
        return -(location - street)

    }

   

}
function distanceFromHqInFeet(location){

    const blockInFeets = 264

    return distanceFromHqInBlocks(location) * blockInFeets

}

function distanceTravelledInFeet(start, destination){

    if (destination > start){
        return (destination - start)*264
    }
    else{
        return -(destination - start)*264
    }
    

}
function calculatesFarePrice(start, destination){
     let distance = distanceTravelledInFeet(start, destination)

     

     if(distance <= 400){
        return 0
     }
     else if(distance >400 && distance < 2000)
     {
        return 2.56
     }
     else if(distance > 2000 && distance < 2500){
        return 25
     }
     else if(distance > 2500){
        return ("cannot travel that far")
     }

}





console.log(distanceFromHqInBlocks(30))
console.log(distanceFromHqInFeet(30))
console.log(distanceTravelledInFeet(78, 42))
console.log(calculatesFarePrice(50, 42))