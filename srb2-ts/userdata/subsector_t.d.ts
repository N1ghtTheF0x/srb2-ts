
declare interface subsector_t
{
    readonly valid: boolean
    readonly sector: sector_t
    readonly numlines: INT16
    readonly firstline: UINT16
    polyList(this: subsector_t): polyobject_t[]
}