    const readline = require('readline');
  const inp = readline.createInterface({
    input: process.stdin
  });
  const userInput = [];
  inp.on("line", (data) => {
    userInput.push(data);
  });
  inp.on("close", () => {
    var si = +userInput[0];
    var p = si[0];
    var t = si[1];
    var r = si[2];
    var i = (p*t*r)/100
    console.log(i)
  });