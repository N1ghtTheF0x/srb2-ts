
declare type ffloor_t =
{
    readonly valid: boolean
    topheight: fixed_t
    toppic: string
    toplightlevel: INT16
    bottomheight: fixed_t
    bottompic: string
    readonly t_slope: pslope_t
    readonly b_slope: pslope_t
    readonly sector: sector_t
    flags: FieldOfViews
    readonly master: line_t
    readonly target: sector_t
    readonly next: ffloor_t
    readonly prev: ffloor_t
    alpha: INT32
}