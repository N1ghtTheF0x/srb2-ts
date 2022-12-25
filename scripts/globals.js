/**
 * @typedef {'Userdata: Read-only\nUserdata variables: Read+Write' | "Read-only" | "Read+Write"} AccessType
 */

/**
 * 
 * @param {string} name
 * @param {AccessType} access 
 * @param {string} type
 * @param {string} docs
 */
function declareGlobal(name,type,access,docs)
{
    switch(access)
    {
        case "Read+Write":
            return `/**\n${docs}\n*/\ndeclare var ${name}: ${type}\n`
        case "Read-only":
        case "Userdata: Read-only\nUserdata variables: Read+Write":
            return `/**\n${docs}\n*/\ndeclare const ${name}: ${type}\n`
    }
}

/**
 * 
 * @param {HTMLTableSectionElement} tbody 
 */
function extractGlobal(tbody)
{
    const globals = []
    const NAME_INDEX = 0, TYPE_INDEX = 1,ACCESS_INDEX = 2,DOCS_INDEX = 3
    for(var index = 1;index < tbody.rows.length;index++)
    {
        const row = tbody.rows[index]

        const name = row.cells[NAME_INDEX].innerText.trim()
        const type = row.cells[TYPE_INDEX].innerText.trim()
        const access = row.cells[ACCESS_INDEX].innerText.trim()
        const docs = row.cells[DOCS_INDEX].innerText.trim()

        globals.push(declareGlobal(name,type,access,docs))
    }
    return globals.join("")
}