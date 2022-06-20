declare function abs(a: int): int
declare function min(a: int, b: int): int
declare function max(a: int, b: int): int

declare function sin(a: angle_t): fixed_t
declare function cos(a: angle_t): fixed_t
declare function tan(a: angle_t): fixed_t
declare function acos(a: angle_t): angle_t
declare function FixedAngle(a: fixed_t): angle_t
declare function AngleFixed(a: angle_t): fixed_t
declare function InvAngle(a: angle_t): angle_t

declare function FixedMul(a: fixed_t, b: fixed_t): fixed_t
declare function FixedInt(a: fixed_t): int
declare function FixedDiv(a: fixed_t, b: fixed_t): fixed_t
declare function FixedRem(a: fixed_t, b: fixed_t): fixed_t
declare function FixedSqrt(a: fixed_t): fixed_t
declare function FixedHypot(a: fixed_t, b: fixed_t): fixed_t
declare function FixedFloor(a: fixed_t): fixed_t
declare function FixedTrunc(a: fixed_t): fixed_t
declare function FixedCeil(a: fixed_t): fixed_t
declare function FixedRound(a: fixed_t): fixed_t

declare function GetSecSpecial(special: int, section: int): int
declare function All7Emeralds(flags: int): boolean
declare function ColorOpposite(color: int): LuaMultiReturn<[int,int]>

declare type colormap = unknown

declare type AlignmentTypes = "left" | "right" | "center" | "fixed" | "fixed-center" | "fixed-right" | "small" | "small-center" | "small-right" | "small-fixed" | "small-fixed-center" | "small-fixed-right" | "small-thin" | "small-thin-center" | "small-thin-right" | "small-thin-fixed" | "small-thin-fixed-center" | "small-thin-fixed-right" | "thin" | "thin-center" | "thin-right" | "thin-fixed" | "thin-fixed-center" | "thin-fixed-right"
declare type WidthTypes = "normal" | "small" | "thin"

/** @noSelf */
declare interface drawer_i
{
    patchExists(name: string): boolean
    cachePatch(name: string): patch_t
    getSpritePatch(sprite: string | int, frame?: int, rotation?: int, rollangle?: angle_t): [patch_t, boolean]
    getSprite2Patch(skin: string | int, sprite2: string | int, frame?: int, rotation?: int, rollangle?: angle_t): LuaMultiReturn<[patch_t, boolean]>
        getSprite2Patch(skin: string | int, sprite2: string | int, Super?: boolean, frame?: int, rotation?: int, rollangle?: angle_t): LuaMultiReturn<[patch_t, boolean]>
    getColormap(skin?: string | int,color?: int): colormap
    getStringColormap(textcolor: int): colormap

    draw(x: int, y: int, patch: patch_t, flags?: int, c?: colormap): nil
    drawScaled(x: fixed_t, y: fixed_t, scale: fixed_t, patch: patch_t, flags?: int, c?: colormap): nil
    drawStretched(x: fixed_t, y: fixed_t, hscale: fixed_t, vscale: fixed_t, patch: patch_t, flags?: int, c?: colormap): nil
    drawCropped(x: fixed_t,y: fixed_t,hscale: fixed_t,vscale: fixed_t,patch: patch_t,flags: int,c: colormap,sx: fixed_t,sy: fixed_t,w: fixed_t,h: fixed_t): nil
    drawNum(x: int, y: int, num: int, flags?: int): nil
    drawPaddedNum(x: int, y: int, num: int, digits?: int, flags?: int): nil
    drawFill(x?: int, y?: int, width?: int, height?: int, color?: int): nil
    drawString(x: int, y: int, text: string, flags?: int, align?: AlignmentTypes): nil
    drawNameTag(x: int, y: int, text: string, flags?: int, basecolor?: int, outlinecolor?: int): nil
    drawScaledNameTag(x: fixed_t, y: fixed_t, text: string, flags?: int, scale?: int, basecolor?: int, outlinecolor?: int): nil
    drawLevelTitle(x: int,y: int,text: string,flags?: int): nil
    fadeScreen(color: int,strength: int): nil

    stringWidth(text: string, flags?: int, widthtype?: WidthTypes): int
    nameTagWidth(text: string): int
    levelTitleHeight(text: string): int
    levelTitleWidth(text: string): int

    RandomFixed(): fixed_t
    RandomByte(): int
    RandomKey(a: int): int
    RandomRange(a: int, b: int): int
    SignedRandom(): int
    RandomChance(p: fixed_t): boolean

