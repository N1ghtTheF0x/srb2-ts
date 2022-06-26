
declare type sector_t =
{
    readonly valid: boolean
    floorheight: fixed_t
    ceilingheight: fixed_t
    floorpic: string
    ceilingpic: string
    lightlevel: INT16
    special: INT16
    tag: INT16
    thinglist(this: sector_t): mobj_t[]
    readonly heightsec: sector_t
    readonly camsec: sector_t
    readonly lines: line_t[]
    ffloors(this: sector_t): ffloor_t[]
    readonly f_slope: pslope_t
    readonly c_slope: pslope_t
}