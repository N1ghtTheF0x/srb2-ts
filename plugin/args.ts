const regex = /[^\w\(]arg[^\w\)]/g

function replaceArgs(code: string): string
{
    return code.replaceAll(regex,(match) => "...\n")
}

export default replaceArgs