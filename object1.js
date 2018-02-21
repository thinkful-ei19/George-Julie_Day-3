'use strict'

let loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    let hydOfLoaf = (this.water/this.flour) * 100;
    return hydOfLoaf;
  }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());