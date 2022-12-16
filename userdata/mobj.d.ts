declare class mobj_t
{/**
 * Returns true if the Object is valid (i.e., still exists), false if not.
 */
	readonly valid: boolean
/**
 * The Object's absolute X position in the map. To modify this value, use a function such as P_TeleportMove rather than editing it directly.
 */
	readonly x: fixed_t
/**
 * The Object's absolute Y position in the map. To modify this value, use a function such as P_TeleportMove rather than editing it directly.
 */
	readonly y: fixed_t
/**
 * The Object's absolute Z position in the map.
 */
	z: fixed_t
/**
 * The next Object in the linked list that contains all Objects in the sector.
 */
	readonly snext: mobj_t
/**
 * Unusable by Lua – this is just the previous Object's snext pointer, which points to this Object.
 */
	#sprev: unknown
/**
 * The absolute angle the Object is facing horizontally. 0 is East, ANGLE_90 is North, ANGLE_180 is West, and ANGLE_270 is South.
 */
	angle: angle_t
/**
 * The roll angle of the Object's sprite, that is, the rotation of the sprite on-screen relative to the center of the sprite, if SpriteInfo is not set.

Positive angles roll the sprite in a counterclockwise manner.
 */
	rollangle: angle_t
/**
 * The sprite prefix of the sprite the Object is currently displaying. Note that each time an Object switches states, this value is automatically reset to the new state's sprite prefix.
 */
	sprite: number
/**
 * The sprite frame the Object is currently displaying, plus additional frame flags that set further properties of the current state, including full brightness, animation, and translucency (see State > Attributes). Note that each time an Object switches states, this value is automatically reset to the new state's sprite frame.
 */
	frame: UINT32
/**
 * TODO - Usable when sprite is SPR_PLAY.
 */
	sprite2: UINT32
/**
 * If mobj.frame currently has the frame flag FF_ANIMATE set, this is the duration in tics between each frame in the state's animation. Otherwise, this has no effect on the Object's animation. By default, this is set to the current state's Var2 value.
 */
	anim_duration: UINT16
/**
 * The Object's current render flags (use RF_* constants).
 */
	renderflags: UINT32
/**
 * The Object's current blend mode, which changes the way it is drawn whenever it has some degree of transparency.
 */
	blendmode: number
/**
 * The horizontal scale of the Object's sprite. Is FRACUNIT by default.
 */
	spritexscale: fixed_t
/**
 * The vertical scale of the Object's sprite. Is FRACUNIT by default.
 */
	spriteyscale: fixed_t
/**
 * The relative horizontal offset of the Object's sprite. This value is added to the sprite's original X offset, except when the Object has the RF_ABSOLUTEOFFSETS render flag, where it's used as the X offset itself.
 */
	spritexoffset: fixed_t
/**
 * The relative vertical offset of the Object's sprite. This value is added to the sprite's original Y offset, except when the Object has the RF_ABSOLUTEOFFSETS render flag, where it's used as the Y offset itself.
 */
	spriteyoffset: fixed_t
/**
 * The plane on which the Object's sprite will be drawn if it is a sloped floor sprite (RF_SLOPESPLAT). The P_CreateFloorSpriteSlope function is necessary to modify this field. It has no effect on non-sloped floor sprites.
 */
	readonly floorspriteslope: pslope_t
/**
 * Unusable by Lua – not yet implemented.
 */
	#touching_sectorlist: unknown
/**
 * The subsector the Object is currently in. To obtain the sector the Object is in, use mobj.subsector.sector. Note that mobj.subsector will be nil for Objects currently being removed.
 */
	readonly subsector: subsector_t
/**
 * The absolute "floor" position for the Object, i.e., the height that it considers to be the floor. This can be different from the floor height of the sector the Object is in, for example if it is above a solid FOF. Note that this value is not flipped to a ceiling position if the Object is in reverse gravity.
 */
	readonly floorz: fixed_t
/**
 * The absolute "ceiling" position for the Object, i.e., the height that it considers to be the ceiling. This can be different from the ceiling height of the sector the Object is in, for example if it is below a solid FOF. Note that this value is not flipped to a floor position if the Object is in reverse gravity.
 */
	readonly ceilingz: fixed_t
/**
 * If the floor beneath the Object is a FOF, this index will return that FOF.
 */
	readonly floorrover: ffloor_t
/**
 * If the ceiling above the Object is a FOF, this index will return that FOF.
 */
	readonly ceilingrover: ffloor_t
/**
 * The current radius of the Object. When the Object's scale is modified, this is reset to the default radius for the Object's Object type, multiplied with the new scale. Otherwise this is freely adjustable; the minimum value is 0.
 */
	radius: fixed_t
/**
 * The current height of the Object. When the Object's scale is modified, this is reset to the default height for the Object's Object type, multiplied with the new scale. Otherwise this is freely adjustable; the minimum value is 0. For players, however, note that this value is continuously corrected/modified to be either the default player height or a specific height used in special situations, such as when spinning.
 */
	height: fixed_t
/**
 * The Object's current X-axis momentum. Positive values will cause the Object to move to the East, negative values to the West. If you want the Object to move horizontally at an angle that is not entirely along the X-axis, the X-axis momentum should be the desired momentum multiplied by the cosine of the angle – if mom is the desired momentum and h-angle is an angle_t variable representing the angle between the X-axis and Y-axis, then you should set mobj.momx = mom*cos(h-angle). If the movement has a vertical component as well, you need to multiply the cosine of the vertical angle between the Z-axis and the horizontal plane as well – if v-angle is the vertical angle (with a value of 0 being completely horizontal), then you should set mobj.momx = mom*cos(h-angle)*cos(v-angle).
 */
	momx: fixed_t
/**
 * The Object's current Y-axis momentum. Positive values will cause the Object to move to the North, negative values to the South. If you want the Object to move horizontally at an angle that is not entirely along the Y-axis, the Y-axis momentum should be the desired momentum multiplied by the sine of the angle – if mom is the desired momentum and h-angle is an angle_t variable representing the angle between the X-axis and Y-axis, then you should set mobj.momy = mom*sin(h-angle). If the movement has a vertical component as well, you need to multiply the cosine of the vertical angle between the Z-axis and the horizontal plane as well – if v-angle is the vertical angle (with a value of 0 being completely horizontal), then you should set mobj.momy = mom*sin(h-angle)*cos(v-angle).
 */
	momy: fixed_t
/**
 * The Object's current Z-axis momentum. Positive values cause the Object to move upwards, negative values downwards. If you want the movement to have a horizontal component as well, you need to multiply the sine of the vertical angle between the Z-axis and the horizontal plane as well – if mom is the desired momentum and v-angle is an angle_t variable representing the vertical angle (with a value of 0 being completely horizontal), then you should set mobj.momz = mom*sin(v-angle).
 */
	momz: fixed_t
/**
 * If the Object is standing on a moving floor, this is the Z-axis momentum of the floor.
 */
	pmomz: fixed_t
/**
 * The current value of the Object's state timer, which decreases by 1 each tic until it reaches 0. At this point, the Object will switch to a new state and this value will be reset to the new state's tic duration. If the value is -1, the current state will have infinite duration.
 */
	tics: INT32
/**
 * The number of the state the Object is currently in. When the value of this is changed, Lua will automatically switch the current state to the new value. mobj.sprite, mobj.frame, mobj.tics will be changed to the new state's sprite, frame and tics values respectively. Additional adjustments may be made for player Objects specifically however (such as player animation speeds and switching to superform states). Switching to the state S_NULL will make the Object disappear, unless it is a player Object (this will cause the game to print an error in the console instead).

Note that changing the value of mobj.state directly in Lua will cause the new state's action to be called automatically. To avoid this, the function P_SetMobjStateNF should be used instead.
 */
	state: number
/**
 * The Object's current primary Object flags (use MF_* constants). When the Object is first spawned, this is automatically set to the flags attribute of the Object's Object type. Afterwards it can be adjusted freely.
 */
	flags: UINT32
/**
 * The Object's current secondary Object flags (use MF2_* constants).
 */
	flags2: UINT32
/**
 * The Object's current extra Object flags (use MFE_* constants).
 */
	eflags: UINT16
/**
 * The current skin applied to the Object. For Objects with mobj.sprite set to SPR_PLAY, this will change the appearance of the Object's sprites to that of the character the skin is associated with. This is most commonly used by players, but Extra Life Monitors, Level End Signs, ghost trails, and player thok trails also apply a skin in some situations.
 */
	skin: string
/**
 * The current skin color applied to the Object. When modifying this for regular Objects, this will by default re-map the green range of colors (palette color #s 160–175) to the specified range for the color name given. However, for Objects using SPR_PLAY this can use the current skin's startcolor parameter instead to set the range of colors to color remap.
 */
	color: number
/**
 * Whether this Object will use the rainbow colormap, tinting the sprite using the color set in color.
 */
	colorized: boolean
/**
 * The next Object in the linked list that contains all Objects in the blockmap's current block.
 */
	readonly bnext: mobj_t
/**
 * Unusable by Lua – this is just the previous Object's bnext pointer, which points to this Object.
 */
	#bprev: unknown
/**
 * The next Object in the "hoop". Originally intended for use with NiGHTS hoops, but is usable for other purposes as well.
 */
	hnext: mobj_t
/**
 * The previous Object in the "hoop". Originally intended for use with NiGHTS hoops, but is usable for other purposes as well.
 */
	hprev: mobj_t
/**
 * The Object's current Object type. If the value is changed via Lua (which is usually not necessary), mobj.info will automatically be modified at the same time to point to the mobjinfo_t entry for the new Object type.

Important note: For Objects spawned on the map via a Thing, modifying mobj.type to an Object type without a corresponding Thing type (i.e., mobj.info.doomednum has a value of -1) will cause the Object and its Thing to not be linked properly for players joining a netgame. This is because, when creating the $$$.sav file, the networking code incorrectly assumes Objects of these types will never have a corresponding Thing, regardless of the value of mobj.spawnpoint for any particular Object. This results in mobj.spawnpoint for such an Object becoming nil for any players joining the netgame.
 */
	type: number
/**
 * This points to the mobjinfo_t entry for the Object's Object type, which lists the Object type's properties. As such, it is a shortcut for mobjinfo[mobj.type]. mobj.info itself cannot be changed directly, but if mobj.type is changed, mobj.info will automatically be changed to point to the mobjinfo_t for the new Object type.
 */
	readonly info: mobjinfo_t
/**
 * The Object's current amount of health points. When the Object is first spawned, this is automatically set to the spawnhealth attribute of the Object's Object type. Afterwards it can be adjusted freely. For Objects that do not need a health value, this can be used for miscellaneous purposes if desired.
 */
	health: INT32
/**
 * Used to indicate movement direction for A_Chase and related, using the DI_* constants. Otherwise, this can be used for any miscellaneous purpose whatsoever.
 */
	movedir: angle_t
/**
 * Used as a timer before the Object changes direction (usually if mobj.movecount == 0) for A_Chase and related. Otherwise, this can be used for any miscellaneous purpose whatsoever.
 */
	movecount: INT32
/**
 * Generally used as a "target" Object for enemies and similar to chase towards/fire at. Projectiles (Objects with MF_MISSILE) should set this to the Object that fired them, so they cannot harm/crash into the firer. Otherwise, this can be used to link any related Object at all if needed.
 */
	target: mobj_t
/**
 * Used as a timer to delay certain behavior such as attacks (usually if mobj.reactiontime == 0) for a number of actions, including A_Chase and related. When the Object is first spawned, this is automatically set to the reactiontime attribute for the Object type the Object belongs to, but can freely be adjusted afterwards. For players, this is used by some types of teleports to prevent the them from moving until it has reached 0. Otherwise, this can be used for any miscellaneous purpose whatsoever.
 */
	reactiontime: INT32
/**
 * Used as a timer before switching targets (usually if mobj.threshold == 0) for A_Chase and related. Otherwise, this can be used for any miscellaneous purpose whatsoever.
 */
	threshold: INT32
/**
 * For player Objects, this points to the player's properties (e.g., mobj.player.pflags or mobj.player.powers[pw_invulnerability]). It is recommended mobj.player.mo is not used as this just points back to mobj itself, which is redundant. For regular Objects mobj.player will return nil.
 */
	readonly player: player_t
/**
 * Used to store the player number of the last player targeted for A_Chase and related. Otherwise, this can be used for any miscellaneous purpose whatsoever.
 */
	lastlook: INT32
/**
 * For Objects that have been spawned on the map via a Thing (or "spawn point"), this points to the Thing that spawned it by default. If one doesn't exist, this returns nil. However, this variable can be adjusted to point to a different Thing if needed, or to not point to any Thing at all by using mobj.spawnpoint = nil.

Important notes:

If an Object belongs to an Object type that does not have a corresponding Thing type number (i.e., mobj.info.doomednum has a value of -1), modifying mobj.spawnpoint to a non-nil value will cause the Object and its Thing to not be linked properly for players joining a netgame. This is because, when creating the $$$.sav file, the networking code incorrectly assumes the Object will never have a corresponding Thing, regardless of the value of mobj.spawnpoint. This results in mobj.spawnpoint for such an Object becoming nil for any players joining the netgame.
It is recommended not to make multiple Objects point to the same Thing; for players joining a netgame, $$$.sav will edit mobj.spawnpoint.mobj for all Objects with a mobj.spawnpoint value (except for Object types with no corresponding Thing type; see note above) to point back to mobj, assuming it is the Object that the Thing (mobj.spawnpoint) originally spawned. As mobj.spawnpoint.mobj can only point to one Object at a time, this may result in it pointing to a different Object for players who have just joined the game.
For special placement patterns and player starts, mobj.spawnpoint is nil for all Objects spawned by these Thing types. For standard and customizable Hoops, only the hoop center Object will have a non-nil mobj.spawnpoint value.
 */
	spawnpoint: mapthing_t
/**
 * Generally used as a secondary "target" Object when mobj.target is already in use. For players, this is often used to link players to the next waypoint to move towards, or the Object the player is being carried by currently.
 */
	tracer: mobj_t
/**
 * The Object's current "friction" value. Contrary to real-life friction physics, this is used as a multiplier for mobj.momx and mobj.momy to slow down or speed up the Object when touching the ground. The higher the value of mobj.friction is, the less sludgy/more slippery the floor surface becomes to the Object.
In general:

mobj.friction values smaller than FRACUNIT will slow down the Object on the ground.
mobj.friction values greater than FRACUNIT will speed up the Object on the ground.
mobj.friction values equal to FRACUNIT will not slow down nor speed up the Object at all.

The default mobj.friction value for most Objects is 59392 (hexadecimal: 0xe800), which is equivalent to 29*FRACUNIT/32.
 */
	friction: fixed_t
/**
 * In Doom, this variable originally determined an Object's "move factor", which affected how fast a player could move. However, in SRB2, it is instead used for miscellaneous purposes.
 */
	movefactor: fixed_t
/**
 * Commonly used as a timer before the Object disappears or does something else (see Lua/Hooks > MobjFuse to customize the end effect per Object type), which automatically decreases by 1 each tic until it reaches 0. This is also used for miscellaneous purposes, but this has to be kept the same value always for this to work.
 */
	fuse: INT32
/**
 * The absolute "water top" position for the Object. If the Object is currently touching a water FOF, this is the top height of the water FOF. Otherwise, it defaults to mobj.z - 1000*FRACUNIT.
 */
	watertop: fixed_t
/**
 * The absolute "water bottom" position for the Object. If the Object is currently touching a water FOF, this is the bottom height of the water FOF. Otherwise, it defaults to mobj.z - 1000*FRACUNIT.
 */
	waterbottom: fixed_t
/**
 * Unusable by Lua – this is used by the networking code to number the Objects in the game inside $$$.sav and so shouldn't be available for Lua usage.
 */
	#mobjnum: unknown
/**
 * The Object's current scale. The default scale is FRACUNIT. When this is modified by Lua with mobj.scale = newvalue, this will automatically use P_SetScale(mobj, newvalue) internally to adjust the Object's radius and height, but will also change mobj.destscale to match. This means using P_SetScale itself directly is not redundant as it does not affect mobj.destscale internally, allowing gradual scale changes (rather than instantaneous) to be possible.
 */
	scale: fixed_t
/**
 * The Object's destination scale. If the Object does not currently have this scale, it will gradually change the value of mobj.scale to match this value.
 */
	destscale: fixed_t
/**
 * The Object's scale-changing speed, for when the Object is gradually changing scale to reach the value of mobj.destscale. The value used in most cases is FRACUNIT/12, but this can be adjusted to speed up or slow down the scale-changing if needed.
 */
	scalespeed: fixed_t
/**
 * An extra variable that can be used for miscellaneous purposes. Note that some of SRB2's default Objects already use this variable.
 */
	extravalue1: INT32
/**
 * An extra variable that can be used for miscellaneous purposes. Note that some of SRB2's default Objects already use this variable. In particular, A_Repeat uses it to set the repeat count.
 */
	extravalue2: INT32
/**
 * The Object's "custom value", ported from the v2.0 modification SRB2Morphed. It is unused by SRB2's default Objects and was originally intended as an extra variable for SOC scripting, although it can be used freely for any purpose. Several actions, such as A_CheckCustomValue or A_CusValAction, are available that make use of this value and mobj.cvmem.
 */
	cusval: INT32
/**
 * This is intended as a "memory" for the Object's "custom value", allowing you to store a copy of the custom value and then recall it later, after the actual custom value may have changed. The actions A_CheckCusValMemo and A_UseCusValMemo are available for using the custom value memory.
 */
	cvmem: INT32
/**
 * The slope that the Object is standing on, or nil if the Object is not standing on a slope.
 */
	readonly standingslope: pslope_t
/**
 * If true, this Object will be visually mirrored relative to its angle — its left-side sprites will be seen from the right, and vice-versa, and all sprites will be horizontally flipped accordingly.
 */
	mirrored: boolean
/**
 * This controls whether the Object casts a shadow, and how large the shadow is relative to the Object's radius.
 */
	shadowscale: fixed_t
}