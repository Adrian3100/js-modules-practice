// index.js
import { add, multiply } from "./mathUtils.js";
import { toTitleCase } from "./stringUtils.js";

console.log("Add 2 + 3:", add(2, 3));
console.log("Multiply 4 * 5:", multiply(4, 5));
console.log("Title Case:", toTitleCase("hello world from node modules"));
