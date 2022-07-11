declare type mapthing_args_t = INT16[]
declare type mapthing_stringargs_t = string[]

declare type mapthing_t =
{
    readonly valid: boolean
    x: INT16
    y: INT16
    angle: INT16
    pitch: INT16
    roll: INT16
    type: UINT16
    options: UINT16
    scale: fixed_t
    z: INT16
    extrainfo: UINT8
    tag: INT16
    readonly taglist: taglist_t
    //args: mapthing_args_t
    //stringargs: mapthing_stringargs_t
    mobj: mobj_t
}