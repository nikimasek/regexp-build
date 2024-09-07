import * as Regex from '../index.js';

console.log(Regex.regex([/a/, /b/]));
console.log(Regex.find([/a/, /b/]));
console.log(Regex.pattern([/a/, /b/]));
console.log(Regex.group([/a/, /b/]));
console.log(Regex.group([/a/, /b/], 'test'));
console.log(Regex.zeroOrMore([/a/, /b/]));
console.log(Regex.zeroOrMore([/[ab]/]));
console.log(Regex.oneOrMore([/a/, /b/]));
console.log(Regex.oneOrMore([/[ab]/]));
console.log(Regex.optional([/a/, /b/]));
console.log(Regex.optional([/[ab]/]));
console.log(Regex.repeat([/a/, /b/], 4));
console.log(Regex.repeat([/[ab]/], 4));
console.log(Regex.choiceOf([/a/, /b/], [/[ab]/]));
console.log(Regex.choiceOf([/a/, /4|b/], [/[ab]/]));
console.log(Regex.lookahead([/a/, /b/]));
console.log(Regex.negativeLookhead([/a/, /b/]));
console.log(Regex.lookbehind([/a/, /b/]));
console.log(Regex.negativeLookbehind([/a/, /b/]));

const domain = /\w+\.[a-z]{3}/;
const protocol = Regex.choiceOf([/http/], [/https/]);
console.log(Regex.pattern([protocol, /:\/\//, Regex.zeroOrMore(/\w+\./), domain]));
console.log(Regex.pattern([/\w+@/, domain]));