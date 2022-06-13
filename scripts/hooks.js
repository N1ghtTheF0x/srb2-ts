/**@type {HTMLDivElement}*/
var hooks_elm = document.getElementsByClassName("mw-parser-output").item(0)

var hooks = []

/**
 * h4 = name of Hook
 * 
 * addHook("HurtMsg", functionname, [int objecttype])
 */

/**
 * @param {string} addhook 
 * @param {string} function_text
 * @param {string} return_text
 */
function parseHook(addhook,function_text,return_text)
{
    var thirdarg_unfiltered = addhook.substring(addhook.indexOf("[")+1,addhook.indexOf("]"))
    var _thirdarg = thirdarg_unfiltered.split(" ")
    var thirdarg =
    {
        name: _thirdarg[1],
        type: _thirdarg[0]
    }

    var name = addhook.substring("Hook format: ".length,addhook.indexOf(", functionname")).substring("addHook(".length)
    var args = []

    var args_unfiltered = function_text.substring("Function format: function(".length,function_text.indexOf(")"))
    var args_strings = args_unfiltered.split(", ")
    for(var arg_string of args_strings)
    {
        var _args = arg_string.split(" ")
        var type = _args[0]
        var arg_name = _args[1]
        args.push(`${arg_name}: ${type}`)
    }

    var _return_unfiltered = return_text.substring("Function return value: ".length)
    var _ret = _return_unfiltered.split(" ")
    var ret_type = _ret[0].toLowerCase()
    return {
        thirdarg,
        name,
        args,
        ret_type
    }
}

for(var index = 0;index < hooks_elm.children.length;index++)
{
    var child = hooks_elm.children.item(index)
    if(!child.innerHTML.includes("<code>")) continue

    var addhook_unfiltered = ""
    var function_unfiltered = ""
    var return_unfiltered = ""
    if(child.innerHTML.includes("<code>") && child.innerHTML.includes("Hook format"))
    {
        addhook_unfiltered = child.innerText
    }

    var function_child = hooks_elm.children.item(index+1)
    function_unfiltered = function_child.innerText

    var return_child = hooks_elm.children.item(index+2)
    if(return_child == null) continue
    return_unfiltered = return_child.innerText
    if(!return_unfiltered.includes("Function return value: ")) return_unfiltered = "void"
    var _hook = parseHook(addhook_unfiltered,function_unfiltered,return_unfiltered)
    if(_hook.name == "") continue
    hooks.push(_hook)
}
var text = ""
for(var hook of hooks)
{
    var declare = `export function addHook(hook: ${hook.name},fn: (${hook.args === [] ? "" : hook.args.join(", ")}) => ${hook.ret_type === "" ? "void" : hook.ret_type}${hook.thirdarg.name == undefined ? "" : ", " + hook.thirdarg.name + ": " + hook.thirdarg.type}): nil\n`
    text += declare
}
console.info(text)