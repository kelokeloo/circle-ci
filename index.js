let count = 0;
const interval = setInterval(() => {
  console.log("count is: ", count++);
  if (count === 10000) {
    clearInterval(interval);
  }
}, 10);
