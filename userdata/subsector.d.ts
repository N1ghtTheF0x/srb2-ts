declare class subsector_t extends UserData
{/**
 * Returns true if the subsector is valid (i.e., it exists), false if not.
 */
	readonly valid: boolean
/**
 * Points to the sector this subsector is linked to.
 */
	readonly sector: sector_t
/**
 * A variable used internally to get the number of segs within this subsector.
 */
	readonly numlines: INT16
/**
 * A variable used internally to get the number of the first seg within this subsector.
 */
	readonly firstline: UINT16
/**
 * To be used in an iterator function, e.g., for polyobj in subsector.polyList(). This iterates through all the PolyObjects witin the subsector, returning a polyobject_t variable for use within the loop's contents.
 */
	readonly polyList: LuaFunction
}