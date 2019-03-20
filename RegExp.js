
const string = 'this is my string.'
const string2 = 'boooooooooooo'
const regex1 = /this/


// '^' used to test if regex is at the beginning of string that is tested. 
// '$' used to match the end
// '*' matches precending expression
const regex2 = /string.$/
const regex3 = /bo*/

const doesExist = regex3.test(string2)
const within = string2.match(regex3)
console.log(doesExist)