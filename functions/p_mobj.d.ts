/**
 * Creates and returns a new Object of the given type at the given coordinates x, y, and z. Various attributes may be given to it as soon as it is spawned, such as a skin color or secondary Object flags. Further Objects may be spawned within this function to be linked to the new Object if necessary. If the new Object is given the MF_RUNSPAWNFUNC flag during this function, the action set for the Object type's SpawnState property will be run by this function.

The hook MobjSpawn can be used to modify or replace some of the effects of this function.

Note: This is the basic function for spawning all Objects in SRB2. All other listed Lua functions (including actions) that spawn an Object therefore use this function internally to spawn them, and any changes made to this function by the MobjSpawn hook will affect them as well.
 */
declare function P_SpawnMobj(x: fixed_t, y: fixed_t, z: fixed_t, type: int): mobj_t
/**
 * Same as P_SpawnMobj, except the coordinates given are relative to the origin Object. The spawned object's scale and vertical flip are inherited from the origin object.
 */
declare function P_SpawnMobjFromMobj(origin: mobj_t, x: fixed_t, y: fixed_t, z: fixed_t, type: int): mobj_t
/**
 * Removes the Object and its thinker from existence. The hook MobjRemoved can be used to apply additional effects to this function.

Note: The removed Object cannot be referenced again in Lua after using this function.

Note 2: This function will produce an error if it attempts to remove an Object belonging to a player (i.e.: mobj.player must be nil for this function to work).
 */
declare function P_RemoveMobj(mobj: mobj_t): nil
/**
 * Returns true if mobj can display sprite2, false if not. This is specific to objects that have a Skin, as Skins use a special naming system to avoid naming conflicts between themselves.
 */
declare function P_IsValidSprite2(mobj: mobj_t, sprite2: int): boolean
/**
 * Spawns MT_LOCKON in state above mobj. Lua exclusive.
 */
declare function P_SpawnLockOn(player: player_t, target: mobj_t, state: state_t): nil
/**
 * Spawns a missile Object with the default missile positioning, sending it forward to dest at the value of its Speed Object type property. This returns the Object spawned by the function.
 */
declare function P_SpawnMissile(source: mobj_t, dest: mobj_t, type: int): mobj_t
/**
 * Spawns a missile Object at specific x, y, and z coordinates, sending it forward to dest at the value of its Speed Object type property. This returns the Object spawned by the function.
 */
declare function P_SpawnXYZMissile(source: mobj_t, dest: mobj_t, type: int, x: fixed_t, y: fixed_t, z: fixed_t): mobj_t
/**
 * Same as P_SpawnXYZMissile, except the destination is given via the coordinates dest_x, dest_y and dest_z instead of a destination Object dest. This returns the Object spawned by the function.
 */
declare function P_SpawnPointMissile(source: mobj_t, dest_x: fixed_t, dest_y: fixed_t, dest_z: fixed_t, type: int, x: fixed_t, y: fixed_t, z: fixed_t): mobj_t
/**
 * Spawns a missile Object at the value of its Speed Object type property, but with an angle relative to the direction its source Object is facing. The source Object must be a missile itself and must have a target set – the spawned missile will also use this target. This returns the Object spawned by the function.
 */
declare function P_SpawnAlteredDirectionMissile(source: mobj_t, type: int, x: fixed_t, y: fixed_t, z: fixed_t, angle_shift: int): mobj_t
/**
 * In Team Match or CTF, this changes missile's color to match the player's team color (red if player is in the red team, or steel blue if in the blue team). In any other gametype, this will do nothing.
 */
declare function P_ColorTeamMissile(missile: mobj_t, player: player_t): nil
/**
 * Spawns a missile Object at the value of its Speed Object type property, assuming source is a player. angle sets what direction to fire the missile in. If allowaim is set to a non-zero value, the player's vertical aiming angle determines the vertical angle the missile is fired at. Otherwise, it is fired straight forward. flags2 allows additional flags to be added on to the missile's secondary Object flags (such as MF2_RAILRING to make the missile act like the rail ring weapon). This returns the Object spawned by the function.
 */
declare function P_SPMAngle(source: mobj_t, type: int, angle: angle_t, allowaim?: int, flags2?: int): mobj_t
/**
 * Functionally identical to P_SPMAngle, except that the missile's angle will always be source's angle and the player's vertical aiming angle will always be used. This returns the Object spawned by the function.
 */
declare function P_SpawnPlayerMissile(source: mobj_t, type: int, flags2?: int): mobj_t
/**
 * Returns -1 if the object is flipped (i.e., MFE_VERTICALFLIP is set in the Object's extra Object flags) or 1 if it is not.
 */
