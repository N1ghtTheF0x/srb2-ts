
declare interface state_t
{
    sprite: Sprites
    frame: UINT32
    tics: INT32
    action: (actor: mobj_t,var1: INT32,var2: INT32) => void
    var1: INT32
    var2: INT32
    nextstate: States
}