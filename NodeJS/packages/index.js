//import without package
// let sum = require('./Maths');
// let sub = require('./Maths');
// let mul = require('./Maths');
// let div = require('./Maths');
// console.log(div(6,3));


//import with package
import { sum, sub, mul, div } from "./utility/Math.js";
import perimeter from "./utility/Math.js"
// console.log(sub(5978454,5464211))
// console.log(sum(5978454,5464211))
// console.log(mul(5978454,5464211))
// console.log(div(5978454,5464211))
// console.log(perimeter(1))

import chalk from 'chalk';

//change color of console output
console.log(chalk.green('Hello world!'));
console.log(chalk.red('Hello world!'));
console.log(chalk.blue('Hello world!'));
console.log(chalk.white('Hello world!'));
console.log(chalk.black('Hello world!'));


// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold('Hello world!'));


// Nest styles of the same type even (color, underline, background)
console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));


// Use RGB colors in terminal emulators that support it.
console.log(chalk.rgb(255, 45, 67).underline('Underlined Reddish color'));
console.log(chalk.hex('#FFC0CB').underline('Underlined Pink color'));


// ES2015 template literal
console.log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
    `);

//using figlet package
import figlet from "figlet";

figlet("Muheet Alam", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});