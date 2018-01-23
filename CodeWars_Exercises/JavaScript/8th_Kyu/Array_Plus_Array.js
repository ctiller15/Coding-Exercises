// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  var sum = 0;
  for(var i = 0; i < arr1.length; i++) {
    sum += arr1[i] + arr2[i];
  }
  return sum;
}