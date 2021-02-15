enum Operands {
    ADD = '+',
    SUB = '-',
    DIV = '/',
    MUL = '*',
}

export type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};
export function callback(err: Error, result?: undefined): Error;
export function callback(err: null, result: number): number;
export function callback(err: Error | null, result: any) : Error | number {
    if (err) {
        console.log(err.message);
        return err;
    }
    console.log(result);
    return result;
}

export function superComputer(firstNumber: number, operand: string, sndNumber: number, callb: Callback) : Error | number  {
    let nb: number = 0;
    try {
        if (sndNumber === 0 && operand === Operands.DIV) throw new Error('Division by 0');
        else if (operand === Operands.ADD) nb = firstNumber + sndNumber;
        else if (operand === Operands.SUB) nb = firstNumber - sndNumber;
        else if (operand === Operands.DIV) nb = firstNumber / sndNumber;
        else if (operand === Operands.MUL) nb = firstNumber * sndNumber;
        else throw new Error('Bad operator');
        return callb(null, nb);
    } catch (e) {
        return callb(e, undefined);
    }
}

superComputer(1, '+', 2, callback);
