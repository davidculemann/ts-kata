import _ from "./skeleton";

test("splitString splits a string into an array of words", () => {
  expect(_.splitString("I love banana")).toStrictEqual(["I", "love", "banana"]);
});
