export namespace Bitwise 
{
    type Type2 = "and" | "or" | "xor" | "ls" | "rs"
    type Type1 = "not"
    export type Type = Type1 | Type2
    export function create(operator: Type, a: string, b: string): string 
    {
        switch (operator) 
        {
            case "and":
                return `${a} & ${b}`
            case "or":
                return `${a} | ${b}`
            case "xor":
                return `${a} ^^ ${b}`
            case "not":
                return `~${a}`
            case "ls":
                return `${a} << ${b}`
            case "rs":
                return `${a} >> ${b}`
            default:
                throw new Error(`"${operator}" is not a Bitwise Operator!`)
        }
    }
    export function replace(input: string): string
    {
        // old: /_____24b((and|or|xor|ls|rs)\((.+),.?(.+)\)|(not)\((.+)\))/g
        const regex = /_____24b((and|or|xor|ls|rs)\((.+),.?(.+)\)|(not)\((.+)\))/g
        const result = input.replaceAll(regex, (match,_, op2?: Type2, n1?: string, n2?: string, op1?: Type1, n?: string) => 
        {
            if (op2 && n1 && n2)
                return create(op2, n1, n2)
            else if (op1 && n)
                return create(op1, n, "")
            else
                throw new Error(`What kind of Binary Operation is THIS? What is "${match}"? Also...HOW????!`)
        })
        if(regex.test(result)) return replace(result)
        return result
    }
}
