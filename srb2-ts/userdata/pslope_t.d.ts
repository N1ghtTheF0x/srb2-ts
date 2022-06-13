
declare interface pslope_t
{
    readonly valid: boolean
    readonly o: vector3_t
    readonly d: vector2_t
    zdelta: fixed_t
    readonly normal: vector3_t
    zangle: angle_t
    xydirection: angle_t
    flags: UINT8
}