declare function P_MobjFlip(mobj: mobj_t): int
/**
 * Returns the amount of gravity to be applied to the Object.
 */
declare function P_GetMobjGravity(mobj: mobj_t): fixed_t
/**
 * Returns true if the given Object type is any of the weapon ammo/panel types.
 */
declare function P_WeaponOrPanel(type: int): boolean
/**
 * Sets the type and duration of the player's palette. This is used in the game to flash the screen in events such as when the player is teleported, or when an Armageddon Shield explodes – see PLAYPAL for the palette numbers available in the default PLAYPAL lump.
 */
declare function P_FlashPal(player: player_t, type: int, duration: int): nil
/**
 * Returns the closest Axis Object (of type MT_AXIS) to source.
 */
declare function P_GetClosestAxis(mobj: mobj_t): mobj_t
/**
 * Spawns a loop of Objects at the given coordinates x, y, and z. radius determines the radius of the loop, number determines how many Objects are in the loop, type determines the type of the Objects spawned, state is the starting state of the Objects (defaults to S_NULL if not set, which means the state will not be changed), and rotangle sets the vertical rotation of the loop. If spawncenter is true, the Objects will all start at the center and move outwards, otherwise they will start at a distance of 4/5×radius from the center and move inwards. By default, spawncenter is false.

In SRB2, this function is called when the player uses the paraloop move while flying on a NiGHTS 2D track. It is also called by the action A_RingExplode to create an explosion effect. In both cases, the function is called multiple times in order to form a paraloop "ball". Specifically, this is done by calling the function 16 times with the same values, except that rotangle is set to different multiples of ANGLE_22h each time.

Below is some example Lua code that recreates A_RingExplode's explosion, using an Object actor as a spawn position:

for i=0,15
	P_SpawnParaloop(actor.x, actor.y, actor.z + actor.height, FixedMul(actor.info.painchance, actor.scale), 16, MT_NIGHTSSPARKLE, i*ANGLE_22h, S_NULL, true)
end


Notes:

For all Objects spawned by this function, mobj.fuse is set to (FixedDiv(radius,5*(FRACUNIT/4))>>(FRACBITS+2)) + 1, and mobj.tics to mobj.fuse - 7. The minimum values it can set for them are 2 and 1, respectively. These values are set to make sure that the Objects will all disappear eventually.
The horizontal rotation cannot be controlled by this function.
 */
declare function P_SpawnParaloop(x: fixed_t, y: fixed_t, z: fixed_t, radius: fixed_t, number: int, type: int, rotangle: angle_t, state?: int, spawncenter?: boolean): nil
/**
 * Used by bosses to search for players. Returns true if a player is targeted, false if not. If closest is true, the boss will target the closest player it can find, otherwise the boss will target the first player it finds.
 */
declare function P_BossTargetPlayer(actor: mobj_t, closest?: boolean): boolean
/**
 * Similar to P_LookForPlayers, except actor can search anywhere in the map and even through walls.
 */
declare function P_SupermanLook4Players(actor: mobj_t): boolean
/**
 * Sets mobj's scale to a new value. Editing mobj.scale does the same thing – however, calling P_SetScale will not affect mobj.destscale, unlike editing mobj.scale directly.
 */
declare function P_SetScale(mobj: mobj_t, scale: fixed_t): nil
/**
 * Returns true if the given FOF exists and is non-solid, and mobj is inside it.
 */
declare function P_InsideANonSolidFFloor(mobj: mobj_t, rover: ffloor_t): boolean
/**
 * Returns true if mobj is touching a death pit floor/ceiling.
 */
declare function P_CheckDeathPitCollide(mobj: mobj_t): boolean
/**
 * Returns true if the FOF rover is a solid lava block.
 */
declare function P_CheckSolidLava(rover: ffloor_t): boolean
/**
 * Returns true if the FOF rover is a water block and player is able to run on top of it. This requires the player to be at running speed, but other criteria include whether they have the swimming or running on water abilities, or if they're currently super.
 */
declare function P_CanRunOnWater(player: player_t, rover: ffloor_t): boolean
/**
 * TODO
 */
declare function P_MaceRotate(center: mobj_t, baserot: int, baseprevrot: int): nil
/**
 * Creates pslope_t userdata into mobj that allows it to render as a sloped floor sprite. It can then be accessed and manipulated in mobj.floorspriteslope.
 */
declare function P_CreateFloorSpriteSlope(mobj: mobj_t): nil
/**
 * Wipes the mobj.floorspriteslope field from mobj, effectively ceasing its rendering as a sloped floor sprite. Recommended to use when a sloped floor sprite is no longer needed, since they can increase memory usage.
 */
declare function P_RemoveFloorSpriteSlope(mobj: mobj_t): nil