const num1Ele =  document.getElementById('num1') as HTMLInputElement;
const num2Ele =  document.getElementById('num2')as HTMLInputElement;
const btnEle = document.querySelector('button')!;

const numResults: number[] = [];
const textResults: string[] = [];

type NumStr = number | string;
type Result = {val: number; timestamp: Date};

interface ResultObj{
    val: number; 
    timestamp: Date
};

function addfun(num1: NumStr, num2: NumStr) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' +num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj: ResultObj) {
    console.log(resultObj.val);
}

btnEle.addEventListener('click', () => {
    const num1 = num1Ele.value;
    const num2 = num2Ele.value;

    const result = addfun(+num1, +num2);
    numResults.push(result as number);
    const stringres = addfun(num1, num2);
    textResults.push(stringres as string);
    printResult({val: result as number, timestamp: new Date()})
    console.log(numResults, textResults);
})


const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('It works');
    }, 1000);
});

myPromise.then((result) => {
    console.log(result.split('w'));
});