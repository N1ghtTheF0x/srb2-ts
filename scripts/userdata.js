/**
 * @typedef {'Userdata: Read-only\nUserdata variables: Read+Write' | "Read-only" | "Read+Write" | "None"} AccessType
 */
const AccessType = null

/**
 * 
 * @param {HTMLTableSectionElement} table 
 */
function extractUserData(table)
{
    /**
     * 
     * @param {string} type 
     */
    function checkType(type)
    {
        if(type == "N/A") return "unknown"
        else if(type.startsWith("enum")) return "number"
        return type
    }
    /**
     * 
     * @param {string} name
     * @param {AccessType} access 
     */
    function checkAccess(name,access)
    {
        switch(access)
        {
            case "None":
                return `#${name}`
            case "Read+Write":
                return name
            case "Read-only":
            case "Userdata: Read-only\nUserdata variables: Read+Write":
                return `readonly ${name}`
            default:
                return name
        }
    }
    const userdataNameStr = table.children[0].innerText
    const userdataName = userdataNameStr.substring(7,userdataNameStr.lastIndexOf(" structure"))
    var clazz = `declare class ${userdataName}\n{`
    for(var index = 2;index < table.children.length;index++)
    {
        // properties
        const nameStr = table.children[index].children[0].innerText
        const typeStr = table.children[index].children[1].innerText
        const type = checkType(typeStr)
        const accessStr = table.children[index].children[2].innerText
        const name = checkAccess(nameStr,accessStr)
        const docs = table.children[index].children[3].innerText
        const result = `/**\n * ${docs}\n */\n\t${name}: ${type}\n`
        clazz += result
    }
    return `${clazz}}`
}