const {
  make2dArray,
  initialize_sec_struct,
  calculate_nussinov,
} = require("./nussinov.ts");

describe("Tests for make2dArray function", () => {
  const checkrange = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const value = 0;

  test.each(checkrange)(
    "Check Matrix Size for size = %j with constant val = 0",
    (num: number) => {
      const matrix = make2dArray(num, value);
      expect(matrix.length).toBe(num);
      expect(matrix[0].length).toBe(num);
      for (let i = 0; i < num; i++) {
        expect(matrix[i][i]).toBe(value);
      }
    }
  );
});

describe("Tests for InitSecStruct function", () => {
  const checkrange = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  test.each(checkrange)(
    "Check InitSecStruct Funktion for len = %j",
    (len: number) => {
      const dbSecStruct = initialize_sec_struct(len);
      expect(dbSecStruct.length).toBe(len);
      for (let i = 0; i < len; i++) {
        expect(dbSecStruct[i]).toBe(".");
      }
    }
  );
});

describe("Test Nussinov Implementation", () => {
  const testcases = [
    [
      "AUGAC",
      [
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1],
        [-9, 0, 0, 0, 1],
        [-9, -9, 0, 0, 0],
        [-9, -9, -9, 0, 0],
      ],
    ],
    [
      "GGAUCC",
      [
        [0, 0, 0, 1, 2, 2],
        [0, 0, 0, 1, 1, 1],
        [-9, 0, 0, 0, 0, 0],
        [-9, -9, 0, 0, 0, 0],
        [-9, -9, -9, 0, 0, 0],
        [-9, -9, -9, -9, 0, 0],
      ],
    ],
    [
      "AUUUGCG",
      [
        [0, 0, 1, 1, 1, 1, 2],
        [0, 0, 0, 0, 1, 1, 2],
        [-9, 0, 0, 0, 1, 1, 1],
        [-9, -9, 0, 0, 0, 0, 1],
        [-9, -9, -9, 0, 0, 0, 0],
        [-9, -9, -9, -9, 0, 0, 0],
        [-9, -9, -9, -9, -9, 0, 0],
      ],
    ],
  ];

  test.each(testcases)(
    "Test output matrix for Input %j",
    (seq: string, result: number[][]) => {
      expect(calculate_nussinov(seq).matrix).toStrictEqual(result);
    }
  );
});
