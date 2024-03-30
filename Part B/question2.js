function flippedArray(array) {
    let n = array.length;
    let flip = [];
    for (let i = n - 1; i >= 0; i--) {
      flip.push(array[i]);
    }
    return flip;
  }
  
  // let pali = [3,2,4,5,2,3];
  // console.log(flippedArray(pali));
  
  function areEqual(array1, array2) {
    if (array1.length != array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  
  // let arr1 = [1,5,3];
  // let arr2 = [1,2,3];
  
  // console.log(areEqual(arr1, arr2))
  
  function isPalindrome(array) {
    let flipped = flippedArray(array);
  
    return areEqual(array, flipped);
  }
  
  // let palidrome = [3,2,1];
  // console.log(isPalindrome(palidrome));
  
  function Stack() {
    this.arr = [];
    this.pop = function () {
      if (this.arr.length == 0) {
        return " Underflow ";
      }
      return this.arr.pop();
    };
    this.push = function (el) {
      return this.arr.push(el);
    };
    this.peek = function () {
      return this.arr[this.arr.length - 1];
    };
    this.isEmpty = function () {
      return this.arr.length == 0;
    };
  }
  
  function arrayStack(array) {
    let f = new Stack();
    let n = array.length;
    for (let i = 0; i < n; i++) {
      f.push(array[i]);
    }
    return f;
  }
  
  //creating stack
  // let arr = [3,2,4,5,2,3];
  // console.log(arrayStack(arr));
  
  function stackPalindrome(array, x) {
    for (let i = 0; i < array.length; i++) {
      if (x.peek() !== array[i]) {
        return false;
      } else {
        x.pop();
      }
  
      if (x.isEmpty()) {
        return true;
      }
    }
  }
  
  //   let x = new Stack();
  //   x.push(1);
  //   x.push(2);
  //   let arr = [5,1];
  //   console.log(stackPalindrome(arr, x));
  
  function isPalStack(array) {
    let x = arrayStack(array);
  
    return stackPalindrome(array, x);
  }
  
//   let array = [5, 2, 5];
//   console.log(isPalStack(array));
  