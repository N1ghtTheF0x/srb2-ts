import { readFileSync } from "fs";
import { resolve } from "path";
import { ProcessedFile } from "typescript-to-lua";

const bitwiseFile: ProcessedFile = {
    code: readFileSync(resolve(__dirname,"bitwise.lua"),"utf-8"),
    fileName: "bitwise.lua"
}

export default bitwiseFile