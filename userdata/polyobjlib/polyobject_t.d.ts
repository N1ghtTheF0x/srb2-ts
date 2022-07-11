declare type polyobject_t =
{
    readonly valid: boolean
    readonly id: INT32
    parent: INT32
    readonly vertices: vertex_t[]
    readonly lines: line_t[]
    readonly sector: sector_t
    readonly angle: angle_t
    readonly damage: INT32
    readonly thrust: fixed_t
    flags: INT32
    translucency: INT32
    readonly triggertag: INT32
    pointInside(x: fixed_t,y: fixed_t): boolean
    mobjTouching(mo: mobj_t): boolean
    mobjInside(mo: mobj_t): boolean
    moveXY(x: fixed_t,y: fixed_t,checkmobjs?: boolean): boolean
    rotate(delta: angle_t,turnthings?: UINT8,checkmobjs?: boolean): boolean
}