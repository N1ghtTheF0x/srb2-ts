declare class mapthing_t extends UserData
{/**
 * Returns true if the Thing is valid (i.e., it exists), false if not.
 */
	readonly valid: boolean
/**
 * The X coordinate of the Thing in the map, in fracunits.
 */
	x: INT16
/**
 * The Y coordinate of the Thing in the map, in fracunits.
 */
	y: INT16
/**
 * The angle the map Thing is facing, in degrees. For most purposes, this is a value from 0 to 359 – 0 is East, 90 is North, 180 is West and 270 is South. However, some Object types use this variable for other purposes; in these cases, it can be any value from -32768 to 32767.
 */
	angle: INT16
/**
 * The map Thing number of the Object (or otherwise) to spawn with the map Thing. Does not include the multiples of 4096 added on by the map (see mapthing.extrainfo).
 */
	type: UINT16
/**
 * The flags for the map Thing (see MTF_* constants). Also contains Z position information, shifted up by 4 bits (options = flags + z<<4).
 */
	options: UINT16
/**
 * The Z position of the map Thing above the sector floor, in fracunits. Usually pre-calculated by the game as mapthing.options>>4.
 */
	z: INT16
/**
 * An extra parameter calculated as the number of multiples of 4096 added onto the map Thing number. Used by a few Object types for extra effects.
 */
	extrainfo: UINT8
/**
 * Points to the Object spawned by the map Thing. This is not set for Thing types that have no corresponding Object type, such as special placement patterns. In these cases, the value of mobj is nil.
 */
	mobj: mobj_t
}