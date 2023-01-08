function replaceMathObject(code: string): string
{
    return code.replaceAll(/math\./g,"")
}

export default replaceMathObject