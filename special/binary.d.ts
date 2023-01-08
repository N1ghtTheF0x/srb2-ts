declare module "bitwise"
{
    /**
     * Bitwise Operation: AND (a & b)
     * @param a Left Operand
     * @param b Right Operand
     */
    export function and(a: number,b: number): number
    /**
     * Bitwise Operation: OR (a | b)
     * @param a Left Operand
     * @param b Right Operand
     */
    export function or(a: number,b: number): number
    /**
     * Bitwise Operation: XOR (a ^^ b)
     * @param a Left Operand
     * @param b Right Operand
     */
    export function xor(a: number,b: number): number
    /**
     * Bitwise Operation: NOT (!a or ~a)
     * @param a Operand
     */
    export function not(a: number): number
    /**
     * Bitwise Operation: Left shift (a << b)
     * @param a Left Operand
     * @param b Right Operand
     */
    export function ls(a: number,b: number): number
    /**
     * Bitwise Operation: Right Shift (a >> b)
     * @param a Left Operand
     * @param b Right Operand
     */
    export function rs(a: number,b: number): number
}