import { EmitFile } from "typescript-to-lua";

const regex = /require\("(.+)"\)/g

function replaceRequire(code: string): string
{
    return code.replaceAll(regex,(match: string,id: string) =>
    {
        const filename = id.endsWith(".lua") ? id : `${id}.lua`
        const path = filename.replace("Lua/","")
        return `dofile("${path}")`
    })
}

export default replaceRequire