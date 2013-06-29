#!/usr/bin/env node

var fs = require('fs');
var outfile = "primes.txt";

var test = new Array();
var primes = new Array();
var counter = 0;

for (var i = 2; i < 1001; i++)
{
test[i] = true;
}

for (var j = 2; j < 100; j ++)
{
if(counter > 1000) 
{
 break;
}
if(test[j] == true) 
{
  counter += 1;
  for (var k = j*j; k < 1000; k += j)
  {
    test[k] = false;
  }
}

}

counter = 1;

for (var i = 2; i < 1001; i++)
{
  if(test[i] == true)
  {
   counter += 1;
   primes.push(i);
  }
 if(counter > 100)
 {
  break;
 }
}

var out = primes.toString();
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
