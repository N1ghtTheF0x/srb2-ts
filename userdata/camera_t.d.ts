declare type camera_t =
{
    readonly chase: boolean
    readonly aiming: angle_t
    readonly x: fixed_t
    readonly y: fixed_t
    readonly z: fixed_t
    readonly angle: angle_t
    readonly subsector: subsector_t
    readonly floorz: fixed_t
    readonly ceilingz: fixed_t
    readonly radius: fixed_t
    readonly height: fixed_t
    readonly momx: fixed_t
    readonly momy: fixed_t
    readonly momz: fixed_t
}
