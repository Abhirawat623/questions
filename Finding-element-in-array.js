function searchElement(arr, x) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        return i;
      }
    
    else {
    return -1;}} // Element not found
  }
  searchElement(6,4);