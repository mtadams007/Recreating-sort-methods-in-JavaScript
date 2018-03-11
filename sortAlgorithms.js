// Bubble sort

let bubbleSort = (arr) => {
  let sorted = arr;
  let iteration = 0;
  //how many times we run through the bubble sort
  while (iteration < arr.length) {
    let i = 0;
    //running through the array
    while ((i + 1) < (sorted.length - iteration)) {
      //if the earlier element is bigger than the later one we switch them
      if (sorted[i] > sorted[i + 1]) {
        let replace = sorted[i];
        sorted[i] = sorted[i + 1];
        sorted[i + 1] = replace;
        i++;
      } else {
        i++;
      }
    }
    iteration++;
  }
  return sorted;
}

// Insertion sort

let insertionSort = (arr) => {
  //We start with our sorted list of the first element
  let sorted = [arr[0]];
  //the index is the next element from our original array that we want to sort
  let i = 1;
  //we cycle through the array until we have added every element to our sorted list
  while (i < arr.length) {
    //We add the next element to our sorted array and sort it.
    sorted.push(arr[i]);
    miniSort(sorted);
    i++;
  }
  return sorted;
}

// sorts the last element of an array
let miniSort = (arr) => {
  //This is the last element of the array which we will sort
  let sortMe = arr[arr.length - 1];
  // i is the index we're comparing sortMe to, since sortMe is the last element, i has to be the second to last
  let i = arr.length - 2;
  //We are making sure that i is not smaller than 0
  while (i > - 1) {
    //comparing sortMe to the index in front of it
    if (sortMe < arr[i]) {
      //since sortMe is smaller, we move the element over one space, and move our index that we compare with one to the left
      arr[i + 1] = arr [i];
      i--;
    } else {
      //sortMe is bigger than the element next to it, so we leave the loop
      break;
    }
  }
  //We put sortMe where it belongs
  arr[i + 1] = sortMe;
  //return the semi sorted array
  return arr;
}

// Selection Sort

let selectSort = (arr) => {
  //our new sorted array
  let sorted = arr;
  // choosing the first number to be our minimum
  let min = arr[0];
  //index that we will put our minimum number to
  let i = 0;
  //index we are comparing with
  let k = 1;
  //index we will swap
  let swapper = k;
  while (i < arr.length - 1) {
    while (k < arr.length) {
      if (sorted[k] < min) {
        min = sorted[k];
        swapper = k;
        k++;
      } else {
        k++;
      }
    }
    sorted[swapper] = sorted[i];
    sorted[i] = min;
    console.log(min);
    i++;
    k = i + 1;
    min = sorted[i];
    console.log(sorted);
  }
  return sorted;
}

// merge sort

let mergeSort = (arr) => {
  let sorted = arr;

}


let splitArray = (arr) => {
  //creating new arrays to split our array into
  let halfwayPoint = Math.floor(arr.length/2);
  let arrayOfArrays = [];
  let arr1 = arr.slice(0, halfwayPoint);
  let arr2 = arr.slice(halfwayPoint, arr.length - 1);
  arrayOfArrays.push(arr1);
  arrayOfArrays.push(arr2);
  return arrayOfArrays;
}























//
