
var fib = function(n) {
    if (n === 1) {
      return [0, 1];
    } else {
      var arr = fib(n - 1);
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      return arr;
    }
  };
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Please enter length of series', function (n) {
      if(n==1)
      console.log('[0]');
      else if(n<=0)
      console.log('Please enter a positive integer.');
      else
      {
        try
        {
        console.log(fib(Number(n-1)));
        }
        catch(e)
        {
            console.log("Limit exceeded.Please try with lower number.");
        }
      }
      rl.close();
    });