    width(): int
    height(): int
    dupx(): LuaMultiReturn<[int, int]>
    dupy(): LuaMultiReturn<[int, int]>
    renderer(): "software" | "opengl" | "none"
    localTransFlag(): int
    userTransFlag(): int
}

 /** @noSelf */
declare namespace hud
{
    export function enable(huditem: HudItem): nil
    export function disable(huditem: HudItem): nil
    export function enabled(huditem: HudItem): boolean
    export function add(func: (v: drawer_i,...args: any[]) => void,hook?: string): nil
    export function add(func: (v: drawer_i,stplyr?: player_t,cam?: camera_t) => void,hook: "game"): nil
    export function add(func: (v: drawer_i) => void,hook: "scores"): nil
    export function add(func: (v: drawer_i) => void,hook: "title"): nil
    export function add(func: (v: drawer_i,stplyr?: player_t,ticker?: int,endtime?: int) => void,hook: "titlecard"): nil
    export function add(func: (v: drawer_i) => void,hook: "intermission"): nil
}

declare interface DefineConsoleVariable
{
    name: string
    defaultvalue: string
    flags: int
    PossibleValue: table_t
    func: (cVar: consvar_t) => void
}

declare function COM_AddCommand(name: string,fn: (player: player_t,arg?: string,...args: string[]) => void,flags?: CommandFlags): nil
declare function COM_BufAddText(player: player_t, text: string): nil
declare function COM_BufInsertText(player: player_t, text: string): nil
declare function CV_RegisterVar(t: table_t<DefineConsoleVariable>): consvar_t
declare function CV_FindVar(cVar: string): consvar_t
declare function CV_Set(cVar: consvar_t, value: string | int): nil
declare function CV_StealthSet(cVar: consvar_t, value: string | int): nil
declare function CV_AddValue(cVar: consvar_t, increment: int): nil
declare function CONS_Printf(player: player_t, text: string): nil

declare function searchBlockmap(searchtype: "objects", fn: (refmobj: mobj_t,foundmobj: mobj_t) => void, refmobj: mobj_t, x1?: fixed_t, x2?: fixed_t, y1?: fixed_t, y2?: fixed_t): boolean
declare function searchBlockmap(searchtype: "lines", fn: (refmobj: mobj_t,foundline: line_t) => void, refmobj: mobj_t, x1?: fixed_t, x2?: fixed_t, y1?: fixed_t, y2?: fixed_t): boolean

/** @noSelf */
declare namespace input
{
    export function gameControlDown(gc: int): boolean
    export function gameControl2Down(gc: int): boolean
    export function gameControlToKeyNum(gc: int): LuaMultiReturn<[int,int]>
    export function gameControl2ToKeyNum(gc: int): LuaMultiReturn<[int,int]>
    export function joyAxis(axissel: int): int
    export function joy2Axis(axissel: int): int
    export function keyNumToName(keynum: int): string
    export function keyNumPrintable(keynum: string): boolean
    export function shiftKeyNum(keynum: string): int
    export function getMouseGrab(): boolean
    export function setMouseGrab(grab: boolean): nil
    export function getCursorPosition(): LuaMultiReturn<[int,int]>
}

declare function print(output: string, ...output2: string[]): nil
declare function chatprint(output: string, sound?: boolean): nil
declare function chatprintf(player: player_t, output: string, sound?: boolean): nil
declare function freeslot(resource: string, ...resource2: string[]): int[]

declare function addHook(hook: string, fn: (...args: any[]) => any, extra?: int | string): nil

declare function addHook(hook: "IntermissionThinker",fn: (faildedstage: boolean) => void): nil
declare function addHook(hook: "KeyDown",fn: (keyevent: keyevent_t) => boolean): nil
declare function addHook(hook: "KeyUp",fn: (keyevent: keyevent_t) => boolean): nil
declare function addHook(hook: "LinedefExecute",fn: (line: line_t, mobj: mobj_t, sector: sector_t) => void): nil
declare function addHook(hook: "MapChange",fn: (mapnum: int) => void): nil
declare function addHook(hook: "MapLoad",fn: (mapnum: int) => void): nil
declare function addHook(hook: "ThinkFrame",fn: () => void): nil
declare function addHook(hook: "PreThinkFrame",fn: () => void): nil
declare function addHook(hook: "PostThinkFrame",fn: () => void): nil
declare function addHook(hook: "GameQuit",fn: () => void): nil

/** @noSelf */
declare interface BotMovement
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
declare function addHook(hook: "BotTiccmd",fn: (bot: player_t, cmd: ticcmd_t) => boolean): nil
declare function addHook(hook: "BotRespawn",fn: (player: mobj_t, bot: mobj_t) => boolean): nil

