function factorial(n) {
    if (n == 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // console.log( factorial(5));
  
  function sum(n) {
    if (n == 0) {
      return 0;
    }
    return n + sum(n - 1);
  }
  
  // console.log(sum(10));
  
  function binarySearch(array, item, left, right) {
    //base case
    if (left > right) return false;
  
    let mid = Math.floor((left + right) / 2);
  
    if (array[mid] === item) return true;
  
    if (array[mid] > item) return binarySearch(array, item, left, mid - 1);
    else return binarySearch(array, item, mid + 1, right);
  }
  
  function search(array, item) {
    var n = array.length;
    return binarySearch(array, item, 0, n - 1);
  }
  
  //   let arr = [1, 2, 3];
  //   console.log(search(arr, 3));
  
  function binarySer(array, x) {
    let n = array.length;
    let left = 0;
    let right = n - 1;
    let mid;
  
    while (right >= left) {
      mid = Math.floor((left + right) / 2);
  
      if (array[mid] == x) {
        return true;
      } else if (array[mid] < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }

//   let arr = [2,2,3,3,5,5,5,6,8];
//   console.log(binarySer(arr, 9));
  