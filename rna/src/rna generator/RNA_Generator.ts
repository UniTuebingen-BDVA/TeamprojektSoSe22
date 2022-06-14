import { calculate_nussinov } from "./nussinov";

// generates random RNA sequence with given length parameter
function makeSeq(length) {
    let sequence = '';
    let characters = 'ACGU';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        sequence += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return sequence;
}

// input: desired length (5 to 150) -> output: RNA sequence with that length
// works only for sequences containing between 5 and 150 nucleotides
// determines if the sequence max_score is above (or equal) the threshold, i.e. meaningful
function meaningfulSeq(length) {
    let threshold = 0.4;
    if (length < 5 || length > 150) {
        return console.log("Length must be between 5 and 150!");
    } else {
        while(true) {
            let sequence = makeSeq(length);
            let nussinovSequence = calculate_nussinov(sequence);
            if (nussinovSequence.max_score >= threshold * sequence.length) {
                return sequence;
            }
        }
    }
}


// export
module.exports = { meaningfulSeq }

