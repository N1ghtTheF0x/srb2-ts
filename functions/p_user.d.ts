/**
 * Returns the player's normal height (default 48*FRACUNIT, Fang's height is 60*FRACUNIT). Automatically corrected to match the player's current scale.
 */
declare function P_GetPlayerHeight(player: player_t): fixed_t
/**
 * Returns the player's "spin" height (2/3 of the player's full height; normally 32*FRACUNIT). Automatically corrected to match the player's current scale.
 */
declare function P_GetPlayerSpinHeight(player: player_t): fixed_t
/**
 * Returns a value depending on what is happening with the player's movement controls (forwards, backwards and strafing left/right) at the moment, compared to the current movement of the player itself:
0 – no controls pressed/no movement
1 – pressing in direction of movement (accelerating)
2 – pressing in opposite direction of movement (decelerating)
 */
declare function P_GetPlayerControlDirection(player: player_t): int
/**
 * Adds amount to player's score. Also ensures that the score does not exceed MAXSCORE (999999990), and awards lives for every 50000 points (if not losing points). Handled somewhat differently for NiGHTS stages (both normal and Special Stages), modifying player.marescore instead of player.score.
 */
declare function P_AddPlayerScore(player: player_t, amount: int): nil
/**
 * Causes player to steal from everyone else's score in multiplayer.
 */
declare function P_StealPlayerScore(player: player_t, amount: int): nil
/**
 * Checks whether player's skin has SF_NOJUMPDAMAGE and returns the appropriate flags to set for their jump.
 */
declare function P_GetJumpFlags(player: player_t): int
/**
 * Returns true if player is in its pain state with pw_flashing set (and not sliding), false if not.
 */
declare function P_PlayerInPain(player: player_t): boolean
/**
 * Throws back the player, setting the state to the player's pain state (does not spill rings/emeralds/flags nor remove health/shields). source is the Object the damage (or inflictor) came from, and inflictor (which is either source itself or a projectile from it) the Object that dealt the damage, inflictor in particular being used to determine the throw-back speed depending on the flags set. Setting the source and inflictor Objects is not required.
 */
declare function P_DoPlayerPain(player: player_t, source?: mobj_t, inflictor?: mobj_t): nil
/**
 * Resets the player. This will halt anything the player is currently doing.
 */
declare function P_ResetPlayer(player: player_t): nil
/**
 * Checks if player is capable of damaging mobj in their current state and returns true if so.
 */
declare function P_PlayerCanDamage(player: player_t, mobj: mobj_t): boolean
/**
 * Is mobj inside goop? Returns true if yes, false if no. If the Object has MF_NOGRAVITY or is a spectator player, this will always return false.
 */
declare function P_IsObjectInGoop(mobj: mobj_t): boolean
/**
 * Is mobj on the ground? Returns true if yes, false if no. The "ground" can be the Object's floorz or ceilingz depending on whether the Object is in reverse gravity or not. If the Object is currently within goop water, this will always return false.
 */
declare function P_IsObjectOnGround(mobj: mobj_t): boolean
/**
 * Is mobj in a Space Countdown sector/FOF? Returns true if yes, false if no.
 */
declare function P_InSpaceSector(mobj: mobj_t): boolean
/**
 * Is mobj in a quicksand FOF? Returns true if yes, false if no.
 */
declare function P_InQuicksand(mobj: mobj_t): boolean
/**
 * Sets mobj's momz to the value given. If relative is true, this will be added to the Object's previous momz, otherwise it will replace it. (Note: This also corrects for scaling and reverse gravity.)
 */
declare function P_SetObjectMomZ(mobj: mobj_t, momz: fixed_t, relative?: boolean): nil
/**
 * Restores the music to whatever should be depending on whether player has any powerups or not.
 */
declare function P_RestoreMusic(player: player_t): nil
/**
 * Resets player's shield orb appearance to the appropriate one for the player's current shield powers.
 */
