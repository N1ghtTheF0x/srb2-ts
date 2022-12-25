if(!("DEBUG" in window)) Object.defineProperty(window,"DEBUG",{value: false})
/**
 * @param {string} input 
 */
function isValid(input)
{
    return /^[A-Za-z_][A-Za-z0-9_]*$/g.test(input)
}
/**
 * @param {string} input 
 */
function isValid2(input)
{
    return !/^(\d|-)/g.test(input) && 
        (input.toLowerCase() == input || input.toUpperCase() == input)
}
/**
 * @param {string} name 
 * @param {string} value 
 * @returns 
 */
function defineConstant(name)
{
    return `declare const ${name}: number\n`
}

/**
 * @param {HTMLTableSectionElement} tbody
 */
function findCellIndex(tbody)
{
    for(const row of tbody.rows)
    {
        for(var cellIndex = 0;cellIndex < row.cells.length;cellIndex++)
        {
            const cell = row.cells[cellIndex]
            if(DEBUG) console.dir(cell)
            if(!cell) continue
            const text = cell.innerText.trim()
            if(isValid2(text) && text.length > 0)
            {
                // Found?
                return cellIndex
            }
        }
    }
    return -1
}
/**
 * @param {HTMLTableSectionElement} tbody
 */
function extractConstantsFromTable(tbody)
{
    const cellIndex = findCellIndex(tbody)
    if(cellIndex == -1) return ""

    const constants = []

    for(const row of tbody.rows)
    {
        const cell = row.cells[cellIndex]
        if(!cell) continue
        const name = cell.innerText.trim()
        if(isValid2(name)) constants.push(defineConstant(name))
    }

    return constants.join("")
}

function extractConstants()
{
    var result = ""

    const tbodies = document.getElementsByTagName("tbody")

    for(const tbody of tbodies)
    {
        const constants = extractConstantsFromTable(tbody)
        result += constants
        result += "\n"
    }

    return result
}