function pairElement(str) {
    const pairs = {
      A: "T",
      T: "A",
      G: "C",
      C: "G"
    };
    return str.split("").map(x => [x, pairs[x]]);
  }
  
  pairElement("GCG");