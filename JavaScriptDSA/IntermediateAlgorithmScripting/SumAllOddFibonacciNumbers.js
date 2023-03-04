function sumFibs(num) {
    let prev = 0;
    let current = 1;
    let result = 0;
  
    while (current <= num) {
      if (current % 2 !== 0){
        result += current
      }
        current += prev
        prev = current - prev
    }
    return result
  }
  
  sumFibs(4);