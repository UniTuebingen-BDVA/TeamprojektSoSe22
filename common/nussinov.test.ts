const {
    make2dArray,
    initialize_sec_struc,
    calculate_nussinov,
    duplicate,
    is_canonical,
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
            for (let j = 0; j < num; j++) {
                expect(matrix[i][j]).toBe(value);
            }
        }
      }
  );
});


describe("Tests for duplicate function", () => {
    const checkrange = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    test.each(checkrange)(
        "Check if all cells of Matrix a matches all cells of Matrix b but a & b are not the same Matrix",
        (num: number) => {
            const matrix_a = make2dArray(num, 0);
            const matrix_b = duplicate(matrix_a);
            expect(matrix_b.length).toBe(matrix_a.length);
            expect(matrix_b[0].length).toBe(matrix_a[0].length);
            for (let i = 0; i < num; i++) {
                for (let j = 0; j < num; j++) {
                    expect(matrix_b[i][j]).toBe(matrix_a[i][j]);
                }
            }
            expect(matrix_b).not.toBe(matrix_a)
        }
    );
});


describe("Tests for InitSecStruct function", () => {
  const checkrange = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  test.each(checkrange)(
      "Check InitSecStruct Funktion for len = %j",
      (len: number) => {
        const dbSecStruct = initialize_sec_struc(len);
        expect(dbSecStruct.length).toBe(len);
        for (let i = 0; i < len; i++) {
          expect(dbSecStruct[i]).toBe(".");
        }
      }
  );
});


describe("Test for is_canonical function", () => {
    const testcases = [
        ["A", "A", false],
        ["A", "G", false],
        ["A", "C", false],
        ["A", "U", true],

        ["U", "A", true],
        ["U", "G", true],
        ["U", "C", false],
        ["U", "U", false],

        ["G", "A", false],
        ["G", "G", false],
        ["G", "C", true],
        ["G", "U", true],

        ["C", "A", false],
        ["C", "G", true],
        ["C", "C", false],
        ["C", "U", false],
    ];
    test.each(testcases)(
        "Test if input %j and input %i results in the expected score.",
        (base_a:string, base_b:string, res:boolean) => {
            expect(is_canonical(base_a, base_b)).toBe(res);
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


describe("Test Nussinov Implementation", () => {
    const testcases = [
        [
            "AUGAC",
            5,
            [
                [0, 0, 0, 1, 1],
                [0, 0, 0, 1, 1],
                [-9, 0, 0, 0, 1],
                [-9, -9, 0, 0, 0],
                [-9, -9, -9, 0, 0],
            ],
            1,
            [
                "..(.)",
                ".(.).",
                ".(.).",
                "..(.)",
                "..(.)",
            ],
        ],
        [
            "GGUUAGGGUUUUUUAAA",
            17,
            [
                [0, 0, 1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 6, 6, 6, 7],
                [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6],
                [-9, 0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6],
                [-9, -9, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6],
                [-9, -9, -9, 0, 0, 0, 0, 0, 1, 2, 3, 3, 4, 4, 4, 5, 5],
                [-9, -9, -9, -9, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 5],
                [-9, -9, -9, -9, -9, 0, 0, 0, 1, 1, 2, 2, 2, 2, 3, 4, 4],
                [-9, -9, -9, -9, -9, -9, 0, 0, 0, 1, 1, 1, 1, 1, 2, 3, 4],
                [-9, -9, -9, -9, -9, -9, -9, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
                [-9, -9, -9, -9, -9, -9, -9, -9, 0, 0, 0, 0, 0, 0, 1, 2, 3],
                [-9, -9, -9, -9, -9, -9, -9, -9, -9, 0, 0, 0, 0, 0, 1, 2, 3],
                [-9, -9, -9, -9, -9, -9, -9, -9, -9, -9, 0, 0, 0, 0, 1, 2, 2],
                [-9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, 0, 0, 0, 1, 1, 2],
                [-9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, 0, 0, 0, 1, 1],
                [-9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, 0, 0, 0, 0],
                [-9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, 0, 0, 0],
                [-9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, 0, 0],
            ],
            7,
            [
                "(.)((((.)))((.)))",
                "(.)(((((.))))(.))",
                "((((..))))(((.)))",
                "((((..))))(((.)))",
                "((((.).)))(((.)))",
                "((((.)).))(((.)))",
                "(((.)((.))))((.))",
                "((((.))(.)))((.))",
                "((.)(((.))))((.))",
            ],
        ],
    ];
    test.each(testcases)(
        "Test output matrix for Input %j",
        (seq: string, len:number, result: number[][], max:number, multiple_solutions: string[]) => {
            const nuss = calculate_nussinov(seq, false);
            let all_results = [];
            for (let i = 0; i < nuss.all_tracebacks.length; i++) {
                all_results.push(nuss.all_tracebacks[i].secondary_structure.join(""));
            }
            all_results = all_results.sort();
            multiple_solutions = multiple_solutions.sort();
            console.log(all_results)
            console.log(multiple_solutions)

            expect(nuss.sequence).toBe(seq);
            expect(nuss.sequence_length).toBe(len);
            expect(nuss.max_score).toBe(max);
            expect(all_results).toStrictEqual(multiple_solutions);
            expect(calculate_nussinov(seq).matrix).toStrictEqual(result);
        }
    );
});