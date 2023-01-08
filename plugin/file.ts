import { SourceFile } from "typescript";
import { EmitFile } from "typescript-to-lua";
import replaceFixedNumbers from "./fixed";
import replaceMathObject from "./math";
import replaceRequire from "./require";

class SRB2Script implements EmitFile
{
    code: string
    outputPath: string
    sourceMap?: string
    sourceFiles?: SourceFile[]
    constructor(file: EmitFile)
    {
        this.code = file.code
        this.outputPath = file.outputPath
        this.sourceMap = file.sourceMap
        this.sourceFiles = file.sourceFiles
        // 1. require -> dofile
        this.code = replaceRequire(this.code)
        // 2. float/double -> fixed
        this.code = replaceFixedNumbers(this.code)
        // 3. global math
        this.code = replaceMathObject(this.code)
    }
}

export default SRB2Script