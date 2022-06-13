var tables = document.getElementsByTagName("tbody")

var collections = []

/**
 * @param {string} text 
 */
function parseReturn(text)
{
    if(text.includes(", "))
    {
        text = `[${text}]`
    }
    return text
}

/**
 * @param {Element} code 
 */
function parseFunction(code)
{
    var isMethod = false
    var func_name = code.children.item(0).innerText
    var params = []
    for(var index = 1;index < code.children.length;index++)
    {
        var elm = code.children.item(index)
        var name = elm.nextSibling.nodeValue
        // name filter
        for(var char of name)
        {
            if(char.includes(" ")) name = name.replace(" ","")
            if(char.includes(",")) name = name.replace(",","")
            if(char.includes("[")) name = name.replace("[","")
            if(char.includes("]")) name = name.replace("]","")
            if(char.includes(")")) name = name.replace(")","")
            if(char.includes("(")) name = name.replace("(","")
        }
        // done
        var type = elm.innerText
        params.push(`${name}: ${type}`)
    }
    if(func_name.includes(".")) isMethod = true
    return {
        func_name,
        params,
        isMethod
    }
}

for(var table of tables)
{
    for(var row of table.children)
    {
        if(row.children.length !== 3) continue
        var func_elm = row.children.item(0)
        var return_elm = row.children.item(1)
        var desc_elm = row.children.item(2)

        if(desc_elm.innerHTML.includes("Description")) continue

        var code_elm = func_elm.children.item(1)
        if(code_elm === null) continue
        var func = parseFunction(code_elm)
        var ret = parseReturn(return_elm.innerText)
        var desc = desc_elm.innerText
        collections.push({
            func,
            ret,
            desc
        })
    }
}

var text = ""

for(var _function of collections)
{
    var declare = ""
    if(_function.func.isMethod)
    {
        declare = `${_function.func.func_name}(${_function.func.params.join(", ")}): ${_function.ret}\n`
    }
    else
    {
        //declare = `export function ${_function.func.func_name}(${_function.func.params.join(", ")}): ${_function.ret}\n`
    }
    text += declare
}

console.info(text)
