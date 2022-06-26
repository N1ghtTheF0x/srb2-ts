// mobj
declare function addHook(hook: "MobjSpawn",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjCollide",fn: (thing: mobj_t, tmthing: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjLineCollide",fn: (mobj: mobj_t, line: line_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjMoveCollide",fn: (tmthing: mobj_t, thing: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "TouchSpecial",fn: (special: mobj_t, toucher: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjFuse",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjThinker",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "BossThinker",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "ShouldDamage",fn: (target: mobj_t, inflictor: mobj_t, source: mobj_t, damage: int, damagetype: int) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjDamage",fn: (target: mobj_t, inflictor: mobj_t, source: mobj_t, damage: int, damagetype: int) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjDeath",fn: (target: mobj_t, inflictor: mobj_t, source: mobj_t, damagetype: int) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "BossDeath",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjRemoved",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "BotRespawn",fn: (player: mobj_t, bot: mobj_t) => boolean): nil
declare function addHook(hook: "MobjMoveBlocked",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MapThingSpawn",fn: (mobj: mobj_t, mapthing: mapthing_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "FollowMobj",fn: (player: player_t, followmobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
// hooks
declare function addHook(hook: "NetVars",fn: (network: (variable: any) => any) => void): nil
declare function addHook(hook: "MapChange",fn: (mapnum: int) => void): nil
declare function addHook(hook: "MapLoad",fn: (mapnum: int) => void): nil
declare function addHook(hook: "PlayerJoin",fn: (playernum: int) => void): nil
declare function addHook(hook: "PreThinkFrame",fn: () => void): nil
declare function addHook(hook: "ThinkFrame",fn: () => void): nil
declare function addHook(hook: "PostThinkFrame",fn: () => void): nil
declare function addHook(hook: "JumpSpecial",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "AbilitySpecial",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "SpinSpecial",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "JumpSpinSpecial",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "BotTiccmd",fn: (bot: player_t, cmd: ticcmd_t) => boolean): nil
declare function addHook(hook: "PlayerMsg",fn: (source: player_t, type: int, target: player_t, msg: string) => boolean): nil
declare function addHook(hook: "HurtMsg",fn: (player: player_t, inflictor: mobj_t, source: mobj_t) => boolean, objecttype?: int): nil
declare function addHook(hook: "PlayerSpawn",fn: (player: player_t) => void): nil
declare function addHook(hook: "ShieldSpawn",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "ShieldSpecial",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "PlayerCanDamage",fn: (player: player_t,mobj: mobj_t) => void): nil
declare function addHook(hook: "PlayerQuit",fn: (player: player_t, reason: KickReasons) => void): nil
declare function addHook(hook: "IntermissionThinker",fn: (faildedstage: boolean) => void): nil
declare function addHook(hook: "TeamSwitch",fn: (player: player_t, team: int, fromspectators: boolean, autobalance: boolean, scramble: boolean) => boolean): nil
declare function addHook(hook: "ViewpointSwitch",fn: (player: player_t, nextviewedplayer: player_t, forced: boolean) => boolean): nil
declare function addHook(hook: "SeenPlayer",fn: (player: player_t, seenplayer: player_t) => boolean): nil
declare function addHook(hook: "PlayerThink",fn: (player: player_t) => void): nil
declare function addHook(hook: "GameQuit",fn: () => void): nil
declare function addHook(hook: "PlayerCmd",fn: (player: player_t, cmd: ticcmd_t) => void): nil
declare function addHook(hook: "MusicChange",fn: (oldname: string, newname: string, mflags: int, looping: boolean, position: int, prefadems: int, fadeinms: int) => string | boolean,): nil
declare function addHook(hook: "PlayerHeight",fn: (player: player_t) => fixed_t): nil
declare function addHook(hook: "PlayerCanEnterSpinGaps",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "KeyDown",fn: (keyevent: keyevent_t) => boolean): nil
declare function addHook(hook: "KeyUp",fn: (keyevent: keyevent_t) => boolean): nil
// string
/** @noSelf */
declare type BotMovement =
{
    forward: boolean
    backward: boolean
    left: boolean
    right: boolean
    strafeleft: boolean
    straferight: boolean
    jump: boolean
    spin: boolean
}
declare type DefineBotMovement = BotMovement | [boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]

declare function addHook(hook: "BotAI",fn: (player: mobj_t, bot: mobj_t) => DefineBotMovement, skinname?: string): nil
declare function addHook(hook: "LinedefExecute",fn: (line: line_t, mobj: mobj_t, sector: sector_t) => void): nil
declare function addHook(hook: "ShouldJingleContinue",fn: (player: player_t, musname: string) => void): nil
// hud
/** @noSelf **/
declare namespace hud
{
    export function add(func: (v: drawer_i,stplyr?: player_t,cam?: camera_t) => void,hook: "game"): nil
    export function add(func: (v: drawer_i) => void,hook: "scores"): nil
    export function add(func: (v: drawer_i) => void,hook: "title"): nil
    export function add(func: (v: drawer_i,stplyr?: player_t,ticker?: int,endtime?: int) => void,hook: "titlecard"): nil
    export function add(func: (v: drawer_i) => void,hook: "intermission"): nil
}