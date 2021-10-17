import _ from "./skeleton";

test("splitString splits a string into an array of words", () => {
  expect(_.splitString("I love banana")).toStrictEqual(["I", "love", "banana"]);
});

test("spinLongWords spins words longer than 5 characters", () => {
  expect(_.spinLongWords("I love banana")).toStrictEqual("I love ananab");
});
