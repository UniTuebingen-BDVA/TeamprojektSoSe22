import { ScoreAndDotBracketNotation } from "./applyNussinov";

const { applyNussinov } = require("./applyNussinov");

test("firstTest", () => {
  const expectation: ScoreAndDotBracketNotation = {
    score: 2,
    dotBracketNotation: [".", "(", "(", ".", ".", ")", ")"],
  };
  expect(applyNussinov("GGUCCAC")).toStrictEqual(expectation);
});

test("onlyA", () => {
  const expectation: ScoreAndDotBracketNotation = {
    score: 0,
    dotBracketNotation: [".", ".", ".", ".", ".", ".", "."],
  };
  expect(applyNussinov("AAAAAAA")).toStrictEqual(expectation);
});

test("AU", () => {
  const expectation: ScoreAndDotBracketNotation = {
    score: 0,
    dotBracketNotation: ["(", "(", ".", ".", ")", ")"],
  };
  expect(applyNussinov("AUAUAU")).toStrictEqual(expectation);
});
