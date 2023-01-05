import { EOL } from "os"
import { Program } from "typescript"
import { Plugin as TTLPlugin, CompilerOptions, EmitHost, EmitFile } from "typescript-to-lua"
import { Bitwise } from "./bitwise"

namespace SRB2
{
    export class Plugin implements TTLPlugin
    {
        beforeEmit(program: Program, options: CompilerOptions, emitHost: EmitHost, result: EmitFile[])
        {
            for(const file of result)
            {
                if(!options.luaBundleEntry) file.code = file.code.replaceAll("require","dofile")
                file.code = Bitwise.replace(file.code)
                if(file.outputPath.includes("lualib_bundle.lua")) throw new Error(`The EMCAScript Standard implemented in Lua is not supported by SRB2! Please set in your tsconfig.json "luaLibImport" to "none"!`)
                const lines = file.code.split(EOL)
                for(const line of lines)
                {
                    const atLine = lines.indexOf(line)+1
                    const has__TS__ = line.indexOf("__TS__")
                    if(has__TS__ > -1) console.warn(`[WARNING] SRB2 won't accept ${file.outputPath}:${atLine}:${has__TS__+1} because it has a __TS__<something> there and SRB2 doesn't like them!`)
                }
            }    
        }
    }
}



export default new SRB2.Plugin()