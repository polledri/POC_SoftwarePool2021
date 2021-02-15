/* eslint-disable max-len */
enum Operands {
    ADD = '+',
    SUB = '-',
    DIV = '/',
    MUL = '*',
}

type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};
function callback(err: Error, result?: undefined): Error;
function callback(err: null, result: number): number;
function callback(err: Error | null, result: any): Error | number {
    if (err) {
        console.log(err.message);
        return err;
    }
    console.log(`Result: ${result}`);
    return result;
}

function superComputer(firstNumber: number, operand: string, sndNumber: number, callb: Callback) {
    let nb: number = 0;
    try {
        if (sndNumber === 0 && operand === Operands.DIV) throw new Error('Divison by 0');
        else if (operand === Operands.ADD) nb = firstNumber + sndNumber;
        else if (operand === Operands.SUB) nb = firstNumber - sndNumber;
        else if (operand === Operands.DIV) nb = firstNumber / sndNumber;
        else if (operand === Operands.MUL) nb = firstNumber * sndNumber;
        else throw new Error('Bad operator');
        callb(null, nb);
    } catch (e) {
        callb(e, undefined);
    }
}

console.log(superComputer(1, '+', 2, callback));
