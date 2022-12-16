/**
 * @param {HTMLElement} html 
 * @param {number} index 
 * @returns {[string, number]}
 */
function getHookName(html,index)
{
    const elm = html.children[index]
    if(elm.tagName == "H4") return [elm.innerText,index]
    return getHookName(html,index+1)
}
/**
 * @param {HTMLElement} html 
 * @param {number} index 
 * @returns {[string, number]}
 */
function getHookFormat(html,index)
{
    const str = html.children[index].innerText
    if(str.startsWith("Function format:"))
    {
        const list = []
        const args = str.substring(26,str.length-1).split(", ")
        for(const arg of args)
        {
            const [type,argName] = arg.split(" ")
            list.push(`${argName}: ${type}`)
        }
        return [list.join(", "),index]
    }
    return getHookFormat(html,index+1)
}
//
/**
 * @param {HTMLElement} html 
 * @param {number} index 
 * @returns {[string, number]}
 */
function getHookReturnType(html,index)
{
    const str = html.children[index].innerText
    if(str.startsWith("Function return value:"))
    {
        const returnType = str.substring(23,str.indexOf(" ",23))
        return [returnType,index]
    }
    return getHookFormat(html,index+1)
}
/**
 * @param {HTMLElement} html 
 */
function extractHooks(html)
{
    const hooks = []
    for(var index = 9;index < html.children.length;index++)
    {
        const [name,nameIndex] = getHookName(html,index)
        index = nameIndex
        const [args,argsIndex] = getHookFormat(html,index)
        index = argsIndex
        //const [returnType,returnTypeIndex] = getHookReturnType(html,index)
        //index = returnTypeIndex
        hooks.push(`\n"${name}": (${args}) => ${returnType ?? "void"}`)
    }
    return hooks
}