function addTogether(...args) {
    const [a , b] = args;
    if (args.length === 1 && typeof a ==='number') {
      return num => {
        if (typeof num === 'number') {
          return a + num
        }
      }
    }
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b
    }
  }
  
  addTogether(2,3);