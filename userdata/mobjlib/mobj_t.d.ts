declare type mobj_t =
{
    readonly valid: boolean
    readonly x: fixed_t
    readonly y: fixed_t
    readonly z: fixed_t
    readonly snext: mobj_t
    sprev: never
    angle: angle_t
    pitch: angle_t
    roll: angle_t
    rollangle: angle_t
    sprite: Sprites
    frame: UINT32
    sprite2: UINT16
    anim_duration: UINT32
    spritexscale: fixed_t
    spriteyscale: fixed_t
    spritexoffset: fixed_t
    spriteyoffset: fixed_t
    floorspriteslope: pslope_t
    touching_sectorlist: never
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
    flags: ObjectFlags
    flags2: ObjectFlags
    eflags: UINT16
    renderflags: UINT32
    skin: string
    color: SkinColors
    blendmode: BlendModes
    readonly bnext: mobj_t
    bprev: never
    hnext: mobj_t
    hprev: mobj_t
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
    mobjnum: never
    scale: fixed_t
    destscale: fixed_t
    scalespeed: fixed_t
    extravalue1: INT32
    extravalue2: INT32
    cusval: INT32
    cvmem: INT32
    readonly standingslope: pslope_t
    colorized: boolean
    mirrored: boolean
    shadowscale: fixed_t
    [key: string]: any
}