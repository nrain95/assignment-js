// feetToiMile 

function feetToMIle(feet) {
  var miles = feet/5280;
  return miles;

if (feet==0 || feet< 0) {
  return -1;
}
else{
  return miles;
}
}
var Result = feetToMIle(21120);
console.log(Result); 


// woodCalculator

function woodCalculator(numOfChair, numOfTable, numOfBed) {
  var totalWood = (numOfChair * 1 + numOfTable * 3 + numOfBed * 5);
  return totalWood;  
  if (numOfChair, numOfTable, numOfBed == 0 || numOfChair, numOfTable, numOfBed < 0) {
    return -1;
  }
  }
  
  var Result = woodCalculator(6, 2, 2);
  console.log(Result)

// brickCalculator

function brickCalculator(floor){
  var brickneedFirstTenFloor = 15;
  var brickneedSecondTenFloor = 12;
  var brickneedRestFloor = 10;
  var bricksForPerFeet = 1000;
  var remainingFloor = floor-20;
  var bricks;
  if(floor == 0 || floor <0)
  {
      return -1;
  }
  else if(remainingFloor<0 || remainingFloor == 0)
  {
     var remainingAfterTenFloor = floor - 10;
     if(remainingAfterTenFloor < 0 || remainingAfterTenFloor==0)
     {
         bricks = floor * brickneedFirstTenFloor * bricksForPerFeet;
         return bricks;
     }
     else{
         bricksForFirstTenFloors = 10 * brickneedFirstTenFloor * bricksForPerFeet;
         bricksForRemainingFloors = remainingAfterTenFloor * brickneedSecondTenFloor * bricksForPerFeet;

         bricks = bricksForFirstTenFloors + bricksForRemainingFloors;
         return bricks;
     }
  }
  else{
      bricksForFirstTenFloors = 10 * brickneedFirstTenFloor * bricksForPerFeet;
      bricksForSecondTenFloors = 10 * brickneedSecondTenFloor * bricksForPerFeet;
      bricksForRemainingFloors = remainingFloor * brickneedRestFloor * bricksForPerFeet;
      bricks = bricksForFirstTenFloors + bricksForSecondTenFloors + bricksForRemainingFloors;

      return bricks;
  }
}
  var Result = brickCalculator(11);
  console.log(Result);

// tinyFriend 



