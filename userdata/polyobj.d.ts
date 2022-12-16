declare class polyobj_t
{/**
 * Special function to check if a XY position is inside the bounds of the PolyObject.
 */
    pointInside(x: fixed_t,y: fixed_t): boolean
/**
 * Special function to check if a mobj's XY position intersects with the lines of the PolyObject.
 */
    mobjTouching(mobj: mobj_t): boolean
/**
 * Special function to check if a mobj's XY position is inside the bounds of the PolyObject.
 */
    mobjInside(mobj: mobj_t): boolean
/**
 * Special function that moves a PolyObject horizontally, x is the X distance to move, y is the Y distance to move, checkmobjs? is a boolean to enable/disable physics with mobjs (enabled by default).
 */
    moveXY(x: fixed_t,y: fixed_t,checkmobjs?: boolean): boolean
/**
 * Special function that rotates a PolyObject, delta is the angle to rotate, turnthingsis an integer to determine if and which mobjs should be rotated with it (0 = nothing, 1 = turn only non-players, 2 = turn everything), checkmobjs? is a boolean to enable/disable physics with mobjs (enabled by default).
 */
    rotate(delta: angle_t,turnthings?: int,checkmobjs?: boolean): boolean
/**
 * Returns true if the polyobject is valid (i.e., it exists), false if not.
 */
	readonly valid: boolean
/**
 * The ID used to reference the PolyObject in the map.
 */
	readonly id: INT32
/**
 * The ID of the parent PolyObject, or -1 if it doesn't have one.
 */
	parent: INT32
/**
 * An array containing all the PolyObject's vertices. Use #polyobj.vertices to get the number of vertices it has.
 */
	readonly vertices: Array<vertex_t>
/**
 * An array containing all the PolyObject's linedefs. Use #polyobj.lines to get the number of lines it has.
 */
	readonly lines: Array<line_t>
/**
 * The PolyObject's control sector.
 */
	readonly sector: sector_t
/**
 * The PolyObject's angle.
 */
	readonly angle: angle_t
/**
 * Setting this value to non-zero will make the PolyObject able to crush players.
 */
	readonly damage: INT32
/**
 * Amount of thrust applied to objects that block the PolyObject's movement. By default this is set to FRACUNIT, but it may be modified by some of the linedef executor actions for PolyObjects.
 */
	readonly thrust: fixed_t
/**
 * The PolyObject's flags (POF_*).
 */
	flags: INT32
/**
 * The PolyObject's translucency level, as a number from 0-9.
 */
	translucency: INT32
/**
 * The tag of linedef executor to trigger on touch.
 */
	readonly triggertag: INT32
}