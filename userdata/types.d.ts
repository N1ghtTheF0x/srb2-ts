declare type SINT8 = number
declare type INT16 = number
declare type INT32 = number

declare type UINT8 = number
declare type UINT16 = number
declare type UINT32 = number

declare type fixed_t = INT32
declare type angle_t = UINT32
declare type tic_t = UINT32

declare type nil = null | undefined
declare type int = number
declare type table = LuaTable
declare type LuaFunction = (...args: any) => any
declare type TODO = unknown

declare type vector2_t = {
    x: number
    y: number
}
declare type vector3_t = vector2_t & {
    z: number
}