
declare interface side_t
{
    readonly valid: boolean
    textureoffset: fixed_t
    rowoffset: fixed_t
    toptexture: INT32
    bottomtexture: INT32
    midtexture: INT32
    readonly sector: sector_t
    readonly special: INT16
    repeatcnt: INT16
    readonly text: string
}