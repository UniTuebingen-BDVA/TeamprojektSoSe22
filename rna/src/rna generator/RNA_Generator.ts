import { calculate_nussinov } from "./nussinov";

// checks if number or string is an Integer
function checkIfInt(value: number | string) {
  if ((value as any) instanceof String) {
    value = +value as number;
  }
  return Math.ceil(value as number) == Math.floor(value as number);
}

// generates random RNA sequence with given length parameter
function makeSeq(length: number) {
  let sequence = "";
  const characters = "ACGU";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    sequence += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return sequence;
}

// input: desired length as Int from 5 to 150 -> output: RNA sequence with that length
// works only for sequences containing between 5 and 150 nucleotides
// determines if the sequence max_score is above (or equal) the threshold, i.e. meaningful
function meaningfulSeq(length: number | string) {
  const threshold = 0.4;
  if (length < 5 || length > 150) {
    return console.log("Length must be an Int between 5 and 150");
  } else if (checkIfInt(length)) {
    length = +length as number;
    while (true) {
      const sequence = makeSeq(length);
      const nussinovSequence = calculate_nussinov(sequence);
      if (nussinovSequence.max_score >= threshold * sequence.length) {
        return sequence;
      }
    }
  } else {
    return console.log("Length must be an Int between 5 and 150");
  }
}

// export
module.exports = { meaningfulSeq };
