
interface rnaSequence {
    name: string;
    sequence: string;
    length: number;
    nussinovMatrix?: number[][];
    tracebackMatrix?: number[][];
    dotBracketString?: string[];
}

function initNussinovMatrix (size:number):number[][] {
    let matrix:number[][] = new Array(size);

    for (let i = 0; i < size; i++) {
        matrix[i] = new Array(size);
    }

    for (let i = 0; i < size; i++) {
        matrix[i][i] = 0;
        if (i > 0)
            matrix[i][i-1] = 0;
    }

    return matrix;
}

function checkCanonicalBasePair (base1:string, base2:string, i:number, j:number):number {
    if (i > j)
        return 0;
    if (base1 === "U" && base2 === "A")
        return 1;
    if (base1 === "A" && base2 === "U")
        return 1;

    if (base1 === "G" && base2 === "C")
        return 1;
    if (base1 === "C" && base2 === "G")
        return 1;

    if (base1 === "G" && base2 === "U")
        return 1;
    if (base1 === "U" && base2 === "G")
        return 1;
    return 0;
}

function checkBifurkation(matrix:number[][], i:number, j:number):number {
    let maxValue = 0;
    for (let k = i; k < j; k++) {
        let newValue = matrix[i][k] + matrix[k+1][j]
        if (newValue > maxValue)
            maxValue = newValue;
    }

    return maxValue;
}

function nussinov_old(rnaInput):rnaSequence {
    let seq = rnaInput.sequence;
    let len = rnaInput.length;
    let nMatrix = initNussinovMatrix(len);
    for (let n = 1; n < len; n++) {
        for (let j = n; j < len; j++) {
            let i = j - n;

            let baseOne = seq[i];
            let baseTwo = seq[j];

            let chaseOne = nMatrix[i+1][j];
            let chaseTwo = nMatrix[i][j-1];
            let chaseThree = nMatrix[i+1][j-1] + checkCanonicalBasePair(baseOne, baseTwo, i, j);
            let chaseFour = checkBifurkation(nMatrix, i, j);

            nMatrix[i][j] = Math.max(chaseOne, chaseTwo, chaseThree, chaseFour);
        }
    }
    rnaInput.nussinovMatrix = nMatrix;
    return rnaInput;
}

module.exports = { initNussinovMatrix, nussinov: nussinov_old }
