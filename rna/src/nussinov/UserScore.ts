export interface Score {
  uscore: number;
}

//calculate UserScore
export function UserScore(sequence: string): number {
  //change string of dotbracketnotation to array of chars
  const array = Array.from(sequence);

  //counter of score
  let counter = 0;

  //searching for closes brackets
  for (let i = 0; i < sequence.length; i++) {
    if (array[i] === ")") counter += 1;
  }

  return counter;
}
