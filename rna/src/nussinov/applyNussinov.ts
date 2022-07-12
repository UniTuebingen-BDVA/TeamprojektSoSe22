const {calculate_nussinov} = require('./nussinov')

export interface ScoreAndDotBracketNotation {
    score: number,
    dotBracketNotation: string[]
}

export function applyNussinov (sequence : string) :ScoreAndDotBracketNotation {

    // apply the nussinov on the given string
    const result = calculate_nussinov(sequence);

    // extract the score from the object
    const max_score = result.max_score;

    // extract the dot bracket notation from the object
    const dotbracket = result.secondary_structure;

    return {score: max_score, dotBracketNotation: dotbracket};
}