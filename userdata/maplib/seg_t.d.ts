declare type seg_t = 
{
    readonly valid: boolean
    readonly v1: vertex_t
    readonly v2: vertex_t
    readonly side: INT16
    readonly offset: fixed_t
    readonly angle: angle_t
    readonly sidedef: side_t
    readonly linedef: line_t
    readonly frontsector: sector_t
    readonly backsector: sector_t
    readonly polyseg: polyobject_t
}