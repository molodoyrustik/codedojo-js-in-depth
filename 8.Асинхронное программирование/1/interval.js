const DELAY = 0;
const TOTAL_REPS = 1000;

let reps = 0;
let start = Date.now();
let previous = start;
let data = [];

let interval = setInterval(() => {
  if (reps === TOTAL_REPS) {
    let average = data.reduce((total, current) => total + current) / TOTAL_REPS;
    let max = Math.max(...data);
    let min = Math.min(...data);
    console.log(`Запрошено: ${DELAY} \r\nМаксимальное: ${max}\r\nМинимальное: ${min}\r\nСреднее: ${average}`);

    return clearInterval(interval);
  }

  let now = Date.now();
  let diff = now - previous;
  data.push(diff);
  previous = now;
  reps += 1;
}, DELAY); Date.now();