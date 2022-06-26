declare type mobjinfo_t =
{
    doomednum: INT32
    spawnstate: States
    spawnhealth: INT32
    seestate: States
    seesound: Sounds
    reactiontime: INT32
    attacksound: Sounds
    painstate: States
    painchance: INT32
    painsound: Sounds
    meleestate: States
    misslestate: States
    deathstate: States
    xdeathstate: States
    deathsound: Sounds
    speed: fixed_t
    radius: fixed_t
    height: fixed_t
    dispoffset: INT32
    mass: INT32
    damage: INT32
    activesound: Sounds
    flags: INT32
    raisestate: States
    [key: string]: any
}