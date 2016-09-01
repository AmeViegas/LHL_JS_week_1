/* requirements: create a application that will take an two
numbers from the commandline and add them together.  Display 
output to terminal. 
*/

// take input from command line
var args = process.argv;

// add the two args.
var sum = parseInt(args[2]) + parseInt(args[3])
console.log(sum);