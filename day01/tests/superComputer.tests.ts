import { describe, it, expect } from '@jest/globals';
import { callback, superComputer } from '../src/superComputer';

describe('Test superComputer', () => {
    it('sub 10 + 10', () => {
        expect(superComputer(10, '+', 10, callback)).toBe(20);
    });
    it('sub 10 - 10', () => {
        expect(superComputer(10, '-', 10, callback)).toBe(0);
    });
    it('div 10 / 10', () => {
        expect(superComputer(10, '/', 10, callback)).toBe(1);
    });
    it('mul 10 * 10', () => {
        expect(superComputer(10, '*', 10, callback)).toBe(100);
    });
    it('division by 0', () => {
        expect(superComputer(10, '/', 0, callback)).toStrictEqual(new Error('Division by 0'));
    });
    it('bad operator', () => {
        expect(superComputer(10, 'X', 10, callback)).toStrictEqual(new Error('Bad operator'));
    });
});

describe('Test callback', () => {
    it('callback Error', () => {
        expect(callback(new Error('Division by 0'), undefined)).toStrictEqual(new Error('Division by 0'));
    });
    it('callback Result', () => {
        expect(callback(null, 20)).toBe(20);
    });
});
