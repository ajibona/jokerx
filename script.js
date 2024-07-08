
/* Varriable */
let sugarCost = 25;
let mangoCost = 50;

let totalCost = sugarCost + mangoCost;
let totalTimesCost = sugarCost * mangoCost;
let totalMinusCost = mangoCost - sugarCost;
let totalDivideCost = mangoCost / sugarCost;

console.log(totalCost);
console.log(totalTimesCost);
console.log(totalMinusCost);
console.log(totalDivideCost);


console.log(typeof sugarCost);

function dataBalnce(){
  console.log(`hello databalance ${totalCost} ${totalMinusCost}`)
}

dataBalnce();
