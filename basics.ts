function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const nums = n1 + n2;
  if (showResult) {
    console.log(phrase + nums);
  } else {
    return nums;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase ='Wow you did that'

const result = add(number1, number2, printResult, resultPhrase);


