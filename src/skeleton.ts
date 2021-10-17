/**
 * Adds together two numbers
 * @param inputString: string the string to manipulate
 * @returns string
 */
function spinLongWords(inputString: string): string {
  let outString = "";
  for (let word of splitString(inputString)) {
    outString += word;
  }
  return outString;
}

function splitString(inputString: string): string[] {
  return inputString.split(" ");
}

const _ = { splitString, spinLongWords };
export default _;

// console.log(spinLongWords("I love banana"))
// console.log(splitString("I love banana"))
