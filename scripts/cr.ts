import { resolve } from "path"
import { readdirSync, writeFileSync, appendFileSync } from "fs"

const folder = resolve(process.cwd(),process.argv[2])

const indexdts = resolve(folder,"index.d.ts")

const cr = (path: string) => `/// <reference path="./${path}" />\n`

const files = readdirSync(folder).filter((file) => file != "index.d.ts")

writeFileSync(indexdts,"","utf-8")
for(const file of files) appendFileSync(indexdts,cr(file),"utf-8")