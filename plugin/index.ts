import { Diagnostic, Program } from "typescript"
import { Plugin as TTLPlugin, CompilerOptions, EmitHost, EmitFile, ProcessedFile } from "typescript-to-lua"
import bitwiseFile from "./bitwise"
import SRB2Script from "./file"

namespace SRB2
{
    export class Plugin implements TTLPlugin
    {
        afterPrint(program: Program, options: CompilerOptions, emitHost: EmitHost, result: ProcessedFile[]): void | Diagnostic[]
        {
            result.push(bitwiseFile)
        }
        beforeEmit(program: Program, options: CompilerOptions, emitHost: EmitHost, result: EmitFile[])
        {
            for(var index = 0;index < result.length;index++)
            {
                const file = result[index]
                result[index] = new SRB2Script(file)
            }    
        }
    }
}



export default new SRB2.Plugin()