
declare type vector_t =
{
    readonly x: fixed_t
    readonly y: fixed_t
    readonly z: fixed_t
}

declare type vector2_t = Omit<vector_t,"z">
declare type vector3_t = vector_t