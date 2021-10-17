/**
 * Adds together two numbers
 * @param inputString: string the string to manipulate
 * @returns string
 */
function spinLongWords(inputString: string): string {
  const strArr = [];
  for (let word of splitString(inputString)) {
    if (word.length >= 5) {
      let reverseWord = "";
      for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
      }
      word = reverseWord;
    }
    strArr.push(word);
  }
  return strArr.join(" ");
}

function splitString(inputString: string): string[] {
  return inputString.split(" ");
}

const _ = { splitString, spinLongWords };
export default _;

// console.log(spinLongWords("I love banana"))
// console.log(splitString("I love banana"))
