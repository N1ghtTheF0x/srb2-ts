
declare type line_t =
{
    readonly valid: boolean
    readonly v1: vertex_t
    readonly v2: vertex_t
    readonly dx: fixed_t
    readonly dy: fixed_t
    readonly flags: INT16
    readonly special: INT16
    readonly sidenum: UINT16[]
    readonly frontside: side_t
    readonly backside: side_t
    readonly slopetype: string
    readonly frontsector: sector_t
    readonly backsector: sector_t
    readonly firsttag: INT16
    readonly nexttag: INT16
    readonly text: string
    readonly callcount: INT16
}