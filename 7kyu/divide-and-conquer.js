// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(arr){
  let result = 0;
  
  arr.forEach((elem) => {
    if (typeof elem === "string") {
      result -= Number(elem) 
    } else {
      result += elem
    }
  });

  return result
}

console.log(divCon([1, 2, 3, "4"])) // 2