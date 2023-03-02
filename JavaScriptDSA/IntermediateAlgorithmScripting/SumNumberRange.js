function sumAll(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return ((max - min + 1) * (max + min)) / 2
  }
  
  sumAll([1, 4]);