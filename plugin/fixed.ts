import { match } from "assert"

const FRACBITS = 16
const FRACUNIT = 1 << FRACBITS
const FRACMASK = FRACUNIT - 1

const float2fixed = (x: number) => (x * FRACUNIT) | 0
const fixed2float = (x: number) => x / FRACUNIT

namespace RegExp
{
    export const e = /\d+e[-|+]\d+/g
    export const point = /\d+\.\d+/g
}

const toFixed = (numberStr: string) => {

    const number = float2fixed(parseFloat(numberStr))

    return String(number == 0 ? 1 : number)
}

function replaceFixedNumbers(code: string): string
{
    return code.replaceAll(RegExp.e,(match) => toFixed(match))
    .replaceAll(RegExp.point,(match) => toFixed(match))
}

export default replaceFixedNumbers