declare function P_SpawnShieldOrb(player: player_t): nil
/**
 * Spawns a "ghost" of mobj (a 50% translucent clone of the Object that lasts only 8 tics normally before disappearing). Useful for creating afterimages of Objects such as players, such as with the Super Sneakers power-up or when a player is in Super form. Returns the ghost Object spawned. If a player Object the ghost was made after possesses a followitem, a ghost of that item's Object will additionally be spawn and assigned as the player ghost's tracer, and vice versa.
 */
declare function P_SpawnGhostMobj(mobj: mobj_t): mobj_t
/**
 * Adds amount to player's ring count. Also corrects ring count if > 9999 or < 0. Also awards extra life bonuses for multiples of 100 rings up to the value of maxXtraLife in the MainCfg block (by default this is 2, which allows for extra life bonuses up to 200 rings).
 */
declare function P_GivePlayerRings(player: player_t, amount: int): nil
/**
 * Adds amount to player's lives count. Also corrects lives count if > 99 or < 1.
 */
declare function P_GivePlayerLives(player: player_t, amount: int): nil
/**
 * Adds amount to the lives pool if the game is using shared lives. When not using shared lives, adds amount of lives to all individual players.
 */
declare function P_GiveCoopLives(player: player_t, amount: int, playsound?: boolean): nil
/**
 * Resets player's scoreadd value to 0, ending any score chains in progress.
 */
declare function P_ResetScore(player: player_t): nil
/**
 * If player has the shield power SH_PROTECTELECTRIC, this will activate the Lightning Shield's double jump. In any other case, player peforms a Whirlwind Shield-style jump and switches to their falling animations.
 */
declare function P_DoJumpShield(player: player_t): nil
/**
 * Landing handler for the Bubble Shield. Bounces player upwards.
 */
declare function P_DoBubbleBounce(player: player_t): nil
/**
 * This is used by the Armageddon Shield to blow up enemies, flash the palettes of all players within the explosion radius (1536*FRACUNIT) and destroy the shield currently being held by player. Also plays the Armageddon explosion sound.
 */
declare function P_BlackOw(player: player_t): nil
/**
 * Spawns two Elemental Shield-style flames for both sides and behind player, but needs to be used repeatedly to spawn a true Elemental Shield fire trail. If cropcircle is true (default is false), this instead spawns flames in a circle pattern like that of the Elemental Shield's ground pound attack.
 */
declare function P_ElementalFire(player: player_t, cropcircle?: boolean): nil
/**
 * Sets the flag PF_FINISHED on the player, causing the player to "finish" the level, while still allowing them to continue moving.

If in singleplayer, or if the console variable exitmove is not set, this will cause the player thinker to call P_DoPlayerExit().
 */
declare function P_DoPlayerFinish(player: player_t): nil
/**
 * This is used to have player "complete" the level and become immobile; this will not immediately end the level itself, but prepares to end the level after a set amount of time.
 */
declare function P_DoPlayerExit(player: player_t): nil
/**
 * Set an Object's horizontal momentum to the value of move in the direction of angle. Note that this will apply momentum absolutely; i.e., all existing momentum applied to the Object in any direction is lost. If the Object has MF2_TWOD, only momentum in the X-direction is modified – momentum in the Y-direction is unaffected. To add to existing momentum rather than completely replace it, see P_Thrust.
 */
declare function P_InstaThrust(mobj: mobj_t, angle: angle_t, move: fixed_t): nil
/**
 * Returns the X component of a set thrust value at a specified angle. mobj is unused.
 */
declare function P_ReturnThrustX(mobj: mobj_t, angle: angle_t, move: fixed_t): fixed_t
/**
 * Returns the Y component of a set thrust value at a specified angle. mobj is unused.
 */
