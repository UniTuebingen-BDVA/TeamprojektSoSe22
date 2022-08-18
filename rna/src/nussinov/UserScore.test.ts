const { UserScore } = require("./UserScore");

//test no rnastructure
test("nodotsorbrackets", () => {
  expect(UserScore("hallo")).toBe(0);
});

//test short rna structure
test("shortrnastructure", () => {
  expect(UserScore("((.).)")).toBe(2);
});

//test long rna structure
test("longrnastructure", () => {
  expect(
    UserScore(
      "...(((((((..((((((.........))))))......).((((((.......))))))..))))))..."
    )
  ).toBe(19);
});

//test no connections
test("nornastructure", () => {
  expect(UserScore("....")).toBe(0);
});
