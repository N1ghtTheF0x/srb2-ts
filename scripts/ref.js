const PATH = require("path")
const FS = require("fs")

const src_folder = PATH.resolve(__dirname,"..","srb2-ts","userdata")

const indexdts = PATH.resolve(src_folder,"index.d.ts")
const paths = FS.readdirSync(src_folder,{encoding:"utf-8"})

const refs = []

for(const path of paths)
{
    refs.push(`/// <reference path="./${path}" />`)
}

FS.writeFileSync(indexdts,refs.join("\n"),"utf-8")