declare function P_ReturnThrustY(mobj: mobj_t, angle: angle_t, move: fixed_t): fixed_t
/**
 * Returns a nearby Object that player can hit, if one is found. This is used by the CA_HOMINGTHOK and CA2_GUNSLINGER character abilities, as well as the Attraction Shield's homing attack ability.

By default, this only looks for shootable enemies or bosses (not including the Deton), they must be within RING_DIST (= 512 fracunits) from the player's position, and they cannot be more than 24 fracunits above the player's z position. If nonenemies is true (default is false), this function will also look for springs and monitors. If bullet is true (default is false), the function can look upwards but is limited to a looking span of 30 degrees up or down, the searching distance is doubled (= 1024 fracunits), and monitors and Detons are included in the search.

Note that Objects with the secondary flag MF2_INVERTAIMABLE may invert some of the effects of this function when found by it.
 */
declare function P_LookForEnemies(player: player_t, nonenemies?: boolean, bullet?: boolean): mobj_t
/**
 * Instantly defeats all enemies and damages bosses (as well as players in shooting gametypes) within a radius around the inflictor Object (the Object causing the damage). The source Object is where inflictor came from, if not the inflictor itself.
 */
declare function P_NukeEnemies(inflictor: mobj_t, source: mobj_t, radius: fixed_t): nil
/**
 * The source Object faces the target Object and moves towards it; needs to be repeatedly used to work properly. source's movement speed depends on what source is – players will move at 2/3 of their actionspd value, the Deton will move at 17/20 of the enemy player's normalspeed value, otherwise all other Objects will use their Object type's Speed value (threshold of 32000 for the source cuts this in half). Returns true if the homing attack was successful, returns false if not.
 */
declare function P_HomingAttack(source: mobj_t, target: mobj_t): boolean
/**
 * Returns true if the conditions are right for player to turn Super, false if not.
 */
declare function P_SuperReady(player: player_t): boolean
/**
 * Makes the player jump. player.mo.momz is set to a particular value depending on the situation, and the PF_JUMPED flag is given to player.pflags. If soundandstate is set to true (the default value), player.mo's state will be changed to the appropriate jump states and play the jump sound. If the player has PF_JUMPSTASIS in player.pflags, or player.jumpfactor is 0, this function will do nothing.
 */
declare function P_DoJump(player: player_t, soundandstate?: boolean): nil
/**
 * Spawns the player's thokitem defined in S_SKIN at player's location. Defaults to MT_THOK if no object is defined.
 */
declare function P_SpawnThokMobj(player: player_t): nil
/**
 * Spawns a spin trail Object for player at player's location. type determines the type of the Object spawned.
 */
declare function P_SpawnSpinMobj(player: player_t, type: int): nil
/**
 * Pushes away all enemies and players within a radius of range around player with the thrust value thrust. If thrust is negative, this will instead pull in enemies and players towards player.
 */
declare function P_Telekinesis(player: player_t, thrust: fixed_t, range: fixed_t): nil
/**
 * Switches the current shield player has with shieldtype. This will also cause an unused Armageddon Shield to explode. For the list of possible shield types, see Shield types.
 */
declare function P_SwitchShield(player: player_t, shield: int): nil
/**
 * Calls P_PlayJingleMusic for the player player with the appropriate arguments as set by jingletype. jingletype should be one of the JT_* constants.
 */
declare function P_PlayJingle(player: player_t, jingletype: int): nil
/**
 * Pushes the music musname to player's music stack with the properties set by musflags, looping, and jingletype, and plays the music for that player. If not specified, musflags will be set to 0, looping will be set to true, and jingletype will be set to JT_OTHER.
	To do
Document the music stack (see s_sound.c) and musflags (see doomstat.h)
 */
declare function P_PlayJingleMusic(player: player_t, musname: string, musflags: int, looping?: boolean, jingletype?: int): nil
/**
 * Spawns spindash dust randomly around player within a certain radius, and plays sound.
 */
declare function P_SpawnSkidDust(player: player_t, radius: fixed_t, sound?: int): nil
/**
 * Damages enemies within the given radius. Used for Super Knuckles' landing.
 */
declare function P_Earthquake(inflictor: mobj_t, source: mobj_t, radius: fixed_t): nil
