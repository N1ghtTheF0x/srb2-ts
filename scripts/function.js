const defineFunc = (name,param,returnType,docs) => `/**\n * ${docs}\n */\ndeclare function ${name}(${param}): ${returnType}\n`
/**
 * @typedef {"enum" | "function"} Type
 */
var Type = null
/**
 * 
 * @param {HTMLTableSectionElement} table
 * @param {number} name 
 * @param {number} returnVal 
 * @param {number} docs 
 */
function extractFunction(table,name = 0,returnVal = 1,docs = 2,skipFirst = true)
{
    const functions = []
    for(var index = skipFirst ? 1 : 0;index < table.children.length;index++)
    {
        const funcStr = table.children[index].children[name].innerText
        const func = funcStr.substring(0,funcStr.lastIndexOf("("))
        const paramStr = funcStr.substring(funcStr.indexOf("(")+1,funcStr.lastIndexOf(")"))
        const param = extractFunctionParameters(paramStr)
        const returnTypeStr = table.children[index].children[returnVal].innerText
        const returnType = extractFunctionReturn(returnTypeStr)
        const docsStr = table.children[index].children[docs].innerText
        functions.push(defineFunc(func,param,returnType,docsStr))
    }
    console.dir(functions)
    return functions
}
/**
 * <Type> <name>, [<Type> <name>],...
 * @param {string} param 
 */
function extractFunctionParameters(param)
{
    /**
     * 
     * @param {string} arg 
     * @returns 
     */
    function parse(arg)
    {
        const [type,typeName] = arg.replaceAll("[","").replaceAll("]","").replaceAll("/"," | ").split(" ")
        return `${typeName}: ${type}`
    }
    if(param.length == 0) return ""
    const args = param.split(", ")
    
    if(args.length == 1) return parse(args[0])
    else if(args.length > 1) // tuple
    {
        const list = []
        for(const arg of args) list.push(parse(arg))
        return list.join(", ")
    }
    return ""
}
/**
 * <Type>[, <Type>,...]
 * @param {string} returnType 
 */
function extractFunctionReturn(returnType)
{
    const args = returnType.split(", ")
    if(args.length == 1) return args[0]
    else if(args.length > 1) return `LuaMultiReturn<[${args.join(",")}]>`
    else return "void"  
}