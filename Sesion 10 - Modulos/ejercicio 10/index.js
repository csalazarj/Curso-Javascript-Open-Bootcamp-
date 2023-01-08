import { multiplica, suma } from "./controller.js";
import chalk from "chalk";

let x = suma(1, 2);
let y = suma(4, 5);
console.log(chalk.green(multiplica(x, y)));
