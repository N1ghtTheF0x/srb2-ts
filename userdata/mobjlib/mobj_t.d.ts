declare type mobj_t =
{
    readonly valid: boolean
    readonly x: fixed_t
    readonly y: fixed_t
    readonly Z: fixed_t
    readonly snext: mobj_t
    sprev: unknown
    angle: angle_t
    rollangle: angle_t
    sprite: Sprites
    frame: UINT32
    sprite2: UINT16
    anim_duration: UINT32
    renderflags: UINT32
    blendmode: BlendModes
    spritexscale: fixed_t
    spriteyscale: fixed_t
    spritexoffset: fixed_t
    spriteyoffset: fixed_t
    floorspriteslope: pslope_t
    touching_sectorlist: unknown
    readonly subsector: subsector_t
    readonly floorz: fixed_t
    readonly ceilingz: fixed_t
    readonly floorrover: ffloor_t
    readonly ceilingrover: ffloor_t
    radius: fixed_t
    height: fixed_t
    momx: fixed_t
    momy: fixed_t
    momz: fixed_t
    pmomz: fixed_t
    tics: INT32
    state: States
    flags: UINT32
    flags2: UINT32
    eflags: UINT16
    skin: string
    color: SkinColors
    colorized: boolean
    readonly bnext: mobj_t
    bprev: unknown
    type: MobjTypes
    readonly info: mobjinfo_t
    health: INT32
    movedir: angle_t
    movecount: INT32
    target: mobj_t
    reactiontime: INT32
    threshold: INT32
    readonly player: player_t
    lastlook: INT32
    spawnpoint: mapthing_t
    tracer: mobj_t
    friction: fixed_t
    movefactor: fixed_t
    fuse: INT32
    watertop: fixed_t
    waterbottom: fixed_t
    mobjnum: unknown
    scale: fixed_t
    destscale: fixed_t
    scalespeed: fixed_t
    extravalue1: INT32
    extravalue2: INT32
    cusval: INT32
    cvmem: INT32
    readonly standingslope: pslope_t
    mirrored: boolean
    shadowscale: fixed_t
    [key: string]: any
}