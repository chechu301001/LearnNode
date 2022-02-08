const cp = require('child_process');   
// cp.execSync('calc')
// console.log('opened calculator');
let output = cp.execSync('node abc.js');
console.log("output is" + output);