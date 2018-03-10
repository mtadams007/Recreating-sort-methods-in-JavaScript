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
