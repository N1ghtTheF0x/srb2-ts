function replaceMathObject(code: string): string
{
    return code.replaceAll(/math\.(.+)/g,(match: string,name: string) =>
    {
        return name
    })
}

export default replaceMathObject