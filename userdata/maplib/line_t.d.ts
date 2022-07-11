declare type lineargs_t = INT16[]
declare type linestringargs_t = string[]

declare type line_t =
{
    readonly valid: boolean
    readonly v1: vertex_t
    readonly v2: vertex_t
    readonly dx: fixed_t
    readonly dy: fixed_t
    readonly flags: INT16
    readonly special: INT16
    tag: INT16
    taglist: taglist_t
    args: lineargs_t
    stringargs: linestringargs_t
    readonly sidenum: UINT16[]
    readonly frontside: side_t
    readonly backside: side_t
    alpha: fixed_t
    executeordelay: INT16
    readonly slopetype: "horizontal" | "vertical" | "positive" | "negative"
    readonly frontsector: sector_t
    readonly backsector: sector_t
    polyobj: polyobject_t
    readonly text: string
    readonly callcount: INT16
}