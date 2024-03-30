function altSearch(arr, el) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
      var fir = left + Math.floor((right - left) / 3);
      var sec = left + Math.floor((2 * (right - left)) / 3);
      if (arr[fir] == el || arr[sec] == el) {
        if (arr[fir] == el) {
          return fir;
        } else {
          return sec;
        }
      } else if (el < arr[fir]) {
        right = fir - 1;
      } else if (arr[sec] < el) {
        left = sec + 1;
      } else {
        left = fir + 1;
        right = sec - 1;
      }
    }
    return false;
  }
  
  // //iii)
  // //array to check
  // let d = [1,2,3]
  
  // //checking values in array
  // console.log(altSearch(d, 1));
  // console.log(altSearch(d, 2));
  // console.log(altSearch(d, 3));
  
  // //checking to see if it returns false when it's not in the array
  // console.log(altSearch(d, 5));
  
  function swap(array, index1, index2) {
    let saveElement = array[index1];
    array[index1] = array[index2];
    array[index2] = saveElement;
    return array;
  }
  
  function bubbleSort(array) {
    n = array.length
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1; j++)
        if (array[j + 1] < array[j]) {
          swap(array, j, j + 1);
        }
    }
    return array;
  }

//   let a = [3,7,1,4,8];
//   console.log(bubbleSort(a));
  