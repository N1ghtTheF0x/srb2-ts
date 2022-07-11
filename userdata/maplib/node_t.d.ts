declare type node_t = 
{
    readonly valid: boolean
    readonly x: fixed_t
    readonly y: fixed_t
    readonly dx: fixed_t
    readonly dy: fixed_t
    readonly bbox: bbox_t
    readonly children: nodechild_t
}