declare function addHook(hook: "HurtMsg",fn: (player: player_t, inflictor: mobj_t, source: mobj_t) => boolean, objecttype?: int): nil
declare function addHook(hook: "NetVars",fn: (network: (variable: any) => any) => void): nil
declare function addHook(hook: "PlayerJoin",fn: (playernum: int) => void): nil
declare function addHook(hook: "PlayerMsg",fn: (source: player_t, type: int, target: player_t, msg: string) => boolean): nil
declare function addHook(hook: "PlayerQuit",fn: (player: player_t, reason: KickReasons) => void): nil
declare function addHook(hook: "TeamSwitch",fn: (player: player_t, team: int, fromspectators: boolean, autobalance: boolean, scramble: boolean) => boolean): nil
declare function addHook(hook: "ViewpointSwitch",fn: (player: player_t, nextviewedplayer: player_t, forced: boolean) => boolean): nil
declare function addHook(hook: "SeenPlayer",fn: (player: player_t, seenplayer: player_t) => boolean): nil

declare function addHook(hook: "AbilitySpecial",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "JumpSpecial",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "JumpSpinSpecial",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "SpinSpecial",fn: (player: player_t) => boolean): nil

declare function addHook(hook: "BossDeath",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "BossThinker",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "FollowMobj",fn: (player: player_t, followmobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MapThingSpawn",fn: (mobj: mobj_t, mapthing: mapthing_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjCollide",fn: (thing: mobj_t, tmthing: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjLineCollide",fn: (mobj: mobj_t, line: line_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjDamage",fn: (target: mobj_t, inflictor: mobj_t, source: mobj_t, damage: int, damagetype: int) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjDeath",fn: (target: mobj_t, inflictor: mobj_t, source: mobj_t, damagetype: int) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjFuse",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjMoveBlocked",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjMoveCollide",fn: (tmthing: mobj_t, thing: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjRemoved",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjSpawn",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "MobjThinker",fn: (mobj: mobj_t) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "PlayerThink",fn: (player: player_t) => void): nil
declare function addHook(hook: "PlayerCanDamage",fn: (player: player_t,mobj: mobj_t) => void): nil
declare function addHook(hook: "PlayerSpawn",fn: (player: player_t) => void): nil
declare function addHook(hook: "PlayerCmd",fn: (player: player_t, cmd: ticcmd_t) => void): nil
declare function addHook(hook: "PlayerHeight",fn: (player: player_t) => fixed_t): nil
declare function addHook(hook: "PlayerCanEnterSpinGaps",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "ShouldDamage",fn: (target: mobj_t, inflictor: mobj_t, source: mobj_t, damage: int, damagetype: int) => boolean, objecttype?: MobjTypes): nil
declare function addHook(hook: "ShieldSpawn",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "ShieldSpecial",fn: (player: player_t) => boolean): nil
declare function addHook(hook: "TouchSpecial",fn: (special: mobj_t, toucher: mobj_t) => boolean, objecttype?: MobjTypes): nil

declare function addHook(hook: "MusicChange",fn: (oldname: string, newname: string, mflags: int, looping: boolean, position: int, prefadems: int, fadeinms: int) => string | boolean,): nil
declare function addHook(hook: "ShouldJingleContinue",fn: (player: player_t, musname: string) => void): nil

    //function super(actor: mobj_t, var1: int, var2: int): nil
declare function IsPlayerAdmin(player: player_t): boolean
declare function userdataType(v: any): string
declare function reserveLuabanks(): UINT32[]
declare function registerMetatable(metatable: table_t): nil
declare function getTimeMicros(): int

declare function M_MoveColorAfter(color: UINT16,targ: UINT16): nil
declare function M_MoveColorBefore(color: UINT16,targ: UINT16): nil
declare function M_GetColorAfter(color: UINT16): int
declare function M_GetColorBefore(color: UINT16): int

declare function M_MapNumber(arg: string): int

declare function G_BuildMapName(map?: int): string
declare function G_BuildMapTitle(map?: int): string
declare function G_DoReborn(playernum: int): nil
declare function G_EnoughPlayersFinished(): boolean
declare function G_SetCustomExitVars(nextmap?: int, skipstats?: int): nil
declare function G_ExitLevel(): nil
declare function G_IsSpecialStage(map?: int): boolean

/** @noSelf */
declare interface DefineGameType
{
    name: string
    identifier: string
    typeoflevel: number
    rules: number
    intermissiontype: number
    headercolor: number
    description: string
}

declare function G_AddGametype(t: table_t<DefineGameType>): nil
declare function G_AddPlayer(skin: string,color: string,name: string,bot: BotType): player_t
declare function G_RemovePlayer(playernum: UINT8): boolean
declare function G_GametypeUsesLives(): boolean
declare function G_GametypeUsesCoopLives(): boolean
declare function G_GametypeUsesCoopStarposts(): boolean
declare function G_GametypeHasTeams(): boolean
declare function G_GametypeHasSpectators(): boolean
declare function G_RingSlingerGametype(): boolean
declare function G_PlatformGametype(): boolean
declare function G_TagGametype(): boolean
declare function G_TicsToHours(tics: int): int
declare function G_TicsToMinutes(tics: int, full?: boolean): int
declare function G_TicsToSeconds(tics: int): int
declare function G_TicsToCentiseconds(tics: int): int
declare function G_TicsToMilliseconds(tics: int): int

declare function P_RandomFixed(): fixed_t
declare function P_RandomByte(): int
declare function P_RandomKey(a: int): int
declare function P_RandomRange(a: int, b: int): int
declare function P_SignedRandom(): int
declare function P_RandomChance(p: fixed_t): boolean

declare function P_CheckMeleeRange(actor: mobj_t): boolean
declare function P_JetbCheckMeleeRange(actor: mobj_t): boolean
declare function P_FaceStabCheckMeleeRange(actor: mobj_t): boolean
declare function P_SkimCheckMeleeRange(actor: mobj_t): boolean
declare function P_CheckMissileRange(actor: mobj_t): boolean
declare function P_NewChaseDir(actor: mobj_t): nil
declare function P_LookForPlayers(actor: mobj_t, dist?: fixed_t, allaround?: boolean, tracer?: boolean): boolean

declare function P_RemoveShield(player: player_t): nil
declare function P_DamageMobj(target: mobj_t, inflictor?: mobj_t, source?: mobj_t, damage?: int, damagetype?: int): boolean
declare function P_KillMobj(target: mobj_t, inflictor?: mobj_t, source?: mobj_t, damagetype?: int): nil
declare function P_PlayerRingBurst(player: player_t, numrings?: int): nil
declare function P_PlayerWeaponPanelBurst(player: player_t): nil
declare function P_PlayerWeaponAmmoBurst(player: player_t): nil
declare function P_PlayerWeaponPanelOrAmmoBurst(player: player_t): nil
declare function P_PlayerEmeraldBurst(player: player_t, toss?: boolean): nil
declare function P_PlayerFlagBurst(player: player_t, toss?: boolean): nil
declare function P_PlayRinglossSound(source: mobj_t, player?: player_t): nil
declare function P_PlayDeathSound(source: mobj_t, player?: player_t): nil
declare function P_PlayVictorySound(source: mobj_t, player?: player_t): nil
declare function P_PlayLivesJingle(player: player_t): nil
declare function P_CanPickupItem(player: player_t, weapon?: boolean): boolean
declare function P_DoNightsScore(player: player_t): nil
declare function P_DoMatchSuper(player: player_t): nil

declare function P_CheckPosition(mobj: mobj_t, x: fixed_t, y: fixed_t): LuaMultiReturn<[boolean, mobj_t]>
declare function P_TryMove(mobj: mobj_t, x: fixed_t, y: fixed_t, allowdropoff?: boolean): LuaMultiReturn<[boolean, mobj_t]>
declare function P_Move(actor: mobj_t, speed: int): LuaMultiReturn<[boolean, mobj_t]>
declare function P_TeleportMove(mobj: mobj_t, x: fixed_t, y: fixed_t, z: fixed_t): LuaMultiReturn<[boolean, mobj_t]>
declare function P_SlideMove(mo: mobj_t): nil
declare function P_BounceMove(mo: mobj_t): nil
declare function P_CheckSight(source: mobj_t, target: mobj_t): boolean
declare function P_CheckHoopPosition(hoop: mobj_t, x: fixed_t, y: fixed_t, z: fixed_t, radius: fixed_t): nil
declare function P_RadiusAttack(inflictor: mobj_t, source: mobj_t, radius: fixed_t, damagetype?: int, sightcheck?: boolean): nil
declare function P_FloorzAtPos(x: fixed_t, y: fixed_t, z: fixed_t, height: fixed_t): fixed_t
declare function P_DoSpring(spring: mobj_t, object: mobj_t): nil
declare function P_TryCameraMove(camera: camera_t,x: fixed_t,y: fixed_t): nil
declare function P_TeleportCameraMove(camera: camera_t,x: fixed_t,y: fixed_t,z: fixed_t): nil

declare function P_AproxDistance(dx: fixed_t, dy: fixed_t): fixed_t
declare function P_ClosestPointOnLine(x: fixed_t, y: fixed_t, line: line_t): LuaMultiReturn<[fixed_t, fixed_t]>
declare function P_PointOnLineSide(x: fixed_t, y: fixed_t, line: line_t): int

declare function P_SpawnMobj(x: fixed_t, y: fixed_t, z: fixed_t, type: MobjTypes): mobj_t
declare function P_SpawnMobjFromMobj(origin: mobj_t, x: fixed_t, y: fixed_t, z: fixed_t, type: MobjTypes): mobj_t
declare function P_RemoveMobj(mobj: mobj_t): nil
declare function P_IsValidSprite2(mobj: mobj_t, sprite2: int): boolean
declare function P_SpawnLockOn(player: player_t, target: mobj_t, state: state_t): nil
declare function P_SpawnMissile(source: mobj_t, dest: mobj_t, type: MobjTypes): mobj_t
declare function P_SpawnXYZMissile(source: mobj_t, dest: mobj_t, type: MobjTypes, x: fixed_t, y: fixed_t, z: fixed_t): mobj_t
declare function P_SpawnPointMissile(source: mobj_t, dest_x: fixed_t, dest_y: fixed_t, dest_z: fixed_t, type: MobjTypes, x: fixed_t, y: fixed_t, z: fixed_t): mobj_t
declare function P_SpawnAlteredDirectionMissile(source: mobj_t, type: MobjTypes, x: fixed_t, y: fixed_t, z: fixed_t, angle_shift: int): mobj_t
declare function P_ColorTeamMissile(missile: mobj_t, player: player_t): nil
declare function P_SPMAngle(source: mobj_t, type: MobjTypes, angle: angle_t, allowaim?: int, flags2?: ObjectFlags): mobj_t
declare function P_SpawnPlayerMissile(source: mobj_t, type: MobjTypes, flags2?: ObjectFlags): mobj_t
declare function P_MobjFlip(mobj: mobj_t): int
declare function P_GetMobjGravity(mobj: mobj_t): fixed_t
declare function P_WeaponOrPanel(type: int): boolean
declare function P_FlashPal(player: player_t, type: int, duration: int): nil
declare function P_GetClosestAxis(mobj: mobj_t): mobj_t
declare function P_SpawnParaloop(x: fixed_t, y: fixed_t, z: fixed_t, radius: fixed_t, number: int, type: int, rotangle: angle_t, state?: int, spawncenter?: boolean): nil
declare function P_BossTargetPlayer(actor: mobj_t, closest?: boolean): boolean
declare function P_SupermanLook4Players(actor: mobj_t): boolean
declare function P_SetScale(mobj: mobj_t, scale: fixed_t): nil
declare function P_InsideANonSolidFFloor(mobj: mobj_t, rover: ffloor_t): boolean
declare function P_CheckDeathPitCollide(mobj: mobj_t): boolean
declare function P_CheckSolidLava(rover: ffloor_t): boolean
declare function P_CanRunOnWater(player: player_t, rover: ffloor_t): boolean
declare function P_MaceRotate(center: mobj_t, baserot: int, baseprevrot: int): nil
declare function P_CreateFloorSpriteSlope(mobj: mobj_t): nil
declare function P_RemoveFloorSpriteSlope(mobj: mobj_t): nil

declare function P_GetZAt(slope: pslope_t, x: fixed_t, y: fixed_t): fixed_t
declare function P_ButteredSlope(mobj: mobj_t): nil

declare function P_Thrust(mobj: mobj_t, angle: angle_t, move: fixed_t): nil
declare function P_SetMobjStateNF(mobj: mobj_t, statenum: int): boolean
declare function P_DoSuperTransformation(player: player_t, giverings?: boolean): nil
declare function P_ExplodeMissile(missile: mobj_t): nil
declare function P_PlayerTouchingSectorSpecial(player: player_t, section: int, specialnum: int): sector_t
declare function P_FindLowestFloorSurrounding(sector: sector_t): fixed_t
declare function P_FindHighestFloorSurrounding(sector: sector_t): fixed_t
declare function P_FindLowestCeilingSurrounding(sector: sector_t): fixed_t
declare function P_FindHighestCeilingSurrounding(sector: sector_t): fixed_t
declare function P_FindNextHighestFloor(sector: sector_t, currentheight?: fixed_t): fixed_t
declare function P_FindNextLowestFloor(sector: sector_t, currentheight?: fixed_t): fixed_t
declare function P_FindSpecialLineFromTag(special: int, tag: int, start?: int): int
declare function P_SwitchWeather(weathernum: int, player?: player_t): nil
declare function P_LinedefExecute(tag: int, actor?: mobj_t, caller?: sector_t): nil
declare function P_SpawnLightningFlash(sector: sector_t): nil
declare function P_FadeLight(tag: int, destvalue: int, speed: int, ticbased?: boolean, force?: boolean): nil
declare function P_ThingOnSpecial3DFloor(mobj: mobj_t): sector_t
declare function P_IsFlagAtBase(type: int): boolean
declare function P_SetupLevelSky(skynum: int, player?: player_t): nil
declare function P_SetSkyboxMobj(mobj: mobj_t, centerpoint?: boolean | int): nil
declare function P_SetSkyboxMobj(mobj: mobj_t, user: player_t): nil
declare function P_SetSkyboxMobj(mobj: mobj_t,centerpoint: boolean | int | undefined,user: player_t): nil
declare function P_StartQuake(intensity: fixed_t, time: int, epicenter?: table_t<{x: int, y: int, z: int}>, radius?: fixed_t): nil
declare function EV_CrumbleChain(sector: sector_t | undefined, rover: ffloor_t): nil
declare function EV_StartCrumble(sector: sector_t, rover: ffloor_t, floating?: boolean, player?: player_t, origalpha?: fixed_t, crumblereturn?: boolean): boolean

declare function P_GetPlayerHeight(player: player_t): fixed_t
declare function P_GetPlayerSpinHeight(player: player_t): fixed_t
declare function P_GetPlayerControlDirection(player: player_t): 0 | 1 | 2
declare function P_AddPlayerScore(player: player_t, amount: int): nil
declare function P_StealPlayerScore(player: player_t, amount: int): nil
declare function P_GetJumpFlags(player: player_t): int
declare function P_PlayerInPain(player: player_t): boolean
declare function P_DoPlayerPain(player: player_t, source?: mobj_t, inflictor?: mobj_t): nil
declare function P_ResetPlayer(player: player_t): nil
declare function P_PlayerCanDamage(player: player_t, mobj: mobj_t): boolean
declare function P_IsObjectInGoop(mobj: mobj_t): boolean
declare function P_IsObjectOnGround(mobj: mobj_t): boolean
declare function P_InSpaceSector(mobj: mobj_t): boolean
declare function P_InQuicksand(mobj: mobj_t): boolean
declare function P_SetObjectMomZ(mobj: mobj_t, momz: fixed_t, relative?: boolean): nil
declare function P_RestoreMusic(player: player_t): nil
declare function P_SpawnShieldOrb(player: player_t): nil
declare function P_SpawnGhostMobj(mobj: mobj_t): mobj_t
declare function P_GivePlayerRings(player: player_t, amount: int): nil
declare function P_GivePlayerLives(player: player_t, amount: int): nil
declare function P_GiveCoopLives(player: player_t, amount: int, playsound?: boolean): nil
declare function P_ResetScore(player: player_t): nil
declare function P_DoJumpShield(player: player_t): nil
declare function P_DoBubbleBounce(player: player_t): nil
declare function P_BlackOw(player: player_t): nil
declare function P_ElementalFire(player: player_t, cropcircle?: boolean): nil
declare function P_DoPlayerFinish(player: player_t): nil
declare function P_DoPlayerExit(player: player_t): nil
declare function P_InstaThrust(mobj: mobj_t, angle: angle_t, move: fixed_t): nil
declare function P_ReturnThrustX(mobj: mobj_t, angle: angle_t, move: fixed_t): fixed_t
declare function P_ReturnThrustY(mobj: mobj_t, angle: angle_t, move: fixed_t): fixed_t
declare function P_LookForEnemies(player: player_t, nonenemies?: boolean, bullet?: boolean): mobj_t
declare function P_NukeEnemies(inflictor: mobj_t, source: mobj_t, radius: fixed_t): nil
declare function P_HomingAttack(source: mobj_t, target: mobj_t): boolean
declare function P_SuperReady(player: player_t): boolean
declare function P_DoJump(player: player_t, soundandstate?: boolean): nil
declare function P_SpawnThokMobj(player: player_t): nil
declare function P_SpawnSpinMobj(player: player_t, type: int): nil
declare function P_Telekinesis(player: player_t, thrust: fixed_t, range: fixed_t): nil
declare function P_SwitchShield(player: player_t, shield: int): nil
declare function P_PlayJingle(player: player_t, jingletype: int): nil
declare function P_PlayJingleMusic(player: player_t, musname: string, musflags: int, looping: boolean, jingletype?: int): nil
declare function P_SpawnSkidDust(player: player_t, radius: fixed_t, sound?: int): nil
declare function P_Earthquake(inflictor: mobj_t, source: mobj_t, radius: fixed_t): nil

declare function R_TextureNumForName(name: string): int
declare function R_CheckTextureNumForName(name: string): int

declare function R_GetColorByName(name: string): int
declare function R_GetSuperColorByName(name: string): int
declare function R_GetNameByColor(color: int): string

declare function R_PointToAngle(x: fixed_t, y: fixed_t): angle_t
declare function R_PointToAngle2(x: fixed_t, y: fixed_t, dest_x: fixed_t, dest_y: fixed_t): angle_t
declare function R_PointToDist(x: fixed_t, y: fixed_t): fixed_t
declare function R_PointToDist2(x: fixed_t, y: fixed_t, dest_x: fixed_t, dest_y: fixed_t): fixed_t
declare function R_PointInSubsector(x: fixed_t, y: fixed_t): subsector_t
declare function R_PointInSubsectorOrNil(x: fixed_t, y: fixed_t): subsector_t | nil

declare function R_Char2Frame(char: string): int
declare function R_Frame2Char(frame: int): LuaMultiReturn<[string, int]>
declare function R_SetPlayerSkin(player: player_t, skin: int | string): nil
declare function R_SkinUsable(player: player_t, skin: int | string): boolean

declare function S_StartSound(origin: mobj_t, soundnum: int, player?: player_t): nil
declare function S_StartSoundAtVolume(origin: mobj_t, soundnum: int, volume: UINT8, player?: player_t): nil
declare function S_StopSound(mobj: mobj_t): nil
declare function S_StopSoundByID(mobj: mobj_t, soundnum: int): nil
declare function S_ChangeMusic(musicname: string, looping?: boolean, player?: player_t, mflags?: int, position?: int, prefadems?: int, fadeinms?: int): nil
declare function S_SpeedMusic(musicspeed: fixed_t, player?: player_t): nil
declare function S_StopMusic(player?: player_t): nil
declare function S_SetInternalMusicVolume(volume: int, player?: player_t): boolean
declare function S_StopFadingMusic(player?: player_t): boolean
declare function S_FadeMusic(target_volume: int, ms: int, player?: player_t): boolean
declare function S_FadeOutStopMusic(ms: int, player?: player_t): boolean
declare function S_OriginPlaying(origin: mobj_t): boolean
declare function S_IdPlaying(soundnum: int): boolean
declare function S_SoundPlaying(origin: mobj_t, soundnum: int): boolean
declare function S_StartMusicCaption(caption: string, lifespan: tic_t, player?: player_t): nil
declare function S_GetMusicLength(): int
declare function S_GetMusicPosition(): int
declare function S_SetMusicPosition(position: int): boolean
declare function S_MusicType(): undefined
declare function S_MusicPlaying(): undefined
declare function S_MusicPaused(): undefined
declare function S_MusicName(): string
declare function S_MusicExists(name: string): boolean
declare function S_SetMusicLoopPoint(): undefined
declare function S_GetMusicLoopPoint(): undefined
declare function S_PauseMusic(): undefined
declare function S_ResumeMusic(): undefined

declare function assert(v: any, errormsg?: string): any | nil
declare function collectgarbage(opt: "step"): boolean
declare function collectgarbage(opt: "collect" | "stop" | "restart" | "count" | "setpause" | "setstepmul", arg: int): int
declare function error(message: string, level?: int): nil
declare function dofile<ReturnValues>(file: string): ReturnValues
declare function gcinfo(): int
declare function getfenv(f?: (...args: any[]) => any | int): any // (environment)
declare function getmetatable(obj: object): any //  (metatable)
declare function ipairs(t: table_t): [int, any][]
declare function next(t: table_t, index: int): LuaMultiReturn<[int, any]>
declare function pairs(t: table_t): [any, any][]
declare function pcall<Args = any>(fn: (...args: Args[]) => any, ...arg: Args[]): LuaMultiReturn<[boolean, (unknown | string)]>
declare function rawequal(v1: any, v2: any): boolean
declare function rawget(t: table_t, index: any): any
declare function rawset<Table = table_t,Index = any,Value = any>(t: Table, index: Index, value: Value): Table
declare function select(...index: any): unknown[] | int
declare function setfenv(f: (...args: any[]) => any | int, table: table_t): (...args: any[]) => any
declare function setmetatable<Table = table_t>(t: Table, metatable: table_t): Table
declare function tonumber(e: any, base?: int): int | nil
declare function tostring(e: any): string
declare function type(v: any): "no value" | "nil" | "boolean" | "userdata" | "number" | "string" | "table" | "function" | "thread" | "proto" | "upval"
declare function unpack<Table = table_t>(list: Table, start?: int, end?: int): unknown[]
declare function xpcall(call: Function,errortrap: (status: boolean) => void): LuaMultiReturn<[boolean, (unknown | string)]>

declare type thread = unknown

/** @noSelf */
declare namespace coroutine
{
    export function create(fn: (...args: any[]) => any): thread
    export function resume(co: thread, ...val: any[]): LuaMultiReturn<[boolean, any]>
    export function running(): thread | nil
    export function status(co: thread): string
    export function wrap(fn: (...args: any[]) => any): (...args: any[]) => any
    export function yield(...args: any[]): any
}

/** @noSelf */
declare namespace string
{
    export function byte(s: string, start: int, end: int): int
    export function char(charid?: int,...args: any[]): string
    export function find(s: string, pattern: string, start: int, plain?: boolean): LuaMultiReturn<[int, int, ...string[]]>
    export function format(formatstr: string,...args: any[]): string
    export function gmatch(s: string, pattern: string): Function
    export function gsub(s: string, pattern: string, replace: int | string | table_t | Function, n: int): string
    export function len(s: string): int
    export function lower(s: string): string
    export function match(s: string, pattern: string, n: int): string
    export function rep(s: string, n: int): string
    export function reverse(s: string): string
    export function sub(s: string, start: int, end?: int): string
    export function upper(s: string): string
}

/** @noSelf */
declare namespace table
{
    export function concat<Content>(t: table_t<Content> , sep: string, start: int, end: int): string
    export function insert<Content>(t: table_t<Content> , key: int, element: any): nil
    export function maxn<Content>(t: table_t<Content> ): int
    export function remove<Content>(t: table_t<Content> , key: int): any
    export function sort<Content>(t: table_t<Content> ,comp: (element_a: any, element_b: any) => void): nil
}

/** @noSelf */
declare namespace io
{
    export function open(filename: string,mode: string,callback: (file: file,filename: string) => void): nil
    export function openlocal(filename: string,mode: string): file | nil | string
    export function close(file: file): boolean | [nil, string, int] | [nil, string]
    export function tmpfile(): file
    export function type(obj: any): string | nil
}

/** @noSelf */
declare namespace ease
{
    export function linear(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function linear(x: fixed_t,end: fixed_t): fixed_t
    export function insine(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function insine(x: fixed_t,end: fixed_t): fixed_t
    export function outsine(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function outsine(x: fixed_t,end: fixed_t): fixed_t
    export function inoutsine(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function inoutsine(x: fixed_t,end: fixed_t): fixed_t

    export function inquad(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function inquad(x: fixed_t,end: fixed_t): fixed_t
    export function outquad(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function outquad(x: fixed_t,end: fixed_t): fixed_t
    export function inoutquad(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function inoutquad(x: fixed_t,end: fixed_t): fixed_t

    export function incubic(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function incubic(x: fixed_t,end: fixed_t): fixed_t
    export function outcubic(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function outcubic(x: fixed_t,end: fixed_t): fixed_t
    export function inoutcubic(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function inoutcubic(x: fixed_t,end: fixed_t): fixed_t

    export function inquart(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function inquart(x: fixed_t,end: fixed_t): fixed_t
    export function outquart(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function outquart(x: fixed_t,end: fixed_t): fixed_t
    export function inoutquart(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function inoutquart(x: fixed_t,end: fixed_t): fixed_t

    export function inquint(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function inquint(x: fixed_t,end: fixed_t): fixed_t
    export function outquint(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function outquint(x: fixed_t,end: fixed_t): fixed_t
    export function inoutquint(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function inoutquint(x: fixed_t,end: fixed_t): fixed_t

    export function inexpo(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function inexpo(x: fixed_t,end: fixed_t): fixed_t
    export function outexpo(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function outexpo(x: fixed_t,end: fixed_t): fixed_t
    export function inoutexpo(x: fixed_t,start: fixed_t,end: fixed_t): fixed_t
    export function inoutexpo(x: fixed_t,end: fixed_t): fixed_t

    export function inback(x: fixed_t,start: CanBeNil<fixed_t>,end: CanBeNil<fixed_t>,param?: fixed_t): fixed_t
    export function inback(x: fixed_t,end: fixed_t): fixed_t
    export function outback(x: fixed_t,start: CanBeNil<fixed_t>,end: CanBeNil<fixed_t>,param?: fixed_t): fixed_t
    export function outback(x: fixed_t,end: fixed_t): fixed_t
    export function inoutback(x: fixed_t,start: CanBeNil<fixed_t>,end: CanBeNil<fixed_t>,param?: fixed_t): fixed_t
    export function inoutback(x: fixed_t,end: fixed_t): fixed_t
}