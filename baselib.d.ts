declare function print(output: string, ...output2: string[]): nil
declare function chatprint(output: string, sound?: boolean): nil
declare function chatprintf(player: player_t, output: string, sound?: boolean): nil
declare function userdataType(v: any): string
declare function registerMetatable(metatable: table_t): nil
declare function userdataMetatable(udname: string): CanBeNil<table_t>
declare function IsPlayerAdmin(player: player_t): boolean
declare function reserveLuabanks(): UINT32[]
// m_menu
declare function M_MoveColorAfter(color: UINT16,targ: UINT16): nil
declare function M_MoveColorBefore(color: UINT16,targ: UINT16): nil
declare function M_GetColorAfter(color: UINT16): int
declare function M_GetColorBefore(color: UINT16): int
// m_misc
declare function M_MapNumber(arg: string): int
// m_random
declare function P_RandomFixed(): fixed_t
declare function P_RandomByte(): int
declare function P_RandomKey(a: int): int
declare function P_RandomRange(a: int, b: int): int
declare function P_SignedRandom(): int
declare function P_RandomChance(p: fixed_t): boolean
// p_maputil
declare function P_AproxDistance(dx: fixed_t, dy: fixed_t): fixed_t
declare function P_ClosestPointOnLine(x: fixed_t, y: fixed_t, line: line_t): LuaMultiReturn<[fixed_t, fixed_t]>
declare function P_PointOnLineSide(x: fixed_t, y: fixed_t, line: line_t): int
// p_enemy
declare function P_CheckMeleeRange(actor: mobj_t): boolean
declare function P_JetbCheckMeleeRange(actor: mobj_t): boolean
declare function P_FaceStabCheckMeleeRange(actor: mobj_t): boolean
declare function P_SkimCheckMeleeRange(actor: mobj_t): boolean
declare function P_CheckMissileRange(actor: mobj_t): boolean
declare function P_NewChaseDir(actor: mobj_t): nil
declare function P_LookForPlayers(actor: mobj_t, dist?: fixed_t, allaround?: boolean, tracer?: boolean): boolean
// p_mobj
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
declare function P_RailThinker(mobj: mobj_t): boolean
declare function P_XYMovement(mobj: mobj_t): nil
declare function P_RingXYMovement(mobj: mobj_t): nil
declare function P_SceneryXYMovement(mobj: mobj_t): nil
declare function P_ZMovement(mobj: mobj_t): boolean
declare function P_RingZMovement(mobj: mobj_t): nil
declare function P_SceneryZMovement(mobj: mobj_t): boolean
declare function P_PlayerZMovement(mobj: mobj_t): nil
// p_user
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
declare function P_PlayJingle(player: player_t, jingletype: int): nil
declare function P_PlayJingleMusic(player: player_t, musname: string, musflags: int, looping: boolean, jingletype?: int): nil
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
declare function P_SpawnSkidDust(player: player_t, radius: fixed_t, sound?: int): nil
declare function P_MovePlayer(player: player_t): nil
declare function P_DoPlayerFinish(player: player_t): nil
declare function P_DoPlayerExit(player: player_t): nil
declare function P_InstaThrust(mobj: mobj_t, angle: angle_t, move: fixed_t): nil
declare function P_ReturnThrustX(mobj: mobj_t, angle: angle_t, move: fixed_t): fixed_t
declare function P_ReturnThrustY(mobj: mobj_t, angle: angle_t, move: fixed_t): fixed_t
declare function P_LookForEnemies(player: player_t, nonenemies?: boolean, bullet?: boolean): mobj_t
declare function P_NukeEnemies(inflictor: mobj_t, source: mobj_t, radius: fixed_t): nil
declare function P_Earthquake(inflictor: mobj_t, source: mobj_t, radius: fixed_t): nil
declare function P_HomingAttack(source: mobj_t, target: mobj_t): boolean
declare function P_SuperReady(player: player_t): boolean
declare function P_DoJump(player: player_t, soundandstate?: boolean): nil
declare function P_SpawnThokMobj(player: player_t): nil
declare function P_SpawnSpinMobj(player: player_t, type: int): nil
declare function P_Telekinesis(player: player_t, thrust: fixed_t, range: fixed_t): nil
declare function P_SwitchShield(player: player_t, shield: int): nil
declare function P_PlayerCanEnterSpinGaps(player: player_t): boolean
declare function P_PlayerShouldUseSpinHeight(player: player_t): boolean
// p_map
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
declare function P_CeilingzAtPos(x: fixed_t,y: fixed_t,z: fixed_t,height: fixed_t): fixed_t
declare function P_DoSpring(spring: mobj_t, object: mobj_t): nil
declare function P_TryCameraMove(camera: camera_t,x: fixed_t,y: fixed_t): nil
declare function P_TeleportCameraMove(camera: camera_t,x: fixed_t,y: fixed_t,z: fixed_t): nil
// p_inter
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
// p_spec
declare function P_Thrust(mobj: mobj_t, angle: angle_t, move: fixed_t): nil
declare function P_SetMobjStateNF(mobj: mobj_t, statenum: int): boolean
declare function P_DoSuperTransformation(player: player_t, giverings?: boolean): nil
declare function P_ExplodeMissile(missile: mobj_t): nil
declare function P_PlayerTouchingSectorSpecial(player: player_t, section: int, specialnum: int): sector_t
declare function P_FindLowestFloorSurrounding(sector: sector_t): fixed_t
declare function P_FindHighestFloorSurrounding(sector: sector_t): fixed_t
declare function P_FindNextHighestFloor(sector: sector_t, currentheight?: fixed_t): fixed_t
declare function P_FindNextLowestFloor(sector: sector_t, currentheight?: fixed_t): fixed_t
declare function P_FindLowestCeilingSurrounding(sector: sector_t): fixed_t
declare function P_FindHighestCeilingSurrounding(sector: sector_t): fixed_t
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
// p_slopes
declare function P_GetZAt(slope: pslope_t, x: fixed_t, y: fixed_t): fixed_t
declare function P_ButteredSlope(mobj: mobj_t): nil
// r_defs
declare function R_PointToAngle(x: fixed_t, y: fixed_t): angle_t
declare function R_PointToAngle2(x: fixed_t, y: fixed_t, dest_x: fixed_t, dest_y: fixed_t): angle_t
declare function R_PointToDist(x: fixed_t, y: fixed_t): fixed_t
declare function R_PointToDist2(x: fixed_t, y: fixed_t, dest_x: fixed_t, dest_y: fixed_t): fixed_t
declare function R_PointInSubsector(x: fixed_t, y: fixed_t): subsector_t
declare function R_PointInSubsectorOrNil(x: fixed_t, y: fixed_t): subsector_t | nil
// r_things
declare function R_Char2Frame(char: string): int
declare function R_Frame2Char(frame: int): LuaMultiReturn<[string, int]>
declare function R_SetPlayerSkin(player: player_t, skin: int | string): nil
declare function R_SkinUsable(player: player_t, skin: int | string): boolean
// r_data
declare function R_CheckTextureNumForName(name: string): int
declare function R_TextureNumForName(name: string): int
// r_draw
declare function R_GetColorByName(name: string): int
declare function R_GetSuperColorByName(name: string): int
declare function R_GetNameByColor(color: int): string
// s_sound
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
declare function S_GetMusicLength(): int
declare function S_GetMusicPosition(): int
declare function S_SetMusicPosition(position: int): boolean
declare function S_OriginPlaying(origin: mobj_t): boolean
declare function S_IdPlaying(soundnum: int): boolean
declare function S_SoundPlaying(origin: mobj_t, soundnum: int): boolean
declare function S_StartMusicCaption(caption: string, lifespan: tic_t, player?: player_t): nil
declare function S_MusicType(): undefined
declare function S_MusicPlaying(): undefined
declare function S_MusicPaused(): undefined
declare function S_MusicName(): string
declare function S_MusicExists(name: string): boolean
declare function S_SetMusicLoopPoint(): undefined
declare function S_GetMusicLoopPoint(): undefined
declare function S_PauseMusic(): undefined
declare function S_ResumeMusic(): undefined
// g_game
/** @noSelf */
declare type DefineGameType = 
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
declare function G_AddPlayer(skin: string,color: SkinColors,name: string,bot: BotType): player_t
declare function G_RemovePlayer(playernum: UINT8): boolean
declare function G_BuildMapName(map?: int): string
declare function G_BuildMapTitle(map?: int): string
declare type SearchFrequencyTableEntry =
{
    pos: number
    siz: number
}
declare type SearchFrequencyTable =
{
    mapnum: int
    matchd: SearchFrequencyTableEntry
    keywhd: SearchFrequencyTableEntry
    total: int
}
declare function G_FindMap(name: string): LuaMultiReturn<[int,string,SearchFrequencyTable[]]>
declare function G_FindMapByNameOrCode(name: string): LuaMultiReturn<[int,string]>
declare function G_DoReborn(playernum: int): nil
declare function G_SetCustomExitVars(nextmap?: int, skipstats?: int): nil
declare function G_EnoughPlayersFinished(): boolean
declare function G_ExitLevel(): nil
declare function G_IsSpecialStage(map?: int): boolean
declare function G_GametypeUsesLives(): boolean
declare function G_GametypeUsesCoopLives(): boolean
declare function G_GametypeUsesCoopStarposts(): boolean
declare function G_GametypeHasTeams(): boolean
declare function G_GametypeHasSpectators(): boolean
declare function G_RingSlingerGametype(): boolean
declare function G_PlatformGametype(): boolean
declare function G_CoopGametype(): boolean
declare function G_TagGametype(): boolean
declare function G_CompetitionGametype(): boolean
declare function G_TicsToHours(tics: int): int
declare function G_TicsToMinutes(tics: int, full?: boolean): int
declare function G_TicsToSeconds(tics: int): int
declare function G_TicsToCentiseconds(tics: int): int
declare function G_TicsToMilliseconds(tics: int): int

declare function getTimeMicros(): int