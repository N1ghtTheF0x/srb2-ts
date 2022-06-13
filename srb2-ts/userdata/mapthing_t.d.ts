
declare interface mapthing_t
{
    readonly valid: boolean
    x: INT16
    y: INT16
    angle: INT16
    type: UINT16
    options: UINT16
    z: INT16
    extrainfo: UINT8
    mobj: mobj_t
}