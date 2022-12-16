/**
 * Boosts mobj's horizontal momentum by the value of move in the direction of angle. Note that this will apply momentum relatively; i.e., all existing momentum applied to the Object in any direction is retained – if P_Thrust is used every tic, this can result in the Object accelerating in the given direction. If the Object has MF2_TWOD, only momentum in the X direction is modified – momentum in the Y direction is unaffected. To replace all existing momentum instead of adding to it, see P_InstaThrust.
 */
declare function P_Thrust(mobj: mobj_t, angle: angle_t, move: fixed_t): nil
/**
 * mobj's state is changed to the specified state number, but without running any actions. If statenum is S_NULL, the Object will be removed (does not work on players).

Note: This should not be confused with the normal method of applying new states, which would be using the code mobj.state = statenum (where mobj and statenum follow the same meanings as the arguments for P_SetMobjStateNF).
 */
declare function P_SetMobjStateNF(mobj: mobj_t, statenum: int): boolean
/**
 * Changes player into its Super form. If giverings? is true, the player is given 50 rings when the function runs. Note that the player still needs all seven Chaos Emeralds as well as the SF_SUPER skin flag for this function to work.
 */
declare function P_DoSuperTransformation(player: player_t, giverings?: boolean): nil
/**
 * Death sequence for the missile Object. Halts missile's momentum, alters its flags, plays its DeathSound and sets its state to DeathState. Does not do anything if the Object has MF_NOCLIPTHING set, as it is used as a dummy flag to indicate when a missile is already "dead".
 */
declare function P_ExplodeMissile(missile: mobj_t): nil
/**
 * Checks if player is touching a sector with the specified sector special from the specified section. If one is found, this will return the sector with the special. Also accounts for FOFs – if the found sector is an FOF, the FOF's control sector is returned.
 */
declare function P_PlayerTouchingSectorSpecial(player: player_t, section: int, specialnum: int): sector_t
/**
 * Looks for the sector surrounding the current one whose floor height is lower than the current sector's floor height. If it is found, the floor height is returned. Otherwise, returns itself.
 */
declare function P_FindLowestFloorSurrounding(sector: sector_t): fixed_t
/**
 * Looks for the sector surrounding the current one whose floor height is higher than the current sector's floor height. If it is found, the floor height is returned. Otherwise, returns itself.
 */
declare function P_FindHighestFloorSurrounding(sector: sector_t): fixed_t
/**
 * Looks for the sector surrounding the current one whose ceiling height is lower than the current sector's ceiling height. If it is found, the ceiling height is returned. Otherwise, returns itself.
 */
declare function P_FindLowestCeilingSurrounding(sector: sector_t): fixed_t
/**
 * Looks for the sector surrounding the current one whose ceiling height is higher than the current sector's ceiling height. If it is found, the ceiling height is returned. Otherwise, returns itself.
 */
declare function P_FindHighestCeilingSurrounding(sector: sector_t): fixed_t
/**
 * Looks for a sector whose floor height is higher than the current sector's floor height. If it is found, the floor height is returned. Otherwise, returns itself.
 */
declare function P_FindNextHighestFloor(sector: sector_t, currentheight?: fixed_t): fixed_t
/**
 * Looks for a sector whose floor height is lower than the current sector's floor height. If it is found, the floor height is returned. Otherwise, returns itself.
 */
declare function P_FindNextLowestFloor(sector: sector_t, currentheight?: fixed_t): fixed_t
/**
 * Finds the first linedef number after start which has the specified linedef special and tag. start can be -1 to start from the first linedef onwards, or set to another linedef's number to carry on from perhaps the last linedef number found (start defaults to -1 if not set).
 */
declare function P_FindSpecialLineFromTag(special: int, tag: int, start?: int): int
/**
 * Switches weather in-game with weathernum (use the PRECIP_ constants). If player is or not specified, the weather is applied globally for all players; otherwise, the weather is applied only for the specified player.
 */
declare function P_SwitchWeather(weathernum: int, player?: player_t): nil
/**
 * Executes a linedef executor. tag is the tag of the executor's trigger linedef. If set, actor is the Object that activated it, and caller is the triggering sector.
 */
declare function P_LinedefExecute(tag: int, actor?: mobj_t, caller?: sector_t): nil
/**
 * Spawns a lightning flash in sector. For this to work in FOFs, sector should be the control sector of the FOF to flash in.
 */
declare function P_SpawnLightningFlash(sector: sector_t): nil
/**
 * Fades all tagged sectors' lighting to a new value set by destvalue. speed determines how quickly the sector's light fades to the new value.
	To do
document ticbased and force
 */
declare function P_FadeLight(tag: int, destvalue: int, speed: int, ticbased?: boolean, force?: boolean): nil
/**
 * If mobj is on top of or inside an FOF with a sector special, this function returns the FOF's control sector; otherwise returns nil.
 */
declare function P_ThingOnSpecial3DFloor(mobj: mobj_t): sector_t
/**
 * Returns true if the flag of the given type is at its corresponding CTF base. Should only be used with types MT_BLUEFLAG and MT_REDFLAG.
 */
declare function P_IsFlagAtBase(type: int): boolean
/**
 * Sets the sky seen in-game to the value of skynum. If player is nil or not specified, the sky is applied globally for all players; otherwise, the sky is applied only for the specified player.
 */
declare function P_SetupLevelSky(skynum: int, player?: player_t): nil
/**
 * Alternative versions:
P_SetSkyboxMobj(mobj_t mobj, boolean/int centerpoint?)
P_SetSkyboxMobj(mobj_t mobj, player_t user)
P_SetSkyboxMobj(mobj_t mobj, boolean/int centerpoint?, player_t user)

Lua-exclusive: Sets which Object correponds to either the skybox's view point or center point (defaults to view point). user is the player to apply the new skybox view to, otherwise it applies to all players. If mobj is nil, the skybox is removed.
 */
declare function P_SetSkyboxMobj(mobj: mobj_t, centerpoint?: boolean | int): nil
declare function P_SetSkyboxMobj(mobj: mobj_t, user: player_t): nil
declare function P_SetSkyboxMobj(mobj: mobj_t, centerpoint: boolean | int, user: player_t): nil
declare function P_SetSkyboxMobj(mobj?: mobj_t, centerpoint?: boolean | int, user?: player_t): nil
/**
 * Lua-exclusive: Starts an earthquake camera effect. intensity determines the earthquake's strength, and time determines its duration. Currently, epicenter and radius are not supported by SRB2 itself, and will have no effect when specified.
 */
declare function P_StartQuake(intensity: fixed_t, time: int, epicenter?: vector3_t, radius?: fixed_t): nil
/**
 * Alternative version:
EV_CrumbleChain(ffloor_t rover)

Shatters the FOF rover, making it vanish from the map and spawning debris at sector. If sector is not given, the debris will be spawned in all target sectors linked to the FOF's control sector.
 */
declare function EV_CrumbleChain(sector: sector_t,rover: ffloor_t): nil
declare function EV_CrumbleChain(rover: ffloor_t): nil
/**
 * Crumbles the FOF rover, making the FOF belonging to rover fall from the map and respawning 10 seconds later at sector if crumblereturn is set to true, otherwise rover will not respawn. player is the player that made rover crumble, if player exists, and origalpha is the original alpha of rover.
 */
declare function EV_StartCrumble(sector: sector_t, rover: ffloor_t, floating?: boolean, player?: player_t, origalpha?: fixed_t, crumblereturn?: boolean): boolean